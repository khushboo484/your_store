import React from 'react';
import styled from 'styled-components';
import { deviceSize } from "../responsive";
import { Marginer } from '../marginer';

import Burger from "../../images/thumbnails/burgers.png";
import Chicken from "../../images/thumbnails/chicken.jpg";
import Cake from "../../images/thumbnails/cakes.png";
import Dosa from "../../images/thumbnails/dosa.png";
import Noodles from "../../images/thumbnails/noodles.png";
import Pizza from "../../images/thumbnails/pizza.png";
import Shakes from "../../images/thumbnails/shakes.png";
import Tikka from "../../images/thumbnails/tikka.png";

const ListContainer = styled.div`
    margin-top: 10px;
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
    margin: 10px;
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


export function MenuItems(props) {
    const { sizeImg } = props;

    return (
        <ListContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Noodles } alt="Chin" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Chinese</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Dosa } alt="Indn" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Desi Food</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Shakes } alt="Bevg" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Shakes</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Burger } alt="food" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Fast Food</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Pizza } alt="Ita" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Italian</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Chicken } alt="non_veg" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Chicken</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Tikka } alt="tikka" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Tikka Special</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={ Cake } alt="cake" /></Image>
            <Marginer direction="vertical" size={4}/>
            <LabelText>Desserts</LabelText>
            </ImgContainer>
        </ListContainer>
    )
}