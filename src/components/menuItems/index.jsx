import React from 'react';
import styled from 'styled-components';
import Chinese from '../../images/thumbnails/chinese.png';
import Indian from '../../images/thumbnails/desi.jpg';
import Drink from '../../images/thumbnails/beverage.jpg';
import Italian from '../../images/thumbnails/italian.png';
import NONVEG from '../../images/thumbnails/non-veg.jpg';
import FAST from '../../images/thumbnails/fast.jpg';


const ListContainer = styled.div`
    border: 2px solid pink;
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ImgContainer = styled.div`
    border: 1px solid red;
    height: 100%;
    width: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px;
`;
const Image = styled.div`
border: 2px solid green;
width: ${({ size }) => (size ? size + "px" : "5em")};
height: ${({ size }) => (size ? size + "px" : "5em")};

img {
    width: 100%;
    height: 100%;
  }
`;
export function MenuItems(props) {
    const { sizeImg } = props;

    return (
        <ListContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={Chinese} alt="Chin" /></Image>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={Indian} alt="Indn" /></Image>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={Drink} alt="Bevg" /></Image>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={FAST} alt="food" /></Image>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={Italian} alt="Ita" /></Image>
            </ImgContainer>
            <ImgContainer>
            <Image size={sizeImg}><img src={NONVEG} alt="non_veg" /></Image>
            </ImgContainer>
        </ListContainer>
    )
}