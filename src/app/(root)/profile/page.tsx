import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Collection from "@/components/shared/Collection";
import { auth } from "@clerk/nextjs/server";
import { getEventsByUser } from "@/lib/actions/event.actions";

const ProfilePage = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const organizedEvents = await getEventsByUser({ userId, page: 1 });
  console.log(organizedEvents);

  return (
    <>
      {/* My Tickets */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 px-4 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>

          <Button asChild className="button px-6 hidden sm:flex">
            <Link href={`/#events`} className="flex flex-nowrap group">
              Explore More Events
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:animate-pulse" />
            </Link>
          </Button>
        </div>
      </section>

      {/* <section className="wrapper my-8">
        <Collection
          data={events?.data}
          emptyTitle="No event Tickets purchased yet 🎟️"
          emptyStateSubtext="No worries! You can explore more events below."
          collectionType="My_Tickets"
          limit={3}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        />
      </section> */}

      {/* Events Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 px-4 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>

          <Button asChild className="button px-6 hidden sm:flex">
            <Link href={`/events/create`} className="flex flex-nowrap group">
              Create New
              <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:animate-pulse" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <Collection
          data={organizedEvents?.data}
          emptyTitle="No event have been created yet"
          emptyStateSubtext="Go ahead and create your first event!"
          collectionType="Events_Organized"
          limit={6}
          page={1}
          urlParamName="eventsPage"
          totalPages={2}
        />
      </section>
    </>
  );
};

export default ProfilePage;
