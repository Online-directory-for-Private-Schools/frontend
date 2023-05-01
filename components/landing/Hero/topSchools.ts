import { SchoolCardProps } from "@/interfaces/SchoolCard";

const schools: Array<SchoolCardProps> = [
  {
    schoolName: "test1",
    rating: 5,
    schoolCity: "mohamadia",
    description: "I am a good school",
    googleMapLocation: "13123, 131",
    initialFavorite: true,
  },
  {
    schoolName: "test2",
    rating: 4,
    schoolCity: "mohamadia",
    description: "I am a good school",
    googleMapLocation: "13123, 131",
    initialFavorite: true,
  },
  {
    schoolName: "test3",
    rating: 3,
    schoolCity: "mohamadia",
    description:
      "I am a good school, I like schooling, I am the best at what i school, no one is schooler than me",
    googleMapLocation: "13123, 131",
    initialFavorite: false,
  },
];

export default schools;
