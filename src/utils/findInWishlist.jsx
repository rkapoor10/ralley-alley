export const findInWishlist = (wishlistArray,product)=>
    wishlistArray.find((item)=>item.id===product.id)
