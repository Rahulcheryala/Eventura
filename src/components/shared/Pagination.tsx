"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";
import { formUrlQuery } from "@/lib/utils";

type PaginationProps = {
  page: number | string;
  totalPages: number;
  urlParamName?: string;
};

const Pagination = ({ page, totalPages, urlParamName }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClick = (btnType: string) => {
    // Calculate the new page value based on button type ("next" or "previous")
    const pageValue = btnType === "next" ? Number(page) + 1 : Number(page) - 1;

    // Form the new URL with updated page parameter
    const newURL = formUrlQuery({
      params: searchParams.toString(), // Convert current search parameters to a string
      key: urlParamName || "page", // Use provided URL parameter name or default to "page"
      value: pageValue.toString(), // Convert the new page value to a string
    });

    // Navigate to the new URL without scrolling the page
    router.push(newURL, { scroll: false });
  };

  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        disabled={Number(page) <= 1}
        onClick={() => onClick("prev")}
      >
        Previous
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        disabled={Number(page) >= totalPages}
        onClick={() => onClick("next")}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
