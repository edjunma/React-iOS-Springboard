import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	backdrop-filter: blur(20px);
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;

	:hover {
		cursor: pointer;
	}
`;

const OpenFolderBackdrop = () => {
	return isVisible ? <Wrapper /> : null;
};

export default OpenFolderBackdrop;
