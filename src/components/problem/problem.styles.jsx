import styled from "styled-components";
import CustomButton from "../button/button";

export const ProblemContainer = styled.div`
  padding: 30px 20px;

  @media screen and (max-width: 800px) {
    padding: 10px;
    width: 100%;
  }
`;
export const Head = styled.h4`
  font-size: 40px;
  text-transform: uppercase;
  font-family: dk;
  font-weight: 400;
  text-align: center;
  margin: 30px 0 0 0;
`;
export const Desc = styled.h5`
  font-size: 20px;
  text-transform: lowercase;
  font-family: typo-grotesk-thin;
  font-weight: 800;
  text-align: center;
  margin: 0 0 50px 0;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0 0;
`;

export const InnerRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Img = styled.img`
  width: 100%;
`;
export const InnerFlex = styled.div`
  border: 4px solid #d1c8bb;
  height: 200px;
  margin: auto 0 auto -80px;
  padding: 30px 60px 0 60px;

  @media screen and (max-width: 800px) {
    margin: -60px 0 0 0;
    height: 100%;
    padding: 30px 20px;
  }
`;
export const Button = styled(CustomButton)`
  margin: 30px 0 0 0;
  width: 40%;
  letter-spacing: 2px;

  @media screen and (max-width: 800px) {
    margin: 0;
    width: 80%;
  }
`;



export const InnerRow2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const InnerFlex2 = styled.div`
  border: 3px solid #d1c8bb;
  height: 200px;
  margin: auto 0 auto 0;
  padding: 30px 40px 0 40px;
  z-index: 1;

  @media screen and (max-width: 800px) {
    margin: 0px 0 0 0;
    height: 100%;
    padding: 30px 20px;
  }
`;
export const Img2 = styled.img`
  width: 100%;
  margin: auto 0 auto -80px;

  @media screen and (max-width: 800px) {
    margin: -60px 0 0 0;
  }
`;
export const Button2 = styled(CustomButton)`
  margin: 30px 0 0 250px;
  width: 50%;

  @media screen and (max-width: 800px) {
    margin: 0;
    width: 90%;
  }
`;



export const Title = styled.h1``;
export const Description = styled.p`
  font-size: 11px;
  text-align: left;
  font-weight: 800;
  line-height: 25px;
  letter-spacing: 2px;
  font-family: typo-grotesk-thin;
  text-transform: lowercase;
`;
