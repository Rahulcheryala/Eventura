"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import eventFormSchema from "@/lib/validator";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { eventDefaultValues } from "@/constants";
import Dropdown from "./Dropdown";
import { Textarea } from "@/components/ui/textarea";
import FileUploader from "./FileUploader";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "@/components/ui/checkbox";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { createEvent, updateEvent } from "@/lib/actions/event.actions";
import { IEvent } from "@/lib/database/models/event.model";
import { handleError } from "@/lib/utils";

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
  event?: IEvent;
  eventId?: string;
};

// const tomorrow = new Date();
// tomorrow.setDate(tomorrow.getDate() + 1);

const setTime = (hours: any, minutes: any) => {
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  return date;
};

const EventForm = ({ userId, type, event, eventId }: EventFormProps) => {
  const Router = useRouter();

  // Set initial form values based on whether the event is being created or updated
  const initialValues =
    event && type === "Update"
      ? {
          ...event,
          categoryId: event.category._id,
          startDateTime: new Date(event.startDateTime),
          endDateTime: new Date(event.endDateTime),
        }
      : eventDefaultValues;

  // State to manage the files for image upload
  const [files, setFiles] = useState<File[]>([]);

  // Destructure the startUpload function for image uploading
  const { startUpload } = useUploadThing("imageUploader");

  // 1. Define your form with initial values and validation schema defined in validator.ts
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues,
  });

  // 2. Define a submit handler to handle form submission
  async function onSubmit(values: z.infer<typeof eventFormSchema>) {
    // Initialize the image URL with the existing value
    let uploadedImageURL = values.imageURL;

    // If there are files to upload, upload them and get the URL
    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      // If the upload fails, stop the submission
      if (!uploadedImages) {
        return;
      }

      // Update the image URL with the URL of the uploaded image
      uploadedImageURL = uploadedImages[0].url;
    }

    // Handle event creation
    if (type === "Create") {
      try {
        // Create a new event with the form values and uploaded image URL
        const newEvent = await createEvent({
          userId,
          event: { ...values, imageURL: uploadedImageURL },
          path: "/profile",
        });

        // If the event is created successfully, reset the form and navigate to the event page
        if (newEvent) {
          form.reset();
          Router.push(`/events/${newEvent._id}`);
        }

        console.log("NEW event created", newEvent);
      } catch (error) {
        handleError(error);
      }
    }

    // Handle event update
    if (type === "Update") {
      // If no event ID is provided, go back to the previous page
      if (!eventId) {
        Router.back();
        return;
      }

      try {
        // Update the existing event with the form values and uploaded image URL
        const updatedEvent = await updateEvent({
          userId,
          event: { ...values, imageURL: uploadedImageURL, _id: eventId },
          path: `/events/${eventId}`,
        });

        // If the event is updated successfully, reset the form and navigate to the updated event page
        if (updatedEvent) {
          form.reset();
          Router.push(`/events/${updatedEvent._id}`);
        }

        console.log("Event Updated", updatedEvent);
      } catch (error) {
        console.log("Error", error);
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Event Title"
                    className="input-field px-5 focus:ring-2 focus:ring-primary-500/60"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    placeholder="Description"
                    className="textarea rounded-2xl min-h-72 max-h-72 resize-none overscroll-contain"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageURL"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageURL={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center bg-grey-50 w-full rounded-full relative">
                    <Image
                      src="/assets/icons/location-grey.svg"
                      alt="location"
                      width={49}
                      height={48}
                      className="w-6 h-6 object-cover absolute left-4"
                    />

                    <Input
                      placeholder="Event location or Online"
                      className="input-field pl-12 focus:ring-2 focus:ring-primary-500/60"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center bg-grey-50 w-full rounded-full relative">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calender"
                      width={49}
                      height={48}
                      className="w-6 h-6 object-cover absolute left-4 filter-grey"
                    />
                    <p className="ml-12 whitespace-nowrap text-gray-600">
                      Start Date :
                    </p>
                    <DatePicker
                      selected={field.value}
                      minDate={new Date()}
                      onChange={(date: Date | null) => field.onChange(date)}
                      showTimeSelect
                      timeFormat="hh:mm aa"
                      minTime={setTime(9, 0)} // Set min time to 9:00 AM
                      maxTime={setTime(23, 0)} // Set max time to 11:00 PM
                      timeIntervals={30}
                      timeCaption="time"
                      dateFormat="dd/MM/yyyy h:mm aa"
                      onKeyDown={(e) => e.preventDefault()}
                      className="input-field pl-3 caret-transparent"
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center bg-grey-50 w-full rounded-full relative">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calendar"
                      width={49}
                      height={48}
                      className="w-6 h-6 object-cover absolute left-4 filter-grey"
                    />
                    <p className="ml-12 whitespace-nowrap text-gray-600">
                      End Date :
                    </p>
                    <DatePicker
                      selected={field.value}
                      minDate={form.getValues("startDateTime")}
                      onChange={(date: Date | null) => field.onChange(date)}
                      showTimeSelect
                      timeFormat="hh:mm aa"
                      minTime={form.getValues("startDateTime")} // Set min time to 9:00 AM
                      maxTime={setTime(23, 0)} // Set max time to 11:00 PM
                      timeIntervals={30}
                      timeCaption="time"
                      dateFormat="dd/MM/yyyy h:mm aa"
                      onKeyDown={(e) => e.preventDefault()}
                      className="input-field pl-3 caret-transparent"
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center bg-grey-50 w-full rounded-full relative">
                    <Image
                      src="/assets/icons/dollar.svg"
                      alt="Dollar"
                      width={24}
                      height={24}
                      className="w-6 h-6 object-cover absolute left-3"
                    />

                    <Input
                      type="number"
                      placeholder="Price"
                      disabled={form.getValues("isFree")}
                      className="p-regular-16 border-0 bg-grey-50 outline-none focus:ring-2 focus:ring-primary-500/60 h-[54px] w-full rounded-full pl-11 appearance-none"
                      {...field}
                    />

                    <FormField
                      control={form.control}
                      name="isFree"
                      render={({ field }) => (
                        <FormItem className="w-fit absolute right-4">
                          <FormControl>
                            <div className="flex flex-row-reverse items-center bg-grey-50 w-full rounded-full relative group">
                              <Checkbox
                                id="isFree"
                                disabled={form.getValues("price") !== ""}
                                onCheckedChange={field.onChange}
                                checked={field.value}
                                className="w-5 h-5 border-2 border-primary-500 focus-visible:ring-2 focus-visible:ring-primary-500/60 ring-offset-0 peer"
                              />
                              <label
                                htmlFor="isFree"
                                className="flex items-center w-full whitespace-nowrap pr-3 leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Free Ticket
                              </label>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex items-center bg-grey-50 w-full rounded-full relative">
                    <Image
                      src="/assets/icons/link.svg"
                      alt="Link"
                      width={49}
                      height={48}
                      className="w-6 h-6 object-cover absolute left-4"
                    />

                    <Input
                      placeholder="URL"
                      className="input-field pl-12 focus:ring-2 focus:ring-primary-500/60"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className={`rounded-full font-semibold tracking-wide text-lg select-none ${
            form.formState.isSubmitting && "cursor-wait"
          }`}
        >
          {type === "Create" &&
            (form.formState.isSubmitting ? "Submitting..." : `${type} Event`)}
          {type === "Update" &&
            (form.formState.isSubmitting ? "Updating..." : `${type} Event`)}
        </Button>
      </form>
    </Form>
  );
};

export default EventForm;
