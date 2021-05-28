import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReduer";

export const CartContent = createContext();

export  function Cart(props) {

    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [], total:  0, qty: 0});
    
    return (
        <CartContent.Provider value={{...cart, dispatch}}>
            {props.children}
        </CartContent.Provider>
    )
}
