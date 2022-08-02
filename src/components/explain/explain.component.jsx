import React from "react";
import {
  ExplainContainer,
  Head,
  Desc,
  Row,
  Col1,
  Image,
  Col2,
  Section,
  Title,
  Descrip,
  Section1,
} from "./explain.styles";
import explainImg from "../../assets/images/explain.jpg";

const Explain = () => (
  <ExplainContainer>
    <Head>waste recycling management</Head>
    <Desc>
      here we highlight the problems that birth the need for recycling
    </Desc>
    <Row>
      <Col1>
        <Image src={explainImg} />
      </Col1>
      <Col2>
        <Section>
          <Title>at the source</Title>
          <Descrip>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde obcaecati, modi aspernatur magni rerum delectus saepe deserunt fuga fugit dolorum?
          </Descrip>
        </Section>
        <Section1>
          <Title>during handling</Title>
          <Descrip>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde obcaecati, modi aspernatur magni rerum delectus saepe deserunt fuga fugit dolorum?
          </Descrip>
        </Section1>
        <Section>
          <Title>during transfer</Title>
          <Descrip>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde obcaecati, modi aspernatur magni rerum delectus saepe deserunt fuga fugit dolorum?
          </Descrip>
        </Section>
        <Section1>
        
          <Title>at the plant</Title>
          <Descrip>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde obcaecati, modi aspernatur magni rerum delectus saepe deserunt fuga fugit dolorum?
          </Descrip>
        </Section1>
      </Col2>
    </Row>
  </ExplainContainer>
);

export default Explain;
