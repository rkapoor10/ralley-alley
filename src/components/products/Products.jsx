import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import DiscountedPrice from "../../utils/DiscountedPrice";
import { useFilter } from "../../context/filterContext/FilterContext";
import "./products.css";
import { useCart } from "../../context/cartContext/CartContext";
import { useWishlist } from "../../context/wishlistContext/WishlistContext";
import { findInWishlist } from "../../utils/findInWishlist";

const Products = () => {
  const { filteredProducts } = useFilter();
  const { cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  return (
    <div className="child pd-products-layout">
      <div className="grid-column-layout">
        {filteredProducts.map((product) => {
          const {
            id,
            image,
            title,
            tags,
            ratings,
            brand,
            categoryName,
            stockQty,
            price,
            discount,
            comingSoon,
          } = product;
          return (
            <div key={id} className="card-container parent-container">
              <div className="parent-image">
                <img className="image-container" src={image} alt={title} />
                <div className="tags-flex">
                  {tags &&
                    (tags === "new" ? (
                      <div className="tags-badge child-tags bg-baseblue">
                        New
                      </div>
                    ) : (
                      <div className="tags-badge child-tags bg-baseorange">
                        Trending
                      </div>
                    ))}

                  {findInWishlist(wishlistState.wishlist, product) ? (
                    <button
                      className="btn-round btn-heart txt-s lightteal child-wishlist"
                      onClick={() =>
                        wishlistDispatch({
                          type: "REMOVE_FROM_WISHLIST",
                          payload: product,
                        })
                      }
                    >
                      <BsHeartFill />
                    </button>
                  ) : (
                    <button
                      className="btn-round btn-heart txt-s lightteal child-wishlist"
                      onClick={() =>
                        wishlistDispatch({
                          type: "ADD_TO_WISHLIST",
                          payload: product,
                        })
                      }
                    >
                      <BsHeart />
                    </button>
                  )}
                </div>
                <span className="child-rating rating-box fw-semibold">
                  {ratings.stars} <BsStarFill className="baseteal" /> |{" "}
                  {ratings.count}
                </span>
              </div>

              <div className="title">
                <h3>{title}</h3>
                <p className="title-small txt-s black">
                  {brand} <span className="gray">{categoryName}</span>
                </p>
              </div>

              {stockQty ? (
                <>
                  <p className="price-box txt-xs fw-bold">
                    Rs. {DiscountedPrice(price, discount)}
                    <s className="striked">Rs. {price} </s>
                    <span className="discount darkorange">
                      ({discount}% OFF)
                    </span>
                  </p>
                  <button className="btn buy-btn-padding txt-xs btn-solid cta-btn bg-lightteal white fw-semibold">
                    BUY NOW
                  </button>
                  <button
                    className="btn-secondary txt-xs"
                    onClick={() =>
                      cartDispatch({
                        type: "ADD_TO_CART",
                        payload: product,
                      })
                    }
                  >
                    ADD TO CART
                  </button>
                </>
              ) : (
                <>
                  <s className="price-box txt-xs fw-bold">
                    Rs. {DiscountedPrice(price, discount)}{" "}
                    <s className="striked">Rs. {price}</s>
                    <span className="discount darkorange">
                      ({discount}% OFF)
                    </span>
                  </s>
                  <button
                    className="btn buy-btn-padding txt-xs btn-solid white fw-semibold btn-disable"
                    disabled
                  >
                    <p className="basered">OUT OF STOCK</p>
                  </button>

                  <button className="btn-disable btn-secondary txt-xs" disabled>
                    ADD TO CART
                  </button>
                </>
              )}
              {comingSoon && (
                <div className="overlay-text fs-2 fw-bold">COMING SOON!</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
