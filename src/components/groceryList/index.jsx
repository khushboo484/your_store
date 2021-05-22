import React from 'react';
import styled from 'styled-components';
import { deviceSize } from "../responsive";
import { Marginer } from '../marginer';

import Bread from "../../images/thumbnails/bread.png";
import Fruit from "../../images/thumbnails/fruit.png";
import Drink from "../../images/thumbnails/coffee.png";
import Cleaner from "../../images/thumbnails/cleaner.jpg";
import Shampoo from "../../images/thumbnails/shampoo.png";
import Eggs from "../../images/thumbnails/eggs.png";
import Flour from "../../images/thumbnails/flour.png";
import Cream from "../../images/thumbnails/ice-cream.png";
import Bottle from "../../images/thumbnails/ketchup.png";
import Meat from "../../images/thumbnails/meat.png";

const ListContainer = styled.div`
    margin-top: 20px;
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ImgContainer = styled.div`
    border-left: 3px solid #98FB98;
    border-right: 3px solid #98FB98;
    border-radius: 15px;
    margin-top: 40px;
    margin-right: 20px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.div`
width: ${({ size }) => (size ? size + "px" : "4em")};
height: ${({ size }) => (size ? size + "px" : "4em")};

img {
    width: 100%;
    height: 100%;
  }
`;
const LabelText = styled.p`
  line-height: 0.4;
  color: #000000;
  font-size: 13px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 10px;
  }
`;


export function GroceryList(props) {
    const { sizeImg } = props;

    return (
        <ListContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Bread } alt="bread" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Bread/Bakery</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Fruit } alt="fruit" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Produce</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Drink } alt="Bevg" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Beverages</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Meat } alt="meat" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Meat</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Flour } alt="flour" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Dry goods</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Cleaner } alt="cleaner" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Cleaners</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Cream } alt="ice-cream" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Frozen Food</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Shampoo } alt="shampoo" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Personal Care</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Eggs } alt="eggs" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Dairy</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Bottle } alt="ketchup" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Jarred Goods</LabelText>
            </ImgContainer>
        </ListContainer>
    )
}