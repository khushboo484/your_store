import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import  WishList  from "../../images/logos/wishlist.png";
import Cart from "../../images/logos/cart.png";
import { Button } from "../button";
import { Marginer } from "../marginer";

import { Link } from "react-router-dom";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#98FB98"};
`;

const ListImage = styled.div`
  color : 	#98FB98;
  transition: background-color, 200ms ease-in-out;
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};
  padding-top: 4px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const AnchorLink = styled(Link)`
  font-size: 12px;
  font-weight: 400px;
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

export function Navbar(props) {
  const { ListSize, useTransparent } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogo />
      <AccessibilityContainer>
        <Link to="/src/App.js"><ListImage size={ListSize}>
          <img src={WishList} alt="list"/></ListImage>
        </Link>
        <Marginer direction="horizontal" margin={6} />
        <Link to="../cart"><ListImage size={ListSize}>
          <img src={Cart} alt="cart"/></ListImage>
        </Link>
        <Marginer direction="horizontal" margin={6} />
        <Marginer direction="horizontal" margin={10} />
        <Link to="/customer/access/signup">
          <Button size={11}>Register</Button>
        </Link>
        <Marginer direction="horizontal" margin={8} />
        <AnchorLink to="/customer/access/signin">Login</AnchorLink>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
