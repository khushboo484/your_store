import React from 'react';
import styled from 'styled-components';
import { MenuItems } from "../../components/menuItems";
import { GroceryList } from "../../components/groceryList";
import { deviceSize } from "../../components/responsive";

const ContentContainer = styled.div`
  width: 100%;
  height: 400px;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
  }
`;
const Heading = styled.h4`
  width: 100%;
  margin: 0;
  margin-bottom: 10px;
  line-height: 0.8;
  color: #000000;
  font-weight: 600;
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 14px;
  }
`;

export function ListSection() {
    return (
        <ContentContainer>
            <Heading>Our Menus </Heading>
            <MenuItems/>
            <GroceryList />
        </ContentContainer>
    )
}