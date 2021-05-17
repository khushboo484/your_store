import React from "react";
import styled from "styled-components";

import LogoImg from "../../images/logos/logo.png";
import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "4em")};
  height: ${({ size }) => (size ? size + "px" : "4em")};
  padding-top: 4px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "15px")};
  color: ${({ color }) => (color ? color : "#CD5C5C")};
  font-weight: 600;
  margin-left: 6px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export function BrandLogo(props) {
  const { logoSize, textSize, color, hideLogo } = props;

  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <Link to="/">
          <LogoImage size={logoSize}>
            <img src={LogoImg} alt="Junction logo" />
          </LogoImage>
        </Link>
      )}
      <StyledLink to="/">
        <LogoTitle size={textSize} color={color}>
          Meal Junction
        </LogoTitle>
      </StyledLink>
    </BrandLogoContainer>
  );
}
