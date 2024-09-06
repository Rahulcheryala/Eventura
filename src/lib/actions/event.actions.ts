"use server";

import {
  CreateEventParams,
  DeleteEventParams,
  GetAllEventsParams,
  GetEventsByUserParams,
  GetRelatedEventsByCategoryParams,
  UpdateEventParams,
} from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import Event from "../database/models/event.model";
import Category from "../database/models/category.model";
import { revalidatePath } from "next/cache";

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

const populateEvent = async (query: any) => {
  return query
    .populate({
      path: "organizer",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({ path: "category", model: Category, select: "_id name" });
};

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();

    // Find the organizer by userId
    const organizer = await User.findById(userId);
    if (!organizer) {
      // Throw an error if the organizer is not found
      throw new Error("Organizer not found.");
    }

    // Create a new event with the provided event data
    const newEvent = await Event.create({
      ...event,
      category: event.categoryId, // Assign the category from event.categoryId
      organizer: userId, // Assign userId as the organizer
    });

    // Revalidate the specified path to update static content
    revalidatePath(path);

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
};

export const updateEvent = async ({
  userId,
  event,
  path,
}: UpdateEventParams) => {
  try {
    await connectToDatabase();

    const eventToUpdate = await Event.findById(event._id);
    if (!eventToUpdate) {
      throw new Error("Event not found.");
    }
    if (eventToUpdate.organizer.toHexString() !== userId) {
      throw new Error("Unauthorized action.");
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      event._id,
      {
        ...event,
        category: event.categoryId,
      },
      { new: true }
    );

    if (updatedEvent) {
      revalidatePath(path);
    }

    return JSON.parse(JSON.stringify(updatedEvent));
  } catch (error) {
    handleError(error);
  }
};

export const deleteEvent = async ({ eventId, path }: DeleteEventParams) => {
  try {
    await connectToDatabase();

    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (deletedEvent) {
      revalidatePath(path);
    }
  } catch (error) {
    handleError(error);
  }
};

export const getEventById = async (eventId: string) => {
  try {
    await connectToDatabase();

    const event = await populateEvent(Event.findById(eventId));
    if (!event) {
      throw new Error("Event not found.");
    }

    return JSON.parse(JSON.stringify(event));
  } catch (error) {
    handleError(error);
  }
};

export const getAllEvents = async ({
  query,
  limit = 3,
  page,
  category,
}: GetAllEventsParams) => {
  try {
    await connectToDatabase();

    // Create a condition for the title using a case-insensitive regex if a query is provided
    const titleCondition = query
      ? { title: { $regex: query, $options: "i" } }
      : {};

    // Fetch the category object by its name if a category is provided
    const categoryCondition = category
      ? await getCategoryByName(category)
      : null;

    // Combine the conditions using the $and operator
    const conditions = {
      $and: [
        titleCondition,
        categoryCondition ? { category: categoryCondition._id } : {},
      ],
    };

    // Calculate the number of documents to skip for pagination
    // When in page 1, skipAmount will be 0, so the first 3 documents will be returned
    // When in page 2, skipAmount will be 3, so the next 3 documents will be returned, and so on
    const skipAmount = (Number(page) - 1) * limit;

    // Create the query to fetch events with the specified conditions, sorting, and pagination
    const eventsQuery = Event.find(conditions)
      .sort({ createdAt: "desc" }) // sorts the documents in descending order of creation date
      .skip(skipAmount) // This skips a specified number of documents in the result set, useful for pagination
      .limit(limit); // This limits the number of documents returned to the specified limit, useful for controlling the number of results per page in pagination.

    // Execute the query and populate organizer and category fields with their name instead of their IDs
    const events = await populateEvent(eventsQuery);

    // Count the total number of documents that match the conditions
    const eventsCount = await Event.countDocuments(conditions);

    return {
      data: JSON.parse(JSON.stringify(events)),
      totalPages: Math.ceil(eventsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
};

export const getRelatedEventsByCategory = async ({
  categoryId,
  eventId,
  limit = 3,
  page = 1,
}: GetRelatedEventsByCategoryParams) => {
  try {
    await connectToDatabase();

    const skipAmount = (Number(page) - 1) * limit;
    const query = {
      $and: [{ category: categoryId }, { _id: { $ne: eventId } }],
    };
    const eventsQuery = Event.find(query)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(3);

    const relatedEvents = await populateEvent(eventsQuery);
    const eventsCount = await Event.countDocuments(query);

    return {
      data: JSON.parse(JSON.stringify(relatedEvents)),
      totalPages: Math.ceil(eventsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
};

export const getEventsByUser = async ({
  userId,
  limit = 6,
  page,
}: GetEventsByUserParams) => {
  try {
    await connectToDatabase();

    const skipAmount = (page - 1) * 6;
    const query = { organizer: userId };

    const eventsQuery = Event.find(query)
      .sort({ createdAt: "desc" })
      .skip(skipAmount)
      .limit(limit);

    const organizedEvents = await populateEvent(eventsQuery);
    const eventsCount = await Event.countDocuments(query);

    return {
      data: JSON.parse(JSON.stringify(organizedEvents)),
      totalPages: Math.ceil(eventsCount / limit),
    };
  } catch (error) {
    handleError(error);
  }
};
