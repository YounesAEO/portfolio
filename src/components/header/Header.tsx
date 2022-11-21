import React, { useEffect, useState } from 'react';
import './header.css';
import Cta from './Cta';
import HeaderSocials from './HeaderSocials';
import { getLocationFromIp } from '../../utils/geo';
import { ReactComponent as Arrow } from '../../assets/arrow-2.svg';

const Header = () => {
	const [isFromUS, setIsFromUS] = useState(false);
	useEffect(() => {
		const getCountryCode = async () => {
			if (!localStorage.getItem('yaeo-country')) {
				const response = await getLocationFromIp();
				setIsFromUS(response.data.country_code === 'US');
				localStorage.setItem(
					'yaeo-country',
					String(response.data.country_code === 'US')
				);
			} else {
				setIsFromUS(localStorage.getItem('yaeo-country') === 'true');
			}
		};
		getCountryCode();
	});
	return (
		<header>
			{isFromUS && (
				<div className="cover">
					{/* <div className="arrow">
						<div className="arrow-body"></div>
					</div> */}
					<div className="ali-text">
						Seems like you're visiting from the US, If you're name
						starts with A and ends with I{' '}
					</div>
					<div className="ali-cta">
						<Arrow className="arrow" />
						<button className="btn btn-primary btn-cover">
							Check this out
						</button>
					</div>
				</div>
			)}
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
