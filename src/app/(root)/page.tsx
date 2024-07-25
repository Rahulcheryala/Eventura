import Collection from "@/components/shared/Collection";
import HeroImage from "@/components/shared/HeroImage";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import Link from "next/link";

const Home = async () => {
  const events = await getAllEvents({
    query: "",
    category: "",
    limit: 6,
    page: 1,
  });
  // console.log(events);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 lg:py-10">
        <div className="wrapper flex flex-col md:flex-row justify-between items-start gap-12 max-lg:gap-5">
          <div className="flex flex-col justify-center gap-8 md:max-lg:my-16">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your Events, Out Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Book and learn helpful tips from 3,168+ mentors in the world-class
              companies with our global community
            </p>
            <Button asChild size="lg" className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <HeroImage />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          Trusted by <br /> Thousands of events
        </h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          Search for events Category Filter
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={2}
        />
      </section>
    </>
  );
};

export default Home;
