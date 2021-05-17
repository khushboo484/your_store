import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";

import TheBestSpecialistsImg from "../../images/img.jpg";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color : #FFDAB9; 
  background-position: 0px -150px;
  background-size: cover;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 700px;
    background-position: 0px 0px;
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
  padding-left : 0px;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 60px;
  justify-content: space-evenly;
`;

const StandoutImage = styled.div`
  width: 25em;
  height: 20em;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoContainer = styled.div`
  margin-top: 50px;
  margin-left: -100px;
  margin-bottom: 120px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;

const Text = styled.p`
  margin: 4px;
  line-height: 0.5;
  color: #A9A9A9;
  font-size: 20px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 15px;
  }
`;
const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #000000;
  font-weight: 500;
  font-size: 35px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

const HeadText = styled.h4`
  margin: 0;
  line-height: 1.0;
  color: #000000;
  font-weight: 800;
  font-size: 25px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 14px;
  }
`;

export function TopSection(props) {
  const { children } = props;

  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <TopSectionContainer>
      <BackgroundFilter>
        {children}
        <TopSectionInnerContainer>
          <LogoContainer>
            <Marginer direction="vertical" margin={6} />
            <SloganText>Order food/grocery anytime</SloganText>
            <SloganText>and anywhere. </SloganText>
            <Marginer direction="vertical" margin={12} />
            <Text>Hey! Delicious food is waiting for you, we </Text>
            <Text>are always near to you. </Text>
          </LogoContainer>
          {!isMobile && (
            <StandoutImage>
              <img src={TheBestSpecialistsImg} alt="food" />
            </StandoutImage>
          )}
        </TopSectionInnerContainer>
        <HeadText>Three Easy steps </HeadText>
      </BackgroundFilter>
    </TopSectionContainer>
  );
}
