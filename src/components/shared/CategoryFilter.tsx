"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CiFilter } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { getAllCategories } from "@/lib/actions/category.actions";
import { ICategory } from "@/lib/database/models/category.model";

const CategoryFilter = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    // Define an async function to fetch categories from the server on component mount.
    const getCategories = async () => {
      const categoriesList = await getAllCategories();
      categoriesList && setCategories(categoriesList as ICategory[]);
    };

    getCategories();
  }, []); // The empty dependency array ensures that this effect runs only once, when the component mounts.

  const onSelectCategory = (category: string) => {
    let newURL = "";

    // If a specific category is selected and it's not "All"
    if (category && category !== "All") {
      // Update the URL with the new category parameter
      newURL = formUrlQuery({
        params: searchParams.toString(), // Convert current search parameters to a string
        key: "category", // The key to update in the URL
        value: category, // The selected category to set as the value
      });
    } else {
      // If "All" is selected, remove the category parameter from the URL
      newURL = removeKeysFromQuery({
        params: searchParams.toString(), // Convert current search parameters to a string
        keysToRemove: ["category"], // The key to remove from the URL
      });
    }

    // Navigate to the new URL without scrolling the page
    router.push(newURL, { scroll: false });
  };

  return (
    <Select
      aria-label="Category Filter"
      name="category"
      onValueChange={(value: string) => {
        onSelectCategory(value);
      }}
    >
      <SelectTrigger className="select-field" aria-label="Select a Category">
        <div className="flex gap-3">
          <CiFilter size={24} />
          <SelectValue placeholder="Category" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="All" className="select-item p-regular-14">
          All
        </SelectItem>

        {categories.map((category) => (
          <SelectItem
            key={category._id}
            value={category.name}
            className="select-item p-regular-14"
          >
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CategoryFilter;
