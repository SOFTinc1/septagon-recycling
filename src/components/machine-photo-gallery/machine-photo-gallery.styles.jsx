import styled from "styled-components";

export const MachinePhotoGalleryContainer = styled.div`
  padding: 40px 80px;
  background: #f9fbe7;

  @media screen and (max-width: 800px) {
    padding: 40px 10px;
  }
`;
export const Head = styled.div`
  font-size: 40px;
  text-transform: capitalize;
  padding: 0 0 50px 0;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
export const Col1 = styled.div``;
export const Col2 = styled.div``;
export const Col3 = styled.div``;
export const Col4 = styled.div``;
export const ImgSrc = styled.img`
  width: 100%;
  // border: 2px solid #D1C8BB;
`;
