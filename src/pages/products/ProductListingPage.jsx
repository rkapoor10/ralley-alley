import React from 'react'
import FilterSidebar from '../../components/filters/Filter'
import Products from '../../components/products/Products'
import Footer from '../../components/shared/footer/FooterComponent'
import Navbar from '../../components/shared/navbar/NavbarComponent'

const ProductListingPage = ()=>{
  return (
    <>
    <div className="products-pg-layout">
    <Navbar/>
    <FilterSidebar/>
    <Products/>
    </div>
    <Footer/>
    </>
  )
}

export default ProductListingPage