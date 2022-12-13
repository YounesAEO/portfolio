import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { EXP_BACK, EXP_DATA, EXP_FRONT, EXP_MGMT } from '../../utils/constants';

const Experience = () => {
	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>
			<div className="container experience-container">
				<div className="experience-frontend">
					<h3>Frontend Development</h3>
					<div className="experience-content">
						{EXP_FRONT.map(({ skill, level }, index) => {
							return (
								<article
									className="experience-details"
									key={index}>
									<BsPatchCheckFill className="experience-icon" />
									<div>
										<h4>{skill}</h4>
										<small>{level}</small>
									</div>
								</article>
							);
						})}
					</div>
				</div>
				<div className="experience-backend">
					<h3>Backend Development</h3>
					<div className="experience-content">
						{EXP_BACK.map(({ skill, level }, index) => {
							return (
								<article
									className="experience-details"
									key={index}>
									<BsPatchCheckFill className="experience-icon" />
									<div>
										<h4>{skill}</h4>
										<small>{level}</small>
									</div>
								</article>
							);
						})}
					</div>
				</div>

				<div className="experience-data">
					<h3>AI & Data</h3>
					<div className="experience-content">
						{EXP_DATA.map(({ skill, level }, index) => {
							return (
								<article
									className="experience-details"
									key={index}>
									<BsPatchCheckFill className="experience-icon" />
									<div>
										<h4>{skill}</h4>
										<small>{level}</small>
									</div>
								</article>
							);
						})}
					</div>
				</div>

				<div className="experience-data">
					<h3>Management & Collaboration</h3>
					<div className="experience-content">
						{EXP_MGMT.map(({ skill, level }, index) => {
							return (
								<article
									className="experience-details"
									key={index}>
									<BsPatchCheckFill className="experience-icon" />
									<div>
										<h4>{skill}</h4>
										<small>{level}</small>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
