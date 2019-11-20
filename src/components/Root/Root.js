import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Springboard from './Springboard/Springboard';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  html, body {
    margin: 0;
    padding: 0;
  }

  html, body, #app {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Roboto;
    font-weight: 300;
  }
`;

const Wrapper = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	width: 100%;
`;

const Root = () => {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<Springboard />
			</Wrapper>
		</>
	);
};

export default Root;
