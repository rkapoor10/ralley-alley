import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
    return(
        <div className="child center-flex-column pad-2">
        <div className="login-form-grid-layout ">
            <div className="banner-layout banner-style">
                <div className="banner-flex">
                    <div className="form-head">
                        <h1 className="white">Login</h1>
                        <p className="form-content txt-s">Get access to your Orders, Wishlist and
                            Recommendations</p>
                    </div>

                    <img className="form-hero" src="/assets/login-hero.svg" alt="form-hero"/>
                </div>
            </div>
            <div className="form-layout">
                <div className="form-container">
                    <div className="tabs-layout">
                        <button className="txt-m form-tabs active">Login</button><span className="lightgray">|</span>
                        <button className="txt-m form-tabs"> <Link to="/signup">SignUp</Link> </button>
                    </div>

                    <form className="form-styles" action="submit">

                        <input className="input-field fs-1r fw-semibold" type="email"
                            placeholder="Enter Email/Mobile number"/>
                        <input className="input-field fs-1r fw-semibold" type="password" placeholder="Enter Password"/>
                        <span className="w-80"> <input className="privacy-terms"  type="checkbox" name="privacy-terms" id="privacy-terms"/> By continuing, you agree to Swift-UI <span className="baseteal fw-semibold">Terms
                                of Use</span> and <span className="baseteal fw-semibold">Privacy Policy</span>.</span>

                        <button
                            className="btn btn-padding txt-s btn-outline secondary-cta-btn white bg-basepink w-80">LOGIN</button>
                        <span>OR</span>
                        <button className="btn-secondary txt-s w-80">Request OTP</button>


                    </form>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Login 