import React from "react"

const CartCheckout = () => {
    return(
        <div className="child cart-pg-checkout column-flex">
            <div className="space-between alignitems-c wrapit seperator-lightgray padtb-1 mb-2">
                <h4 className="baseteal">CHECKOUT</h4>
            </div>
            <div className="billing-card">
                <h4 className="gray fw-semibold seperator-dotted padding-y-1 mb-1">PRICE DETAILS </h4>
                <div className="checkout-items column-flex">
                    <div className="space-between">
                        <p className="txt-s">Price (3-items)</p>
                        <p className="txt-s">₹5,094</p>
                    </div>
                    <div className="space-between">
                        <p className="txt-s">Discount</p>
                        <p className="txt-s green">− ₹2,296</p>
                    </div>
                    <div className="space-between">
                        <p className="txt-s">Delivery Charges</p>
                        <p className="txt-s green">FREE</p>
                    </div>
                    <div className="seperator-dotted"></div>
                    <div className="space-between">
                        <p className="txt-s fw-semibold">Total Amount</p>
                        <p className="txt-s fw-semibold">₹2,798</p>
                    </div>
                    <div className="space-between">
                        <p className="txt-s fw-semibold green">You will save ₹2,296 on this order</p>
                    </div>
                </div>
                <div className="seperator-dotted"></div>
                <button className=" mb-1 center btn btn-padding txt-s btn-outline secondary-cta-btn white bg-basepink w-80">PLACE ORDER</button>
            
            </div>
            
        </div>
    )
}

export default CartCheckout