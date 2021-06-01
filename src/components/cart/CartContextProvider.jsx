import React, { useReducer } from "react";
import { CartContext } from "./context";
import { CartReducer } from "./CartReduer";

export function CartContextProvider(props) {

    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [], totalPrice: 0, qty: 0});

    return (
        <CartContext.Provider value={{...cart, dispatch}}>.
            {props.children}
        </CartContext.Provider>
    )
}
