import { z } from "zod";

const eventFormSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." })
    .max(1000, { message: "Description must be at most 400 characters." }),
  location: z
    .string()
    .min(3, {
      message: "Location must be at least 3 characters.",
    })
    .max(400, {
      message: "Location must be at most 400 characters.",
    }),
  imageURL: z.string().url({ message: "Image URL must be a valid URL." }),
  startDateTime: z.date(),
  endDateTime: z.date(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url({ message: "URL must be a valid URL." }),
  categoryId: z.string(),
  // organizer: z.string(),
});

export default eventFormSchema;
