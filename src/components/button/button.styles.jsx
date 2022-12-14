import styled, { css } from "styled-components";
// import { Link } from "react-router-dom";

const buttonStyles = css`
  background-color: #1f232e;
  color: #D1C8BB;
  padding: 16px 25px;

  &:active {
    background-color: #44009a;
    color: #ffffff;
    border: none;
  }

  &:disabled,
  button[disabled] {
    background-color: #e9d8ff;
    color: #ffffff;
    border: none;
  }
`;

const invertedButtonStyles = css`
  border: 1px solid #999999;
  background-color: #ffffff;
  color: #555555;

  &:hover {
    border: 1px solid #7000ff;
    background-color: #ffffff;
    color: #555555;
  }

  &:active {
    border: 1px solid #7000ff;
    background-color: #ffffff;
    color: #7000ff;
  }

  &:disabled,
  button[disabled] {
    border: 1px solid #f2f2f2;
    background-color: #ffffff;
    color: #f2f2f2;
  }
`;

const googleSigninStyles = css`
  background-color: #4285f4;
  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  if (props.googleSignin) {
    return googleSigninStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const ButtonContainer = styled.div`
  height: 60px;
  cursor: pointer;
  font-family: typo-grotesk-thin;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 18px;
  line-height: 25px;
  box-sizing: border-box;
  ${getButtonStyles}

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
