import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const exp_front = [
	{
		skill: 'HTML',
		level: 'Experienced',
	},
	{
		skill: 'CSS',
		level: 'Intermediate',
	},
	{
		skill: 'JavaScript',
		level: 'Experienced',
	},
	{
		skill: 'Bootstrap',
		level: 'Intermediate',
	},
	{
		skill: 'React',
		level: 'Experienced',
	},
	{
		skill: 'Tailwind',
		level: 'Intermediate',
	},
	{
		skill: 'NextJs',
		level: 'Intermediate',
	},
	{
		skill: 'SWR',
		level: 'Intermediate',
	},
];

const exp_back = [
	{
		skill: 'NodeJs',
		level: 'Experienced',
	},
	{
		skill: 'ExpressJs',
		level: 'Intermediate',
	},
	{
		skill: 'MongoDB',
		level: 'Experienced',
	},
	{
		skill: 'Redis',
		level: 'Intermediate',
	},
	{
		skill: 'MySQL',
		level: 'Intermediate',
	},
	{
		skill: 'AWS S3',
		level: 'Experienced',
	},
	{
		skill: 'OAuth',
		level: 'Experienced',
	},
	{
		skill: 'Google APIs',
		level: 'Experienced',
	},
];

const exp_data = [
	{
		skill: 'Python',
		level: 'Experienced',
	},
	{
		skill: 'PyTorch',
		level: 'Learning',
	},
	{
		skill: 'Scikit-learn',
		level: 'Intermediate',
	},
	{
		skill: 'Pandas/Numpy',
		level: 'Intermediate',
	},
	{
		skill: 'Neo4G',
		level: 'Intermediate',
	},
	{
		skill: 'Neural Nets',
		level: 'Learning',
	},
];

const exp_mgmt = [
	{
		skill: 'Scrum',
		level: 'Experienced',
	},
	{
		skill: 'Kanban',
		level: 'Experienced',
	},
	{
		skill: 'Git',
		level: 'Intermediate',
	},
	{
		skill: 'Notion',
		level: 'Intermediate',
	},
];

const Experience = () => {
	return (
		<section id="experience">
			<h5>What Skills I Have</h5>
			<h2>My Experience</h2>
			<div className="container experience-container">
				<div className="experience-frontend">
					<h3>Frontend Development</h3>
					<div className="experience-content">
						{exp_front.map(({ skill, level }) => {
							return (
								<article className="experience-details">
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
						{exp_back.map(({ skill, level }) => {
							return (
								<article className="experience-details">
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
						{exp_data.map(({ skill, level }) => {
							return (
								<article className="experience-details">
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
						{exp_mgmt.map(({ skill, level }) => {
							return (
								<article className="experience-details">
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
