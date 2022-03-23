import React from "react"
import {MdLocationPin} from "react-icons/md"  
import {BsHeart} from "react-icons/bs"

const CartProducts = () => {
    return(
        <>
            <div className="child cart-pg-product">
            <div className="space-between alignitems-c wrapit seperator-lightgray padtb-1 mb-2">
                <h4 className="baseteal">MY CART (3)</h4>
                <span className="darkteal txt-s alignitems-c"><MdLocationPin/> Deliver To</span>
            </div>



            <div className="cart-products flex-column-center">

                <div className="card-container-horizontal">
                    <div className="flex-txt">
                        <img className="image-container-horizontal" src="https://picsum.photos/111/148" alt="card-horizontal"/>
                        <div>
                            <h3>Large Title</h3>
                            <p className="title-small txt-s mb-1">small title</p>
                            <div className="flex-txt mb-1">
                                <button className="btn-round-small txt-s baseteal ">+</button>
                                <span className="txt-s">1</span>
                                <button className="btn-round-small txt-s baseteal ">-</button>
                            </div>
                            <p className="mtb-1 price-box txt-xs fw-bold">Rs. 1345 <s className="striked">Rs. 1495</s>
                                <span className="discount darkorange">(10% OFF)</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="btn-secondary txt-s"> REMOVE</button>
                        <button className="btn-secondary txt-s baseteal"><BsHeart/> WISHLIST</button>
                    </div>
                </div>

                <div className="card-container-horizontal">
                    <div className="flex-txt">
                        <img className="image-container-horizontal" src="https://picsum.photos/111/148" alt="card-horizontal"/>
                        <div>
                            <h3>Large Title</h3>
                            <p className="title-small txt-s mb-1">small title</p>
                            <div className="flex-txt mb-1">
                                <button className="btn-round-small txt-s baseteal ">+</button>
                                <span className="txt-s">1</span>
                                <button className="btn-round-small txt-s baseteal ">-</button>
                            </div>
                            <p className="mtb-1 price-box txt-xs fw-bold">Rs. 1345 <s className="striked">Rs. 1495</s>
                                <span className="discount darkorange">(10% OFF)</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="btn-secondary txt-s"> REMOVE</button>
                        <button className="btn-secondary txt-s baseteal"><BsHeart/> WISHLIST</button>
                    </div>
                </div>

                <div className="card-container-horizontal">
                    <div className="flex-txt">
                        <img className="image-container-horizontal" src="https://picsum.photos/111/148" alt="card-horizontal"/>
                        <div>
                            <h3>Large Title</h3>
                            <p className="title-small txt-s mb-1">small title</p>
                            <div className="flex-txt mb-1">
                                <button className="btn-round-small txt-s baseteal ">+</button>
                                <span className="txt-s">1</span>
                                <button className="btn-round-small txt-s baseteal ">-</button>
                            </div>
                            <p className="mtb-1 price-box txt-xs fw-bold">Rs. 1345 <s className="striked">Rs. 1495</s>
                                <span className="discount darkorange">(10% OFF)</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className="btn-secondary txt-s"> REMOVE</button>
                        <button className="btn-secondary txt-s baseteal"><BsHeart/> WISHLIST</button>
                    </div>
                </div>


            </div>
        </div>

        </>
    )
}

export default CartProducts