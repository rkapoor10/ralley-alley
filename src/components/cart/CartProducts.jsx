import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useCart } from "../../context/cartContext/CartContext";
import "../../components/products/products.css";
import DiscountedPrice from "../../utils/DiscountedPrice";
import { useWishlist } from "../../context/wishlistContext/WishlistContext";
import { findInWishlist } from "../../utils/findInWishlist";
import { toast } from "react-toastify";

const CartProducts = () => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  return (
    <div className="child cart-pg-product">
      <div className="space-between alignitems-c wrapit seperator-lightgray padtb-1 mb-2">
        <h4 className="baseteal">MY CART ({cartState.totalCartItems})</h4>
        <span className="darkteal txt-s alignitems-c">
          <MdLocationPin /> Deliver To
        </span>
      </div>

      <div className="cart-products flex-column-center">
        {cartState.cart.map((product) => {
          const {
            id,
            image,
            title,
            brand,
            categoryName,
            qty,
            price,
            discount,
          } = product;
          return (
            <div key={id} className="card-container-horizontal">
              <div className="flex-txt">
                <img
                  className="image-container-horizontal"
                  src={image}
                  alt={title}
                />
                <div>
                  <h3>{title}</h3>
                  <p className="title-small txt-s mb-1">
                    {brand} <span className="gray">{categoryName}</span>
                  </p>
                  <div className="flex-txt mb-1">
                    <button
                      className="btn-round-small txt-s baseteal"
                      onClick={() =>
                        cartDispatch({ type: "ADD_TO_CART", payload: product })
                      }
                    >
                      +
                    </button>
                    <span className="txt-s">{qty}</span>
                    <button
                      className="btn-round-small txt-s baseteal "
                      onClick={() =>
                        cartDispatch({ type: "DECREMENT", payload: product })
                      }
                    >
                      -
                    </button>
                  </div>
                  <p className="mtb-1 price-box txt-xs fw-bold">
                    {DiscountedPrice(price, discount)}{" "}
                    <s className="striked">Rs.{price}</s>
                    <span className="discount darkorange">
                      ({discount}% OFF)
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <button
                  className="btn-secondary txt-s"
                  onClick={() => {
                    cartDispatch({
                      type: "REMOVE_FROM_CART",
                      payload: product,
                    });
                    toast.success("Removed from Cart");
                  }}
                >
                  REMOVE
                </button>

                {findInWishlist(wishlist, product) ? (
                  <button
                    className="btn-secondary txt-s baseteal"
                    onClick={() => {
                      wishlistDispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: product,
                      });
                      toast.success("Removed from Wishlist");
                    }}
                  >
                    <BsHeartFill />
                    REMOVE FROM WISHLIST
                  </button>
                ) : (
                  <button
                    className="btn-secondary txt-s baseteal"
                    onClick={() => {
                      wishlistDispatch({
                        type: "ADD_TO_WISHLIST",
                        payload: product,
                      });
                      toast.success("Added to Wishlist");
                    }}
                  >
                    <BsHeart /> ADD TO YOUR WISHLIST
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartProducts;
