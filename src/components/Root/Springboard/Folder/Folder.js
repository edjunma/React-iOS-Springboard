import React from 'react';
import styled from 'styled-components';

import facebookLogo from './facebook-logo.png';
import messengerLogo from './messenger-logo.png';
import whatsappLogo from './whatsapp-logo.png';

const AppIcon = styled.img`
	border-radius: 0.25rem;
	height: auto;
	width: 100%;
`;

const FolderIcons = styled.div`
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 1rem;
	box-sizing: border-box;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

const FolderName = styled.span`
	color: white;
	margin-top: 0.5rem;
`;

const Wrapper = styled.div`
	align-items: center;
	display: flex;
	flex-flow: column nowrap;
	user-select: none;

	:hover {
		cursor: pointer;
	}
`;

const Folder = ({ folder }) => {
	return (
		<Wrapper>
			<FolderIcons>
				<AppIcon src={facebookLogo} />
				<AppIcon src={messengerLogo} />
				<AppIcon src={whatsappLogo} />
			</FolderIcons>
			<FolderName>{folder.name}</FolderName>
		</Wrapper>
	);
};

export default Folder;
