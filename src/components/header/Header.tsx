import React, { useEffect, useState } from 'react';
import './header.css';
import Cta from './Cta';
import HeaderSocials from './HeaderSocials';
import { getLocationFromIp } from '../../utils/geo';
import { ReactComponent as Arrow } from '../../assets/arrow-2.svg';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isFromUS, setIsFromUS] = useState(false);
	useEffect(() => {
		const getCountryCode = async () => {
			if (!localStorage.getItem('yaeo-country')) {
				const response = await getLocationFromIp();
				const data = response.data
					.trim()
					.split('\n')
					.reduce(function (obj, pair) {
						pair = pair.split('=');
						return { ...obj, [pair[0]]: pair[1] };
					}, {});
				setIsFromUS(data.loc === 'US');
				localStorage.setItem('yaeo-country', String(data.loc === 'US'));
			} else {
				setIsFromUS(localStorage.getItem('yaeo-country') === 'true');
			}
		};

		if (window.location.hostname !== 'localhost') {
			getCountryCode();
		} else {
			setIsFromUS(true);
		}
	}, []);
	return (
		<header id="header">
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
						<Link
							to={'/motivation'}
							className="btn btn-primary btn-cover">
							Check this out
						</Link>
					</div>
				</div>
			)}
			<div className="container header-container">
				<h5>Hello I'm</h5>
				<h1>Younes ABOU EL OMOUM</h1>
				<h5 className="text-light">
					{' '}
					I build stuff & nerd out about startups sometimes
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
