import React from "react";
import {
  Head,
  Desc,
  Row,
  ProblemContainer,
  InnerRow,
  InnerRow2,
  Img,
  Img2,
  InnerFlex,
  InnerFlex2,
  Card,
  Button,
  Button2,
  Description,
} from "./problem.styles";
import Dump from "../../assets/images/a.jpg";
import Dump2 from "../../assets/images/b.jpg";
import Dump3 from "../../assets/images/c.jpg";

const Problem = () => (
  <ProblemContainer>
    <Head>the problem</Head>
    <Desc>
      here we highlight the problems that birth the need for recycling
    </Desc>
    <Row>
      <Card>
        <InnerRow>
          <Img src={Dump} />
          <InnerFlex>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              odio dolore incidunt animi delectus quaerat debitis quo laborum
              ipsa, sapiente itaque similique voluptates distinctio adipisci nam
              libero nobis unde suscipit. Atque maiores reiciendis eum expedita
              consectetur mollitia temporibus neque in.
            </Description>
            <Button>space runout</Button>
          </InnerFlex>
        </InnerRow>
      </Card>

      <Card>
        <InnerRow2>
          <InnerFlex2>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              odio dolore incidunt animi delectus quaerat debitis quo laborum
              ipsa, sapiente itaque similique voluptates distinctio adipisci nam
              libero nobis unde suscipit. Atque maiores reiciendis eum expedita
              consectetur mollitia temporibus neque in.
            </Description>
            <Button2>enviromental pollution</Button2>
          </InnerFlex2>
          <Img2 src={Dump2} />
        </InnerRow2>
      </Card>

      <Card>
        <InnerRow>
          <Img src={Dump3} />
          <InnerFlex>
            <Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              odio dolore incidunt animi delectus quaerat debitis quo laborum
              ipsa, sapiente itaque similique voluptates distinctio adipisci nam
              libero nobis unde suscipit. Atque maiores reiciendis eum expedita
              consectetur mollitia temporibus neque in.
            </Description>
            <Button>health hazzards</Button>
          </InnerFlex>
        </InnerRow>
      </Card>
    </Row>
  </ProblemContainer>
);

export default Problem;
