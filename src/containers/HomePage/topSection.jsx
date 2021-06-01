import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import TheBestSpecialistsImg from "../../images/img.jpg";

const TopSectionContainer = styled.div`
  width: 100%;
  height: 500px;
  background-color : #98FB98;
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
  margin: 5px;
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
  font-weight: 600;
  font-size: 35px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

const HeadText = styled.h4`
  margin: 0;
  margin-bottom: 5px;
  line-height: 0.8;
  color: #000000;
  font-weight: 600;
  font-size: 24px;

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
            <SloganText>& anywhere. </SloganText>
            <Marginer direction="vertical" margin={12} />
            <Text>Hey! Delicious food is waiting for you, we are always </Text>
            <Text>near to you. </Text>
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
