import styled from "styled-components";
import BackgroundImage from "../../../assets/images/banner.jpg";

export const HomepageBanner2Container = styled.div`
  width: 100%;
  height: 900px;
  background-image: url(${BackgroundImage});
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
  text-transform: capitalize;
  text-align: center;
  padding: 220px 0 0 0;
  font-size: 3rem;
  color: #d1c8bb;
  font-family: dk;

  @media screen and (max-width: 800px) {
    padding: 150px 0 0 0;
  }
`;
export const H1 = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 170px;
  font-weight: 800;
  color: rgba(200, 200, 57, 255);
  font-family: dk;

  @media screen and (max-width: 1100px) {
    padding: 17rem 0 0 0;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    font-size: 52px;
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
  color: #fff;
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



export const Scroll = styled.div`
  padding-top: 140px;
  justify-content: center;
  align-items: center;

  @-moz-keyframes Scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }
  @-webkit-keyframes Scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }
  @-o-keyframes Scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }
  @keyframes scroll {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(46px);
    }
  }
`;

export const IconScroll = styled.div`
  position: relative;
  width: 40px;
  height: 70px;
  margin-left: 650px;
  /* top: 84%; */
  margin-top: -15px;
  box-shadow: inset 0 0 0 1px #fff;
  border: 2px solid #fff;
  border-radius: 25px;

  @media screen and (max-width: 1100px) {
    margin: 0 0 0 24rem;
  }
  @media screen and (max-width: 800px) {
    margin: -130px auto;
  }
  // @media screen and (max-width: 330px) {
  //   margin: 12rem 0 0 15rem;
  // }

  &:before {
    position: absolute;
    left: 40%;

    content: "";
    width: 9px;
    height: 9px;
    background: #fff;
    // margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: scroll;
  }
`;
