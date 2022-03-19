import React, { useEffect, useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import DiscountedPrice from "../../utils/DiscountedPrice";
import "./products.css";
import axios from "axios";


const Products = () => {
  const [productsList, setProductsList] = useState([]);

  const loadProducts = async () => {
    try {
      const response  = await axios.get("/api/products");
       console.log(response.data);
      setProductsList(response.data.products);
    } catch {
      console.log("caught error from products.jsx");
      //todo: toast addition
    }
  };
  useEffect(() => loadProducts(), []);

  return (
    <div className="child pd-products-layout">
      <div className="grid-column-layout">
        {productsList.map(
          ({
            title,
            categoryName,
            brand,
            image,
            tags,
            price,
            ratings,
            stockQty,
            discount,
            comingSoon
          }) => {
            return (
              <div className="card-container parent-container">
                <div className="parent-image">
                  <img className="image-container" src={image} alt={title} />
                  <div className="tags-flex">
                    {tags ? (
                      tags === "new" ? (
                        <div className="tags-badge child-tags bg-baseblue">
                          New
                        </div>
                      ) : (
                        <div className="tags-badge child-tags bg-baseorange">
                          Trending
                        </div>
                      )
                    ) : (
                      <></>
                    )}
                    <button className="btn-round btn-heart txt-s lightteal child-wishlist">
                      <BsHeart />
                    </button>
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
                      Rs. {DiscountedPrice(price,discount)}{" "}
                      <s className="striked">Rs. {price} </s>
                      <span className="discount darkorange">
                         ({discount}% OFF)
                      </span>
                    </p>
                    <button className="btn buy-btn-padding txt-xs btn-solid cta-btn bg-lightteal white fw-semibold">
                      BUY NOW
                    </button>
                    <button className="btn-secondary txt-xs">
                      ADD TO CART
                    </button>
                  </>
                ) : (
                  <>
                    <s className="price-box txt-xs fw-bold">
                      Rs. 1345 <s className="striked">Rs. 1495</s>
                      <span className="discount darkorange">(10% OFF)</span>
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
                {(comingSoon)?<div className="overlay-text fs-2 fw-bold">COMING SOON!</div>:<></>}
              </div>
            );
          }
        )}
        
      </div>
    </div>
  );
};

export default Products;
