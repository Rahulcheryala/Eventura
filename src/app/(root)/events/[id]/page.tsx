import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const EventPage = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event = await getEventById(id);
  // console.log(event);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });
  // console.log(relatedEvents);

  return (
    <>
      <section className="w-full bg-dotted-pattern bg-contain bg-center bg-primary-50">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl mx-auto">
          <div className="overflow-hidden md:py-10 py-4 lg:px-8 md:pl-6 md:pr-0 px-4">
            <Image
              src={event.imageURL}
              alt="hero image"
              width={1000}
              height={1000}
              className="h-full min-h-[300px] object-cover object-center rounded-3xl"
            />
          </div>

          <div className=" w-full flex flex-col sm:gap-8 gap-4 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="sm:h2-bold h3-bold">{event.title}</h2>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <div className="flex gap-3">
                  <p className="p-bold-16 sm:p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-500">
                    {event.isFree ? "FREE" : `$${event.price}`}
                  </p>

                  <p className="p-medium-14 sm:p-medium-16 rounded-full bg-grey-500/10 px-4 py-2.5 text-grey-500 whitespace-nowrap">
                    {event.category.name}
                  </p>
                </div>

                <p className="sm:p-medium-18 p-medium-16 ml-2 mt-2 sm:mt-0">
                  by{" "}
                  <span className="text-primary-500 italic ml-1">
                    {event.organizer.firstName} {event.organizer.lastName}
                  </span>
                </p>
              </div>
            </div>

            {/* CHECKOUT BUTTON */}
            <CheckoutButton event={event} />

            <div className="flex flex-col gap-5">
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt="calender"
                  width={49}
                  height={48}
                  className="w-6 h-6 object-cover"
                />

                <div className="flex flex-wrap items-center p-medium-16 sm:gap-x-4 gap-x-2 gap-y-1">
                  <p>
                    {formatDateTime(event.startDateTime).dateOnly} -{" "}
                    {formatDateTime(event.startDateTime).timeOnly}
                  </p>
                  <div className="flex flex-wrap sm:gap-x-4 gap-x-2 gap-y-1">
                    <p className="p-medium-16 italic text-orange-500">to</p>
                    {formatDateTime(event.endDateTime).dateOnly} -{" "}
                    {formatDateTime(event.endDateTime).timeOnly}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src="/assets/icons/location.svg"
                  alt="location"
                  width={49}
                  height={48}
                  className="w-6 h-6 object-cover"
                />

                <p className="p-medium-16">{event.location}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">What You'll Learn:</p>
              <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
              <Link
                href={event.url}
                target="_blank"
                className="link p-medium-16 lg:p-regular-18 truncate text-primary-500 underline"
              >
                {event.url}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events -> Events from the same organizer or category name */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Related Events</h2>

        <Collection
          data={relatedEvents?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventPage;
