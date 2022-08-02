import React from "react";
import {
  MachinePhotoGalleryContainer,
  Head,
  Row,
  Col1,
  Col2,
  Col3,
  Col4,
  ImgSrc,
} from "./machine-photo-gallery.styles";
import Img1 from "../../assets/images/1.jpg";
import Img2 from "../../assets/images/2.jpg";
import Img3 from "../../assets/images/3.jpg";
import Img4 from "../../assets/images/4.jpg";

const MachinePhotoGallery = () => (
  <MachinePhotoGalleryContainer>
    <Head>photo gallery</Head>
    <Row>
      <Col1>
        <ImgSrc src={Img1} />
      </Col1>
      <Col2>
        {" "}
        <ImgSrc src={Img2} />{" "}
      </Col2>
      <Col3>
        {" "}
        <ImgSrc src={Img3} />{" "}
      </Col3>
      <Col4>
        {" "}
        <ImgSrc src={Img4} />{" "}
      </Col4>

      <Col1>
        <ImgSrc src={Img1} />
      </Col1>
      <Col2>
        {" "}
        <ImgSrc src={Img2} />{" "}
      </Col2>
      <Col3>
        {" "}
        <ImgSrc src={Img3} />{" "}
      </Col3>
      <Col4>
        {" "}
        <ImgSrc src={Img4} />{" "}
      </Col4>

      <Col1>
        <ImgSrc src={Img1} />
      </Col1>
      <Col2>
        {" "}
        <ImgSrc src={Img2} />{" "}
      </Col2>
      <Col3>
        {" "}
        <ImgSrc src={Img3} />{" "}
      </Col3>
      <Col4>
        {" "}
        <ImgSrc src={Img4} />{" "}
      </Col4>
    </Row>
  </MachinePhotoGalleryContainer>
);

export default MachinePhotoGallery;
