import React from 'react';
import styled from 'styled-components';
import { Marginer } from '../marginer';
import Waiting from "../../images/wait.png";
import Delivering from "../../images/deliver.jpg";
import Delivered from "../../images/done.jpg";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
    margin-bottom: 10px;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: top;
    justify-content:space-between;
    padding: 0 1.0em;
`;

const InnerContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const StepImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "8em")};
  height: ${({ size }) => (size ? size + "px" : "8em")};

  img {
    width: 100%;
    height: 100%;
  }
`;

const LabelText = styled.p`
  margin: 5px;
  line-height: 0.4;
  color: #000000;
  font-size: 16px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 15px;
  }
`;

export function Steps(props) {
    const { ImgSize } = props;

    const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

    return (
        <Container>
            <InnerContainer>
                <StepImage size={ImgSize}>
                    <img src={Waiting} alt="wait"/>
                </StepImage>
                <Marginer dirction="vertical" margin={5}/>
                <LabelText>Browse the menu and order</LabelText>
                <LabelText> directly from our web app.</LabelText>
            </InnerContainer>
            <InnerContainer>
                <StepImage size={ImgSize}>
                    <img src={Delivering} alt="deliver"/>
                </StepImage>
                <Marginer dirction="vertical" margin={5}/>
                <LabelText> Your order will immediately</LabelText>
                <LabelText>collected and sent by our courier.</LabelText>
            </InnerContainer>
            <InnerContainer>
                <StepImage size={ImgSize}>
                    <img src={Delivered} alt="done"/>
                </StepImage>
                <Marginer dirction="vertical" margin={5}/>
                <LabelText> Pick up delivery at your home </LabelText>
                <LabelText>door and enjoy delicious foods.</LabelText>
            </InnerContainer>
        </Container>
    )
}