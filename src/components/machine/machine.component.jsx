import React from "react";
import {
  MachineContainer,
  BackgroundOverlay,
  H1,
  Hr,
  Span,
  P,
} from "./machine.styles";

const Machine = () => (
  <MachineContainer>
    <BackgroundOverlay>
      <Span>
        the compressor basically achieves the purpose of waste recycling at the
        grassroot/source, waste are collected and sorted into grouped categories
        in the community then it is compressed making handling and
        transportation to the recycling plant easier and convinient, it also
        eliminates waste in the streets
      </Span>
      <H1> The Sepatagon Compressor makes the dream possible</H1>
      <Hr />
      <P>
        waste recycling management - a case for recycling approach and
        technology
      </P>
    </BackgroundOverlay>
  </MachineContainer>
);

export default Machine;
