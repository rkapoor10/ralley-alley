import React from "react";

const DiscountedPrice = (price, discount) => {
  return Math.ceil((price * (100 - discount)) / 100);
};

export default DiscountedPrice;