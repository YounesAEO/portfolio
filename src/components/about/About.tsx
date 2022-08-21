import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
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
							<small>3+ Years</small>
						</article>

						<article className="about-card">
							<IoIosSchool className="about-icon" />
							<h5>Engineering Degree</h5>
							<small>In Information Systems</small>
						</article>

						<article className="about-card">
							<VscFolderLibrary className="about-icon" />
							<h5>Projects</h5>
							<small>80+ Completed</small>
						</article>
					</div>

					<p>
						I define myself as a builder, simply because my most
						valuable skill is understanding my clients pain and
						build stuff that solves it. My experience in{' '}
						<a href="https://www.lastartupstation.co/">
							@LaStartupStation
						</a>{' '}
						helped me develop a business acumen and at the same time
						broadened my knowledge on technology, design and problem
						solving.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
