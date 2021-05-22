import React from 'react';
import styled from 'styled-components';
import Chinese from '../../images/thumbnails/chinese.png';
import Indian from '../../images/thumbnails/desi.jpg';
import Drink from '../../images/thumbnails/beverage.jpg';
import Italian from '../../images/thumbnails/italian.png';
import NONVEG from '../../images/thumbnails/non-veg.jpg';
import FAST from '../../images/thumbnails/fast.jpg';
import { deviceSize } from "../responsive";
import { Marginer } from '../marginer';

const ListContainer = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ImgContainer = styled.div`
    border: 2px solid yellow;
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
            <Image size={sizeImg}><img src={Chinese} alt="Chin" /></Image>
            <Marginer direction="vertical" size={6}/>
            <LabelText>Chinese</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={Indian} alt="Indn" /></Image>
            <Marginer direction="vertical" size={6}/>
            <LabelText>Desi Food</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={Drink} alt="Bevg" /></Image>
            <Marginer direction="vertical" size={6}/>
            <LabelText>Beverages</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={FAST} alt="food" /></Image>
            <Marginer direction="vertical" size={6}/>
            <LabelText>Fast Food</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={Italian} alt="Ita" /></Image>
            <Marginer direction="vertical" size={6}/>
            <LabelText>Italian</LabelText>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={NONVEG} alt="non_veg" /></Image>
            <Marginer direction="vertical" size={6}/>
            <LabelText>Non Veg</LabelText>
            </ImgContainer>
        </ListContainer>
    )
}