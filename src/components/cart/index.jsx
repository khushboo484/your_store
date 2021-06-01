import React, {useContext} from 'react';
import { CartContext } from "./context";

export function Cart() {

const data = useContext(CartContext);
console.log(data);

    return(
        <div>
            <div>
                <h2> Shopping Cart !</h2>
            </div>
        </div>
    )
}