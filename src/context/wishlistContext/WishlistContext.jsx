import {useContext, createContext, useReducer} from "react"
import { findInWishlist } from "../../utils/findInWishlist"

// create context
const defaultWishlistContextValue = {}
const WishlistContext = createContext(defaultWishlistContextValue)



// provide context
const WishlistProvider = ({children})=>{

    const defaultWishlistState = {
        wishlist : []
    }

    const wishlistReducer = (state,action) => {
        const {type,payload} = action
        switch(type){
            case "ADD_TO_WISHLIST":
                return findInWishlist(state.wishlist,payload)?state:
                {
                    ...state, wishlist: [...state.wishlist, payload]
                }

            case "REMOVE_FROM_WISHLIST":
                return{
                    ...state, wishlist: state.wishlist.filter((product)=>product.id!=payload.id)
                }
            default:
                return state
        }
    }

    const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer,defaultWishlistState)

    return(
        <WishlistContext.Provider value={{wishlistState,wishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}


// use context
const useWishlist = ()=>useContext(WishlistContext)

export {WishlistProvider,useWishlist}