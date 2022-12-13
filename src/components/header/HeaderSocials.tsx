import React from 'react';
import { BsLinkedin, BsDribbble, BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
	return (
		<div className="header-socials">
			<a href="https://linkedin.com" target="_blank" rel="noreferrer">
				<BsLinkedin />
			</a>
			<a href="https://github.com" target="_blank" rel="noreferrer">
				{' '}
				<BsGithub />
			</a>
			<a href="https://dribble.com" target="_blank" rel="noreferrer">
				<BsDribbble />
			</a>
		</div>
	);
};

export default HeaderSocials;
