import styled from "styled-components";

export const VideoContainer = styled.div`
  padding: 100px 90px 100px 90px;
  background: #EEEEEE;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 50px 10px;
  }
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
export const Col1 = styled.div`
  width: 424px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
export const Col2 = styled.div`
@media screen and (max-width: 800px) {
  width: 100%;
}
`;
export const Title = styled.h1`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  margin: 20px 0 10px 0;
  font-family: dk;

  @media screen and (max-width: 800px) {
    margin: 0;
  }
`;
export const Description = styled.p`
  font-size: 14px;
  color: #000;
  font-weight: 800;
  line-height: 34px;
  letter-spacing: 2px;
  font-family: typo-grotesk-thin;
  text-transform: lowercase;
`;
export const VideoTag = styled.video`
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

`;
