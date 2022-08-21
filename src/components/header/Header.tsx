import React from 'react';
import './header.css';
import Cta from './Cta';
import HeaderSocials from './HeaderSocials';

const Header = () => {
	return (
		<header>
			<div className="container header-container">
				<h5>Hello I'm</h5>
				<h1>Younes ABOU EL OMOUM</h1>
				<h5 className="text-light">
					{' '}
					I build stuff & nerd out about AI from time to time
				</h5>
				<Cta />
				<HeaderSocials />
				<div className="my-pic">
					<img
						src={require('../../assets/yns-cartoon1.png')}
						alt="my pic"
					/>
				</div>
				<a href="#contact" className="scroll-down">
					Scroll Down
				</a>
			</div>
		</header>
	);
};

export default Header;
