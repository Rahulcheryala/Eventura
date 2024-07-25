import Loader from "@/components/shared/Loader";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-[calc(100dvh-5rem)]">
      <Loader />
    </div>
  );
};

export default loading;
