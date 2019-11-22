import React, { useState } from 'react';
import styled from 'styled-components';

import Folder from './Folder/Folder';
import ios11DefaultWallpaper from './ios-11-default-wallpaper.jpg';
import OpenFolderBackdrop from './OpenFolderBackdrop';

const Wrapper = styled.div`
	background-image: url(${ios11DefaultWallpaper});
	background-position: center;
	background-size: auto 100%;
	box-sizing: border-box;
	display: grid;
	grid-auto-rows: min-content;
	grid-gap: 1.25rem 1rem;
	grid-template-columns: repeat(4, 1fr);
	height: 60rem;
	padding: 2rem;
	width: 30rem;
`;

const Springboard = ({ folders }) => {
	const [openedFolderId, setOpenedFolderId] = useState(null);

	return (
		<Wrapper>
			<OpenFolderBackdrop isVisible={openedFolderId !== null} />
			{folders.map(folder => (
				<Folder folder={folder} key={folder.id} onOpen={() => setOpenedFolderId(folder.id)} />
			))}
		</Wrapper>
	);
};

export default Springboard;
