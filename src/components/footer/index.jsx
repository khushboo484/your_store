import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";

import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 350px;
  background-color: #2F4F4F;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const HeadContainer = styled.div`
  width: 100%;
  diplay: flex;
  margin: 0;
  margin-bottom: 2px;
  align-items: center;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  margin-bottom: 1em;
  align-items: center;
`;

const ContentContainer = styled.div`
  height: 150px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 100px;

`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 0 10px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;

const RightBottomContainer = styled.div`
  display: flex;
`;

const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h5`
  margin: 0;
  margin-bottom: 5px;
  color: 	#98FB98;
  font-weight: 200;
  font-size: 16px;
`;

const Head = styled.h2`
  margin: 0px;
  margin-bottom: 3px;
  color: #FFFAFA;
  text-align: center;
  font-weight: 500px;
`;

const Detail = styled.p`
  margin: 0px;
  font-size: 12px;
  color: #98FB98;
  text-align: center;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #FFFAFA;
  font-weight: 100;
  font-size: 12px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 11px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  }
`;

const SocialIcon = styled.div`
  color: 	#98FB98;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  &:hover {
    color: #777777;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 17px;
  }
`;

export function Footer(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <FooterContainer>
        <HeadContainer>
        <Head> Stay Always in Touch </Head>
        <Detail> Join our mailing or phone list to get latest news.</Detail>
        </HeadContainer>
        <TopContainer>
        <ContentContainer>
          <Title>About MealJunction</Title>
          <FLink>Service@mealjunction.com</FLink>
          <FLink>Careers</FLink>
          <FLink>SiteMap</FLink>
          <FLink>About Us</FLink>
          <FLink>Contact Us</FLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Help & FAQ's</Title>
          <FLink>Terms and Conditions</FLink>
          <FLink>Privacy Policy</FLink>
          <FLink>FAQ's</FLink>
          <FLink>MealJunction's Blog</FLink>
        </ContentContainer>
        <ContentContainer>
          <Title>My Junction</Title>
          <FLink>My Account</FLink>
          <FLink>My Order Satus</FLink>
          <FLink>Billings</FLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <BrandLogo hideLogo color="#8A8A8A" textSize={isMobile ? 20 : 25} />
          <PrivacyText> &#169; All Rights Reserved. 2021</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faYoutube} />
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}
