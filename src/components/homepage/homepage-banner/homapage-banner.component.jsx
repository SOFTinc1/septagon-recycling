import React from "react";
import {
  HomepageBanner2Container,
  BackgroundOverlay,
  H1,
  Hr,
  Scroll,
  IconScroll,
  Span,
  P,
} from "./homepage-banner.styles";
import Typical from "react-typical";

const HomepageBanner = () => (
  <HomepageBanner2Container>
    <BackgroundOverlay>
      <Span>recycling for zero waste</Span>
      <H1 as={Typical}
        loop={Infinity}
        wrapper="h1"
        steps={[
          "let's all",
          1000,
          "make our",
          1000,
          "enviroment",
          1000,
          "greener",
          1000,
        ]}
      />
      <Hr/>
      <P>
        waste recycling management - a case for recycling approach and technology
      </P>
      <Scroll align="center">
        <IconScroll></IconScroll>
      </Scroll>
    </BackgroundOverlay>
  </HomepageBanner2Container>
);

export default HomepageBanner;
