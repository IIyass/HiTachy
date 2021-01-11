import styled, { keyframes } from 'styled-components';



export const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
  cursor:pointer;
`;

const ModalFadeInKeyframes = keyframes`
  0% {
    transform: scale3d(0.1, 0.1, 1);
  }

  55% {
    transform: scale3d(0.55, 0.55, 1);
  }

  75% {
    transform: scale3d(0.75, 0.75, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
`;

export const Modal = styled.div`
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  padding:20px;
  border-radius: 10px;
  width: auto;
  height: 100vh;
  animation: ${ModalFadeInKeyframes} 250ms linear;
  overflow-x: hidden;
 

  .content {
    padding: 30px 80px;

   
  }
`;


export const ModalHeader = styled.div`
  background-color: #fff;
  padding: 30px 80px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  text-align: center;
 
`;