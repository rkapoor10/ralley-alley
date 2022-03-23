import React from "react";
import { BsHeartFill } from "react-icons/bs";

const WishlistProducts = () => {
  return (
    <>
      <div className="flex-txt center-flex-column seperator-lightgray padding-y-2 mb-2">
        <h3 className="baseteal">
          My Wishlist <BsHeartFill className="basered" />
        </h3>
        <p className="txt-m gray">4 items</p>
      </div>
      <div className="grid-column-layout">
        <div className="card-container">
          <div className="parent-image">
            <img
              className="image-container"
              src="https://picsum.photos/300/400"
              alt=""
            />
            <div className="tags-flex">
              <button className="btn-round txt-s lightteal child-wishlist">
                <BsHeartFill className="basered"/>
              </button>
            </div>
          </div>
          <span className="whishlist-heart"></span>

          <div className="title">
            <h3>Large Title</h3>
            <p className="title-small txt-s">small title</p>
          </div>
          <p className="price-box txt-xs fw-bold">
            Rs. 1345 <s className="striked">Rs. 1495</s>{" "}
            <span className="discount darkorange">(10% OFF)</span>
          </p>
          <button className="btn-secondary txt-xs">ADD TO CART</button>
        </div>

        <div className="card-container">
          <div className="parent-image">
            <img
              className="image-container"
              src="https://picsum.photos/300/400"
              alt=""
            />
            <div className="tags-flex">
              <button className="btn-round txt-s lightteal child-wishlist">
                <BsHeartFill className="basered"/>
              </button>
            </div>
          </div>
          <span className="whishlist-heart"></span>

          <div className="title">
            <h3>Large Title</h3>
            <p className="title-small txt-s">small title</p>
          </div>
          <p className="price-box txt-xs fw-bold">
            Rs. 1345 <s className="striked">Rs. 1495</s>{" "}
            <span className="discount darkorange">(10% OFF)</span>
          </p>
          <button className="btn-secondary txt-xs">ADD TO CART</button>
        </div>

        <div className="card-container">
          <div className="parent-image">
            <img
              className="image-container"
              src="https://picsum.photos/300/400"
              alt=""
            />
            <div className="tags-flex">
              <button className="btn-round txt-s lightteal child-wishlist">
                <BsHeartFill className="basered"/>
              </button>
            </div>
          </div>
          <span className="whishlist-heart"></span>

          <div className="title">
            <h3>Large Title</h3>
            <p className="title-small txt-s">small title</p>
          </div>
          <p className="price-box txt-xs fw-bold">
            Rs. 1345 <s className="striked">Rs. 1495</s>{" "}
            <span className="discount darkorange">(10% OFF)</span>
          </p>
          <button className="btn-secondary txt-xs">ADD TO CART</button>
        </div>

        <div className="card-container">
          <div className="parent-image">
            <img
              className="image-container"
              src="https://picsum.photos/300/400"
              alt=""
            />
            <div className="tags-flex">
              <button className="btn-round txt-s child-wishlist">
                <BsHeartFill className="basered"/>
              </button>
            </div>
          </div>
          <span className="whishlist-heart"></span>

          <div className="title">
            <h3>Large Title</h3>
            <p className="title-small txt-s">small title</p>
          </div>
          <p className="price-box txt-xs fw-bold">
            Rs. 1345 <s className="striked">Rs. 1495</s>{" "}
            <span className="discount darkorange">(10% OFF)</span>
          </p>
          <button className="btn-secondary txt-xs">ADD TO CART</button>
        </div>
      </div>
    </>
  );
};

export default WishlistProducts;
