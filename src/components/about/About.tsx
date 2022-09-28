import React from 'react';
import './about.css';
import { FaAward, FaUniversity } from 'react-icons/fa';
import { IoIosSchool } from 'react-icons/io';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id="about">
			<h5>A Little Background</h5>
			<h2> About Me</h2>
			<div className="container about-container">
				<div className="about-me">
					<div className="about-me-image">
						<img
							src={require('../../assets/portfolio-pdp1.jpg')}
							alt="About Me"
						/>
					</div>
				</div>
				<div className="about-content">
					<div className="about-cards">
						<article className="about-card">
							<FaAward className="about-icon" />
							<h5>Experience</h5>
							<small>1+ Years</small>
						</article>

						<article className="about-card">
							<IoIosSchool className="about-icon" />
							<h5>Engineering Degree</h5>
							<small>In Information Systems</small>
						</article>

						<article className="about-card">
							<FaUniversity className="about-icon" />
							<h5>Masters Degree</h5>
							<small>In Digital Transformation</small>
						</article>
					</div>

					<p>
						I define myself as a builder, simply because my most
						valuable skill is understanding people's pain and
						building stuff that solves it. My experience in one of
						the biggest startup incubators in Africa,{' '}
						<a href="https://www.lastartupstation.co/">
							@LaStartupStation
						</a>
						, helped me develop a business acumen and at the same
						time broadened my knowledge on technology, design and
						problem solving.
					</p>
					<a href="#contact" className="btn btn-primary">
						Learn More
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
