import { SchoolCardProps } from "@/interfaces/SchoolCard";

export const topShools: Array<SchoolCardProps> = [
  {
    id: "7",
    name: "Hi",
    streetAddress: {
      id: 1,
      name: "",
      city: {
        id: 1,
        name: "algiers",
        province: {
          id: 16,
          name: "Algiers",
          country: { id: 1, name: "Algeria" },
        },
      },
    },
    lng: "0",
    lat: "0",
    initialFavorite: false,
    rating: 0,
    bio: "I am a good School",
  },
];
