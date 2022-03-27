import React from "react";
import { BsHeart } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import DiscountedPrice from "../../utils/DiscountedPrice";
import { useFilter } from "../../context/filterContext/FilterContext";
import "./products.css";
import { useCart } from "../../context/cartContext/CartContext";

const Products = () => {
  const { filteredProducts } = useFilter();
  const { cartDispatch } = useCart();
  return (
    <div className="child pd-products-layout">
      <div className="grid-column-layout">
        {filteredProducts.map(
          (product) => {
            return (
              <div key={product.id} className="card-container parent-container">
                <div className="parent-image">
                  <img className="image-container" src={product.image} alt={product.title} />
                  <div className="tags-flex">
                    {product.tags &&
                      (product.tags === "new" ? (
                        <div className="tags-badge child-tags bg-baseblue">
                          New
                        </div>
                      ) : ( 
                        <div className="tags-badge child-tags bg-baseorange">
                          Trending
                        </div>
                      ))}
                    <button className="btn-round btn-heart txt-s lightteal child-wishlist">
                      <BsHeart />
                    </button>
                  </div>
                  <span className="child-rating rating-box fw-semibold">
                    {product.ratings.stars} <BsStarFill className="baseteal" /> |{" "}
                    {product.ratings.count}
                  </span>
                </div>

                <div className="title">
                  <h3>{product.title}</h3>
                  <p className="title-small txt-s black">
                    {product.brand} <span className="gray">{product.categoryName}</span>
                  </p>
                </div>

                {product.stockQty ? (
                  <>
                    <p className="price-box txt-xs fw-bold">
                      Rs. {DiscountedPrice(product.price, product.discount)}
                      <s className="striked">Rs. {product.price} </s>
                      <span className="discount darkorange">
                        ({product.discount}% OFF)
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
                      Rs. {DiscountedPrice(product.price, product.discount)} <s className="striked">Rs. {product.price}</s>
                      <span className="discount darkorange">({product.discount}% OFF)</span>
                    </s>
                    <button
                      className="btn buy-btn-padding txt-xs btn-solid white fw-semibold btn-disable"
                      disabled
                    >
                      <p className="basered">OUT OF STOCK</p>
                    </button>

                    <button
                      className="btn-disable btn-secondary txt-xs"
                      disabled
                    >
                      ADD TO CART
                    </button>
                  </>
                )}
                {product.comingSoon && (
                  <div className="overlay-text fs-2 fw-bold">COMING SOON!</div>
                )}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Products;
