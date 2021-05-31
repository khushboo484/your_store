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
import { TopSection } from "./topSection";
import { ListSection } from "./listSection";
import { ProdSection } from "./prodSection";

const Heading = styled.h1`
  font-weight: 600;
  font-size: 50px;
  color: red;
`;

export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent />
      </TopSection>
      <Steps />
      <InnerPageContainer>
        <ListSection />
        <Heading> Products </Heading>
        <ProdSection />
        <Marginer direction="vertical" margin="4em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
