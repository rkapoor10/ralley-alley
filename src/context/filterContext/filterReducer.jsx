import React from "react";
const HIGH_TO_LOW = "HIGH_TO_LOW";
const LOW_TO_HIGH = "LOW_TO_HIGH";
const initialState = {
    highToLow: false,
    lowToHigh: false,
    discount: {
      "10_OR_BELOW": false,
      "10_OR_ABOVE": false,
      "30_OR_ABOVE": false,
    },
    category: {
      racquets: false,
      shoes: false,
      apparel: false,
      bags: false,
    },
    ratings: 0,
    priceRange: 20000,
  };
const filterReducer = (state, action) => {
    switch (action.type) {
      case HIGH_TO_LOW:
        return { ...state, highToLow: true, lowToHigh: false };

      case LOW_TO_HIGH:
        return { ...state, lowToHigh: true, highToLow: false };

      case "10_OR_BELOW":
        return {
          ...state,
          discount: {
            ...state.discount,
            "10_OR_BELOW": !state.discount["10_OR_BELOW"],
          },
        };

      case "10_OR_ABOVE":
        return {
          ...state,
          discount: {
            ...state.discount,
            "10_OR_ABOVE": !state.discount["10_OR_ABOVE"],
          },
        };

      case "30_OR_ABOVE":
        return {
          ...state,
          discount: {
            ...state.discount,
            "30_OR_ABOVE": !state.discount["30_OR_ABOVE"],
          },
        };

      case "CATEGORY_FILTER":
        return {
          ...state,
          category: {
            ...state.category,
            [action.payload]: !state.category[action.payload],
          },
        };

      case "RATINGS_FILTER":
        return { ...state, ratings: action.payload };

      case "PRICE_RANGE":
        return { ...state, priceRange: action.payload.value };

      case "RESET_FILTERS":
        return initialState
      default:
        return state;
    }
  };


  export {filterReducer,initialState, HIGH_TO_LOW,LOW_TO_HIGH}