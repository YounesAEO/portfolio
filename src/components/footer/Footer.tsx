import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
	return (
		<footer id="footer">
			<a href="#header" className="footer-logo">
				Y-AEO
			</a>
			<ul className="permalinks">
				<li>
					<a href="#header">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#testimonials">Endorsements</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
			<div className="footer-socials">
				<a href="https://www.facebook.com/youness.abou.9/">
					<FaFacebookF />
				</a>
				<a href="https://www.instagram.com/younes.abou.9/">
					<FiInstagram />
				</a>
				<a href="https://twitter.com/yabouelomoum">
					<IoLogoTwitter />
				</a>
			</div>

			<div className="footer-copyrights">
				<small>&copy; Y-AEO. All rights reserved. </small>
			</div>
		</footer>
	);
};

export default Footer;
