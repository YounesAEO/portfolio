import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const HeaderSocials = () => {
	return (
		<div className="header-socials">
			<a
				href="https://www.linkedin.com/in/younes-abou/"
				target="_blank"
				rel="noreferrer">
				<BsLinkedin />
			</a>
			<a
				href="https://github.com/YounesAEO"
				target="_blank"
				rel="noreferrer">
				{' '}
				<BsGithub />
			</a>
			<a
				href="https://twitter.com/YAbouelomoum"
				target="_blank"
				rel="noreferrer">
				<BsTwitter />
			</a>
		</div>
	);
};

export default HeaderSocials;
