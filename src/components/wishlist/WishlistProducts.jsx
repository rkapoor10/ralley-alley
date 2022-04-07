import React from "react";
import { BsHeartFill } from "react-icons/bs";
import DiscountedPrice from "../../utils/DiscountedPrice";
import { useWishlist } from "../../context/wishlistContext/WishlistContext";
import { useCart } from "../../context/cartContext/CartContext";
import { toast } from "react-toastify";

const WishlistProducts = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();
  const { wishlist } = wishlistState;
  const { cartDispatch } = useCart();
  return (
    <>
      <div className="flex-txt center-flex-column seperator-lightgray padding-y-2 mb-2">
        <h3 className="baseteal">
          My Wishlist <BsHeartFill className="basered" />
        </h3>
        <p className="txt-m gray">
          {wishlist.length !== 0 ? (
            <span>{wishlist.length} ITEMS</span>
          ) : (
            <span>Wishlilst is empty 😐</span>
          )}
        </p>
      </div>

      <div className="grid-column-layout">
        {wishlist.map((product) => {
          const { image, title, categoryName, brand, price, discount } =
            product;
          return (
            <div className="card-container">
              <div className="parent-image">
                <img className="image-container" src={image} alt={title} />
                <div className="tags-flex">
                  <button
                    className="btn-round txt-s lightteal child-wishlist"
                    onClick={() => {
                      wishlistDispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        payload: product,
                      });
                      toast.success("Removed from Wishlist");
                    }}
                  >
                    <BsHeartFill className="basered" />
                  </button>
                </div>
              </div>
              <span className="whishlist-heart"></span>

              <div className="title">
                <h3>{title}</h3>
                <p className="title-small txt-s">
                  {brand} <span className="gray">{categoryName}</span>
                </p>
              </div>
              <p className="price-box txt-xs fw-bold">
                Rs. {DiscountedPrice(price, discount)}
                <s className="striked">Rs. {price}</s>
                <span className="discount darkorange">({discount}% OFF)</span>
              </p>
              <button
                className="btn-secondary txt-xs"
                onClick={() => {
                  cartDispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                  toast.success("Added to Cart");
                }}
              >
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WishlistProducts;
