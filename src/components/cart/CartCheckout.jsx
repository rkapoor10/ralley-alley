import React from "react";
import { useCart } from "../../context/cartContext/CartContext";
import DiscountedPrice from "../../utils/DiscountedPrice";

const CartCheckout = () => {
  const { cartState } = useCart();
  const discountReducer = (totalDisc, current) =>
    (totalDisc +=
      DiscountedPrice(current.price, current.discount) * current.qty);
  const totalDiscountedPrice = cartState.cart.reduce(discountReducer, 0);
  return (
    <div className="child cart-pg-checkout column-flex">
      <div className="space-between alignitems-c wrapit seperator-lightgray padtb-1 mb-2">
        <h4 className="baseteal">CHECKOUT</h4>
      </div>
      {cartState.totalCartItems? (
        <div className="billing-card">
          <h4 className="gray fw-semibold seperator-dotted padding-y-1 mb-1">
            PRICE DETAILS
          </h4>
          <div className="checkout-items column-flex">
            <div className="space-between">
              <p className="txt-s">Price ({cartState.totalCartItems})</p>
              <p className="txt-s">₹{cartState.totalCartPrice}</p>
            </div>
            <div className="space-between">
              <p className="txt-s">Discount</p>
              <p className="txt-s green">
                − ₹{cartState.totalCartPrice - totalDiscountedPrice}
              </p>
            </div>
            <div className="space-between">
              <p className="txt-s">Delivery Charges</p>
              <p className="txt-s green">FREE</p>
            </div>
            <div className="seperator-dotted"></div>
            <div className="space-between">
              <p className="txt-s fw-semibold">Total Amount</p>
              <p className="txt-s fw-semibold">₹{totalDiscountedPrice}</p>
            </div>
            <div className="space-between">
              <p className="txt-s fw-semibold green">
                You will save ₹{cartState.totalCartPrice - totalDiscountedPrice}{" "}
                on this order
              </p>
            </div>
          </div>
          <div className="seperator-dotted"></div>
          <button className=" mb-1 center btn btn-padding txt-s btn-outline secondary-cta-btn white bg-basepink w-80">
            PLACE ORDER
          </button>
        </div>
      ) : (
        <h3 className="billing-card">Your Cart is Empty 😐</h3>
      )}
    </div>
  );
};

export default CartCheckout;
