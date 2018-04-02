import React from 'react';

import styled from 'styled-components';
// import CircularProgress from 'material-ui/CircularProgress';
import loader from './loader.png';

const StyledPreloader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(32, 38, 39, 0.95);
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 999;
  
  .rot {
    animation: 1s linear 0s normal none infinite running rot;
    -webkit-animation: 1s linear 0s normal none infinite running rot;
    width: 52px;
  }
  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


const Preloader = () => (
  <StyledPreloader>
    <img className="rot" src={loader} />
  </StyledPreloader>
);

export default Preloader;
