import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height 100%;
  min-height: 100vh;
  background: rgba(0,0,0, 0.3);
`;

const Message = styled.div`
  width: 300px;
  padding: 35px 20px;
  border-radius: 4px;
  background: #fff;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 45%;
  left: calc(50% - 150px);
`;


export const Preloader = () => (
  <Wrapper>
    <Message>
      Loading, please wait...
    </Message>
  </Wrapper>
);
