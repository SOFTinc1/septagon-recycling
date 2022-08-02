import styled from "styled-components";

export const ExplainContainer = styled.div`
  padding: 20px;
  background-color: #D1C8BB;
`;
export const Head = styled.h4`
  font-size: 40px;
  text-transform: capitalize;
  font-weight: 800;
  text-align: center;
  margin: 30px 0 0 0;
  font-family: dk;
`;
export const Desc = styled.h5`
  font-size: 20px;
  text-transform: lowercase;
  font-family: typo-grotesk-thin;
  text-align: center;
  margin: 0 0 50px 0;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0px;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  } 
`;
export const Col1 = styled.div``;
export const Image = styled.img`
  width: 100%;
`;
export const Col2 = styled.div`
  margin: 27px 0 0 0;
`;
export const Section = styled.div`
  // border: 3px solid #d1c8bb;
  border: 3px solid #1f232e;
  padding: 25px 40px;
  margin: 0 0 20px -30px;

  @media screen and (max-width: 800px) {
    margin: 0 0 20px 0;
  }
`;
export const Section1 = styled.div`
  border: 3px solid #1f232e;
  padding: 25px 40px;
  margin: 0 0 20px -30px;

  @media screen and (max-width: 800px) {
    margin: 0 0 20px 0;
  }
`;
export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  font-family: dk;
  text-align: left;
  background: #d1c8bb;
  padding: 15px 0 15px 20px;
  width: 40%;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Descrip = styled.p`
  font-size: 15px;
  text-transform: lowercase;
  font-family: typo-grotesk-thin;
  font-weight: 800;
  text-align: left;
  margin: 20px 0;
`;
