import { FaArrowRight } from "react-icons/fa6";
import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { DeleteConfirmation } from "./DeleteConfirmation";

type CardProps = {
  event: IEvent;
  hasOrderLink: boolean;
  hidePrice: boolean;
};

const EventCard = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="relative flex flex-col min-h-96 w-full max-w-96 overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg ">
      <Link
        tabIndex={-1}
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageURL})` }}
        className="link flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />

      {/* Is event creator ? */}
      {isEventCreator && !hidePrice && (
        <div className="absolute top-2 right-2 shadow-sm flex flex-col items-center gap-1.5">
          <Link
            href={`/events/${event._id}/update`}
            className="bg-grey-50 hover:bg-gray-200 p-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-500 rounded-lg"
          >
            <Image
              src="/assets/icons/edit.svg"
              alt="edit"
              width={36}
              height={36}
              className="w-5 h-5 object-cover"
            />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex flex-col sm:h-48 h-fit gap-3 sm:p-5 p-3 md:gap-4">
        <Link
          tabIndex={-1}
          href={`/events/${event._id}`}
          className="flex-1 flex flex-col gap-2 md:gap-2"
        >
          {!hidePrice && (
            <div className="flex gap-2">
              <span className="p-semibold-14 w-min h-fit rounded-full bg-green-100 px-4 py-1 text-green-600">
                {event.isFree ? "FREE" : `$${event.price}`}
              </span>
              <p className="p-semibold-14 w-min rounded-full bg-grey-50 px-4 py-1 text-grey-500 whitespace-nowrap">
                {event.category.name}
              </p>
            </div>
          )}

          <p className="p-medium-16 text-grey-500">
            {formatDateTime(event.startDateTime).dateTime}
          </p>

          <p className="p-medium-16 md:p-medium-20 w-[calc(100%-3rem)] flex-1 text-black overflow-hidden whitespace-nowrap text-ellipsis">
            {event.title}
          </p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-primary-500">
            {event.organizer.firstName} {event.organizer.lastName + "sssss"}
          </p>

          {hasOrderLink && (
            <Link
              href={`/orders?eventId=${event._id}`}
              className="flex gap-2 items-center group"
            >
              <p className="text-primary-500 group flex items-center hover:bg-primary-500 px-4 py-1 rounded-2xl hover:text-white transition-colors duration-300 whitespace-nowrap">
                Order Details
                <FaArrowRight className="ml-2 transition-transform duration-500 group-hover:translate-x-1" />
              </p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
