import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { Steps } from "../../components/steps";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { deviceSize } from "../../components/responsive";
import { Specialist } from "../../components/speciaList";
import { TopSection } from "./topSection";
import { MenuItems } from "../../components/menuItems";

const ContentContainer = styled.div`
  border: 2px solid yellow;
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
  line-height: 0.8;
  color: #000000;
  font-weight: 600;
  font-size: 18px;
  text-align: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 14px;
  }
`;
export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent />
      </TopSection>
      <Steps />
      <InnerPageContainer>
        <ContentContainer>
          <Heading> Our Menus </Heading>
          <MenuItems/>
        </ContentContainer>
        <Marginer direction="vertical" margin="5em" />
        <Specialist />
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
