import React from 'react';
import styled from 'styled-components';

import Folder from './Folder/Folder';
import ios11DefaultWallpaper from './ios-11-default-wallpaper.jpg';

const Wrapper = styled.div`
	background-image: url(${ios11DefaultWallpaper});
	background-position: center;
	background-size: auto 100%;
	box-sizing: border-box;
	display: grid;
	grid-gap: 1.25rem 1rem;
	grid-template-columns: repeat(4, 1fr);
	height: 60rem;
	padding: 2rem;
	width: 30rem;
`;

const Springboard = ({ folders }) => {
	return (
		<Wrapper>
			{folders.map(folder => (
				<Folder folder={folder} key={folder.id} />
			))}
		</Wrapper>
	);
};

export default Springboard;
