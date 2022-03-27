import { createContext, useContext, useReducer } from "react";

const defaultCartContextValue = {};
// create context
const CartContext = createContext(defaultCartContextValue);

// provide context
const CartProvider = ({ children }) => {
  const defaultCartState = {
    totalCartItems: 0,
    totalCartPrice: 0,
    cart: [],
  };

  const findInCart = (state, product) =>
    state.cart.find((item) => item.id === product.id);

  const cartReducer = (state, action) => {
    console.log(state);
    const product = action.payload;
    switch (action.type) {
      case "ADD_TO_CART":
        return findInCart(state, product)
          ? {
              ...state,
              totalCartItems: state.totalCartItems + 1,
              totalCartPrice: state.totalCartPrice + product.price,
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
              )
            }
          : {
              ...state,
              totalCartItems: state.totalCartItems + 1,
              totalCartPrice: state.totalCartPrice + product.price,
              cart: [...state.cart, { ...product, qty: 1 }],
            };

      case "DECREMENT":
       return findInCart(state, product)
          ? 
            findInCart(state, product).qty > 1
            ? {
                
                ...state,
                totalCartItems: state.totalCartItems - 1,
                totalCartPrice: state.totalCartPrice - product.price,
                cart: state.cart.map((item) =>
                  item.id === product.id ? { ...item, qty: item.qty - 1 } : item
                ),
              }
            : 
              {
                ...state,
                totalCartItems: state.totalCartItems - 1,
                totalCartPrice: state.totalCartPrice - product.price,
                cart: state.cart.filter((item) => item.id !== product.id),
              }
          : 
            {
              ...state,
              totalCartItems: state.totalCartItems - 1,
              totalCartPrice: state.totalCartPrice - 1,
              cart: [...state.cart],
            };
        case "REMOVE_FROM_CART":
            const removeProduct = findInCart(state,product)
            return {
                ...state,
                totalCartItems: state.totalCartItems - removeProduct.qty,
                totalCartPrice: state.totalCartPrice - (removeProduct.price)*(removeProduct.qty),
                cart: state.cart.filter((item) => item.id !== product.id)
            }
        default:
            return state
    }
  };

  const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState );

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// use context
const useCart = () => useContext(CartContext);

// export context
export { useCart, CartProvider };
