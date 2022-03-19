import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "racquets",
    description:
        "Starting at ₹1245",
  },
  {
    _id: uuid(),
    categoryName: "shoes",
    description:
      "Starting at ₹1200",
  },
  {
    _id: uuid(),
    categoryName: "apparel",
    description:
      "Starting at ₹999",
  },
  {
    _id: uuid(),
    categoryName: "bags",
    description:
      "Starting at ₹1545",
  },
];
