import React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';

const Wrapper = styled(animated.div)`
	height: 100%;
	left: 0;
	position: absolute;
	pointer-events: none;
	top: 0;
	width: 100%;

	:hover {
		cursor: pointer;
	}
`;

const MAXIMUM_BLUR = 20;
const MINIMUM_OPACITY_AMOUNT_ON_SHOW = 0.1;
const MINIMUM_OPACITY_AMOUNT_ON_HIDE = 0.9;

const OpenFolderBackdrop = ({ isVisible }) => {
	const spring = useSpring({ openAmount: isVisible ? 1 : 0 });

	const style = {
		opacity: spring.openAmount.interpolate(openAmount => `blur(${openAmount * MAXIMUM_BLUR}px)`),
		opacity: spring.openAmount,
		pointerEvents: spring.openAmount.interpolate(openAmount => {
			return (isVisible && openAmount >= MINIMUM_OPACITY_AMOUNT_ON_SHOW) ||
				(!isVisible && openAmount >= MINIMUM_OPACITY_AMOUNT_ON_HIDE)
				? 'auto'
				: 'none';
		})
	};

	return <Wrapper style={style} />;
};

export default OpenFolderBackdrop;
