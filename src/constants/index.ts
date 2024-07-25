export const headerLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Create Events",
    href: "/events/create",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageURL: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  price: "",
  isFree: false,
  url: "",
  categoryId: "",
  // organizer: "",
};
