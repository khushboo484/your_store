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

const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 5px;
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
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
        </ContentContainer>
        <Marginer direction="vertical" margin="5em" />
        <Specialist />
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
