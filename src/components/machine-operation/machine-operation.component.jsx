import React from "react";
import {
  VideoContainer,
  Row,
  Col1,
  Title,
  Description,
  Col2,
  VideoTag,
} from "./machine-operation.styles";
import VideoFile from "../../assets/video/video.mp4";

const MachineOperation = () => (
  <VideoContainer>
    <Row>
      <Col1>
        <Title>sustainability starts at home, remember that!</Title>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex,
          laboriosam? Ut atque cupiditate, temporibus labore, dolorem nobis
          corporis, maxime inventore sint eius error voluptatibus! Impedit
          nesciunt voluptatem minus nihil consequuntur delectus dicta
          praesentium, accusantium commodi ipsam cum fugiat eius sint earum at
          nobis facere eveniet amet. Mollitia, officia. Aliquam, voluptate.
        </Description>
      </Col1>
      <Col2>
        <VideoTag src={VideoFile} type="video/mp4" controls />
      </Col2>
    </Row>
  </VideoContainer>
);

export default MachineOperation;
