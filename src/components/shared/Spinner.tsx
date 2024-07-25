const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-56">
      <div
        className="animate-spin inline-block size-10 border-[5px] border-transparent border-t-primary-500 border-b-primary-500 text-primary-500 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
