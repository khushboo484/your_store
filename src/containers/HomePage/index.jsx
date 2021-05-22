import React from "react";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { Steps } from "../../components/steps";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { Specialist } from "../../components/speciaList";
import { TopSection } from "./topSection";
import { ListSection } from "./listSection";

export function HomePage(props) {
  return (
    <PageContainer>
      <TopSection>
        <Navbar useTransparent />
      </TopSection>
      <Steps />
      <InnerPageContainer>
        <ListSection />
        <Marginer direction="vertical" margin="5em" />
        <Specialist />
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
