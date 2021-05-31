import React, { useState }  from "react";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";
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
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const [products] = useState([
    {id: 1, name: 'Dosa', price: 200, image: IMG1, status: 'hot'},
    {id: 2, name: 'Dosa', price: 200, image: IMG2, status: 'hot'},
    {id: 3, name: 'Dosa', price: 200, image: IMG3, status: 'hot'},
    {id: 4, name: 'Dosa', price: 200, image: IMG4, status: 'hot'},
    {id: 5, name: 'Dosa', price: 200, image: IMG5, status: 'hot'},
    {id: 6, name: 'Dosa', price: 200, image: IMG6, status: 'hot'},
    {id: 7, name: 'Dosa', price: 200, image: IMG7, status: 'hot'},
    {id: 8, name: 'Dosa', price: 200, image: IMG8, status: 'hot'},
    {id: 9, name: 'Dosa', price: 200, image: IMG9, status: 'hot'},
    {id: 10, name: 'Dosa', price: 200, image: IMG10, status: 'hot'},
    {id: 11, name: 'Dosa', price: 200, image: IMG11, status: 'hot'},
    {id: 12, name: 'Dosa', price: 200, image: IMG12, status: 'hot'},
    {id: 13, name: 'Dosa', price: 200, image: IMG13, status: 'hot'},
    {id: 14, name: 'Dosa', price: 200, image: IMG14, status: 'hot'},
    {id: 15, name: 'Dosa', price: 200, image: IMG15, status: 'hot'},
    {id: 16, name: 'Dosa', price: 200, image: IMG16, status: 'hot'},
    {id: 17, name: 'Dosa', price: 200, image: IMG17, status: 'hot'},
    {id: 18, name: 'Dosa', price: 200, image: IMG18, status: 'hot'},
    {id: 19, name: 'Dosa', price: 200, image: IMG19, status: 'hot'},
    {id: 20, name: 'Dosa', price: 200, image: IMG20, status: 'hot'}

  ]);
  return (
    <ProductsContext.Provider value={{products: [...products]}}>
      {props.children}
    </ProductsContext.Provider>
  );
}
