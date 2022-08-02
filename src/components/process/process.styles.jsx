import styled from "styled-components";

export const ProcessContainer = styled.div`
  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
    padding: 0;
    margin: 0;
  }
`;
export const Card1 = styled.div`
  background-color: #5a6b74;
  padding: 30px 20px 120px 10px;

  @media screen and (max-width: 800px) {
    padding: 30px 0px;
  }
`;
export const Card2 = styled.div`
  background-color: #2b3836;
  padding: 30px 20px 120px 10px;

  @media screen and (max-width: 800px) {
    padding: 30px 0px;
  }
`;
export const Card3 = styled.div`
  background-color: #09121c;
  padding: 30px 20px 120px 10px;

  @media screen and (max-width: 800px) {
    padding: 30px 0px;
  }
`;
export const Card4 = styled.div`
  background-color: green;
  padding: 30px 20px 120px 10px;

  @media screen and (max-width: 800px) {
    padding: 30px 0px;
  }
`;
export const Number = styled.h1`
  text-transform: capitalize;
  // color: rgba(255, 255, 255, 0.384);
  color: #d1c8bb;
  font-size: 130px;
  font-weight: 800;
  font-family: dk;
  opacity: 0.3;

  @media screen and (max-width: 800px) {
    padding: 0;
    font-size: 110px;
  }
`;
export const Title = styled.h2`
  text-transform: capitalize;
  color: #f9f9f9;
  font-size: 30px;
  font-weight: 800;
  margin: -73px 0 0 12px;
  font-family: dk;

  @media screen and (max-width: 800px) {
    padding: 0;
    margin: -43px 0 0 12px;
  }

  @media screen and (max-width: 400px) {
    padding: 0;
  }
`;
export const Description = styled.p`
  text-transform: lowercase;
  color: #d1c8bb;
  font-size: 14px;
  font-weight: 800;
  margin: 50px 0 0 0;
  font-family: typo-grotesk-thin;

  @media screen and (max-width: 800px) {
    padding: 0;
    text-align: center;
    font-size: 12px;
  }
`;
