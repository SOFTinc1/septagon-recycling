import styled from "styled-components";
import Bg from "../../assets/images/bg2.jpg";

export const MachineContainer = styled.div`
  width: 100%;
  height: 900px;
  background-image: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;
  margin: -105px 0 0 0;

  @media screen and (max-width: 800px) {
    width: 100vw;
    height: 100%;
  }
`;
export const BackgroundOverlay = styled.div`
  width: 100%;
  background-color: rgba(38, 49, 53, 0.7);
  height: 900px;
  margin: 0 0 0 0;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;



export const Span = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 180px 40px 0 40px;
  font-size: 14px;
  color: #D1C8BB;
  font-weight: 800;
  font-family: typo-grotesk-thin;
  letter-spacing: 3px;
  line-height: 34px;

  @media screen and (max-width: 800px) {
    padding: 150px 0 0 0;
    font-size: 10px;
  }
`;
export const H1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 90px;
  font-weight: 800;
  color: rgba(200, 200, 57, 255);
  font-family: dk;

  @media screen and (max-width: 1100px) {
    padding: 17rem 0 0rem 0;
  }
  @media screen and (max-width: 1100px) {
    padding: 17rem 0 0 0;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 32px;
    padding: 0 10px;
    margin: 50px 0;
  }
`;
export const Hr = styled.hr`
  background-color: #fff;
  width: 70%;
  padding: 3px;
  margin: 0 0 30px 200px;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
`;
export const P = styled.p`
  text-transform: capitalize;
  font-size: 22px;
  color: #D1C8BB;
  text-align: center;
  margin: 0 auto;
  font-weight: 800;
  width: 567px;
  letter-spacing: 3px;
  font-family: typo-grotesk-thin;

  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 27px;
    padding: 0 10px;
    margin: 50px 0;
    font-weight: 400;
  }
`;
