import React from 'react';
import './portfolio.css';

const data = [
	{
		id: 1,
		github: 'https://github.com',
		demo: 'https://dribble.com',
		image: require('../../assets/portfolio1.jpg'),
		title: 'This is a portfolio item title',
	},
	{
		id: 2,
		github: 'https://github.com',
		demo: 'https://dribble.com',
		image: require('../../assets/portfolio2.jpg'),
		title: 'This is a portfolio item title',
	},
	{
		id: 3,
		github: 'https://github.com',
		demo: 'https://dribble.com',
		image: require('../../assets/portfolio3.jpg'),
		title: 'This is a portfolio item title',
	},
	{
		id: 4,
		github: 'https://github.com',
		demo: 'https://dribble.com',
		image: require('../../assets/portfolio4.jpg'),
		title: 'This is a portfolio item title',
	},
	{
		id: 5,
		github: 'https://github.com',
		demo: 'https://dribble.com',
		image: require('../../assets/portfolio5.png'),
		title: 'This is a portfolio item title',
	},
	{
		id: 6,
		github: 'https://github.com',
		demo: 'https://dribble.com',
		image: require('../../assets/portfolio6.jpg'),
		title: 'This is a portfolio item title',
	},
];
const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2> Portfolio</h2>
			<div className="container portfolio-container">
				{data.map(({ id, github, demo, image, title }) => {
					return (
						<article className="portfolio-item" key={id}>
							<div className="portfolio-img">
								<img src={image} alt={title} />
							</div>
							<h3>{title}</h3>
							<div className="portfolio-cta">
								<a
									href={github}
									className="btn"
									target="_blank">
									Github
								</a>
								<a
									href={demo}
									className="btn btn-primary"
									target="_blank">
									Live Demo
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
