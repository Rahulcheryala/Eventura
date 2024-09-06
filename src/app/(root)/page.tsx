import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import HeroImage from "@/components/shared/HeroImage";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = async ({ searchParams }: SearchParamProps) => {
  // console.log(searchParams);
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category: category,
    limit: 3,
    page: page,
  });
  // console.log(events?.data);
  // console.log(events?.totalPages);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-no-repeat bg-cover py-5 lg:py-10">
        <div className="wrapper flex flex-col md:flex-row justify-between items-start gap-12 max-lg:gap-5">
          <div className="flex flex-col justify-center gap-8 md:max-lg:my-16">
            <h1 className="h1-bold">
              Curate, Connect, Celebrate:
              <br className="hidden lg:block" /> Your Events, Our Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Learn from 3,000+ expert planners and industry leaders, and
              transform your events with our global community's best practices.
            </p>
            <Button
              asChild
              size="lg"
              className="button w-full sm:w-fit group text-white"
            >
              <Link href="#events">
                Explore Now
                <FaLongArrowAltRight size={20} className="ml-3" />
              </Link>
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
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
};

export default Home;
