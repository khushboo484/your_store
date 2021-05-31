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
import { ProdSection } from './prodSection';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart } from "../../components/cart";

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
        <Router>
        <Heading> Products </Heading>
        <Switch>
          <Route path="/" exact component={ProdSection} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
        </Router>
        <Marginer direction="vertical" margin="4em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
