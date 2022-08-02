import React from "react";
import {
  ProcessContainer,
  Row,
  Card1,
  Card2,
  Card3,
  Card4,
  Number,
  Title,
  Description,
} from "./process.styles";

const Process = () => (
  <ProcessContainer>
    <Row>
      <Card1>
        <Number>01</Number>
        <Title>Collect Trash</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iste
          voluptatum tenetur eligendi in nemo sapiente labore eveniet distinctio
          animi!
        </Description>
      </Card1>

      <Card2>
        <Number>02</Number>
        <Title>sort Trash</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iste
          voluptatum tenetur eligendi in nemo sapiente labore eveniet distinctio
          animi!
        </Description>
      </Card2>

      <Card3>
        <Number>03</Number>
        <Title>compress sorted trash</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iste
          voluptatum tenetur eligendi in nemo sapiente labore eveniet distinctio
          animi!
        </Description>
      </Card3>

      <Card4>
        <Number>04</Number>
        <Title>recycle trash</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iste
          voluptatum tenetur eligendi in nemo sapiente labore eveniet distinctio
          animi!
        </Description>
      </Card4>
    </Row>
  </ProcessContainer>
);

export default Process;
