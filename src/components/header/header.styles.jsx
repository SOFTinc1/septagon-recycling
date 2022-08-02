import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
  font-family: dk;
  position: sticky;
  top: 0; 
  z-index: 100; 
  background: #FFFFFF;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
`;


export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Option = styled.div`
  padding: 10px 15px;
  font-weight: normal;
  letter-spacing: 0.1rem;
  cursor: pointer;
  color: black;
  margin-right: 65px;
  font-family: dk;
`;

export const DisplayName = styled.div`
  margin: -1.4rem 0 0 2.5rem;
  position: absolute;
  text-transform: capitalize;
  font-weight: 800;
  font-family: dk;
`;

export const DisplayName2 = styled.div`
  margin: -1.5rem 0 0 2rem;
  position: absolute;
  text-transform: lowercase;
  font-family: dk;
  font-weight: 400;
  color: #000;
`;