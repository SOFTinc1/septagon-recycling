import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  width: 100%;

  @media screen and (max-width: 800px) {
    padding: 0 0 1rem 0;
  }
`;

export const LogoContainer = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

export const LogoImg = styled.div`
  width: 100%;

  @media screen and (max-width: 800px) {
    height: 30px;
    margin: 0;
  }
`;

export const Img = styled.img`
  position: absolute;
  border: 1px solid #aaa;
`;

export const H1 = styled.h1`
  margin: 20px 20px 0 1px;
  // text-transform: capitalize;
  font-weight: 800;
  // letter-spacing: 0.1em;
  font-size: 25px;
  margin: -5px 0 0 0;
  color: #8ca890;
`;

export const Option = styled(Link)`
color: #fff;
text-transform: lowercase;
`;