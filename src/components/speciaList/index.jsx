import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const SpecialistContainer = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 600px;
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  line-height: 1.3;
  text-align: start;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;

const StandoutImage = styled.div`
  width: 35em;
  height: 29em;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 18em;
    height: 14em;
  }
`;

export function Specialist(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <SpecialistContainer>
      <ContentContainer>
        
      </ContentContainer>
    </SpecialistContainer>
  );
}
