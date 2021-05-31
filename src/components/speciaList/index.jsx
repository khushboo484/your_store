import React, { useState }  from "react";

import { ProductsContext } from "../products/context";

import IMG1 from "../../images/img1.jpg";
import IMG2 from "../../images/img2.jpg";
import IMG3 from "../../images/img3.jpg";
import IMG4 from "../../images/img4.jpg";
import IMG5 from "../../images/img5.jpg";
import IMG6 from "../../images/img6.jpg";
import IMG7 from "../../images/img7.jpg";
import IMG8 from "../../images/img8.jpg";
import IMG9 from "../../images/img9.jpg";
import IMG10 from "../../images/img10.jpg";
import IMG11 from "../../images/img11.jpg";
import IMG12 from "../../images/img12.jpg";
import IMG13 from "../../images/img13.jpg";
import IMG14 from "../../images/img14.jpg";
import IMG15 from "../../images/img15.jpg";
import IMG16 from "../../images/img16.jpg";
import IMG17 from "../../images/img17.jpg";
import IMG18 from "../../images/img18.jpg";
import IMG19 from "../../images/img19.jpg";
import IMG20 from "../../images/img20.jpg";


export function Specialist(props) {

  const [products] = useState([
    {id: 1, name: 'Masala Dosa', price: 200, image: IMG1, status: 'hot'},
    {id: 2, name: 'Idli Sambhar', price: 120, image: IMG2, status: 'New'},
    {id: 3, name: 'Papdi chat', price: 50, image: IMG3, status: 'New'},
    {id: 4, name: 'Vada ', price: 50, image: IMG4, status: 'hot'},
    {id: 5, name: 'Khaman Dhokla', price: 80, image: IMG5, status: 'hot'},
    {id: 6, name: 'Khakra', price: 20, image: IMG6, status: 'New'},
    {id: 7, name: 'Khandvi', price: 70, image: IMG7, status: 'hot'},
    {id: 8, name: 'Chola Bhatura', price: 50, image: IMG8, status: 'hot'},
    {id: 9, name: 'Sev puri', price: 35, image: IMG9, status: 'New'},
    {id: 10, name: 'Extra Cheese Pizza', price: 300, image: IMG10, status: 'hot'},
    {id: 11, name: 'Chicken Pizza', price: 250, image: IMG11, status: 'New'},
    {id: 12, name: 'Burger & Fries Combo', price: 100, image: IMG12, status: 'hot'},
    {id: 13, name: 'Manchurian', price: 120, image: IMG13, status: 'New'},
    {id: 14, name: 'Noodles', price: 80, image: IMG14, status: 'hot'},
    {id: 15, name: 'Spring roll', price: 50, image: IMG15, status: 'New'},
    {id: 16, name: 'Momos', price: 60, image: IMG16, status: 'New'},
    {id: 17, name: 'Chocolate Cake', price: 350, image: IMG17, status: 'hot'},
    {id: 18, name: 'Vanilla Cake', price: 320, image: IMG18, status: 'New'},
    {id: 19, name: 'Mango Smoothie', price: 150, image: IMG19, status: 'New'},
    {id: 20, name: 'Oreo MilkShake', price: 100, image: IMG20, status: 'hot'}

  ]);
  return (
    <ProductsContext.Provider value={{products: [...products]}}>
      {props.children}
    </ProductsContext.Provider>
  );
}
