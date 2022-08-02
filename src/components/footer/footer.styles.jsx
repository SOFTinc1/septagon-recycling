import styled from "styled-components";
import FooterImg from "../../assets/images/footer.jpg";

export const FooterContainer = styled.div`
  background: url(${FooterImg});
  background-size: cover;
  height: 250px;

  @media screen and (max-width: 800px) {
    
  }
`;

export const Title = styled.h1`
  font-family: dk;
  font-weight: 800;
  margin: 90px 0 0 50px;
  position: absolute;
  text-transform: uppercase; 

  @media screen and (max-width: 800px) {
    margin: 30px 30px;
  }
`;

export const Descrip = styled.h2`
  font-size: 17px;
  font-family: typo-grotesk-thin;
  margin: 145px 0 0 50px;
  position: absolute;
  text-transform: capitalize; 
  border-bottom: 2px solid #000;

  @media screen and (max-width: 800px) {
    margin: 180px 30px;
  }
`;