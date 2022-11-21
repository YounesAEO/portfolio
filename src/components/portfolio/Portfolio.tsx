import React from 'react';
import './portfolio.css';

const data = [
	{
		id: 1,
		github: 'https://github.com/YounesAEO/travel-log-app',
		demo: 'https://dribble.com',
		image: require('../../assets/travel-log.png'),
		title: 'Travel Log App',
	},
	{
		id: 3,
		github: 'https://github.com/YounesAEO/dense-cell-counting',
		demo: 'https://dribble.com',
		image: require('../../assets/cell-counting.png'),
		title: 'CSRNet For Cell Counting in Highly Congested Scenes',
	},
	{
		id: 2,
		github: 'https://github.com/YounesAEO/sayhi',
		demo: 'https://dribble.com',
		image: require('../../assets/hi.jfif'),
		title: 'Say Hi',
	},

	{
		id: 4,
		github: 'https://github.com/YounesAEO/google-maps-clone',
		demo: 'https://dribble.com',
		image: require('../../assets/google-maps-clone.png'),
		title: 'Google Maps Clone',
	},
	{
		id: 6,
		github: 'https://github.com/YounesAEO/webscraper',
		demo: 'https://african-webscraper.herokuapp.com/index2.html',
		image: require('../../assets/webscraper.png'),
		title: 'African Startups WebScraper',
	},
	{
		id: 5,
		github: 'https://github.com/YounesAEO/yolov3-accident-detection',
		demo: 'https://dribble.com',
		image: require('../../assets/traffic-vision.png'),
		title: 'Traffic Vision',
	},
];
const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2> Projects </h2>
			<div className="container portfolio-container">
				{data.map(({ id, github, demo, image, title }) => {
					return (
						<a href={github} target="_blank">
							<article className="portfolio-item" key={id}>
								<div className="portfolio-img">
									<img src={image} alt={title} />
								</div>
								<h3>{title}</h3>
								{/*<div className="portfolio-cta">
								{/* <a
									href={github}
									className="btn"
									target="_blank">
									Github
								</a> */}
								{/* <a
									href={demo}
									className="btn btn-primary"
									target="_blank">
									Demo
								</a> 
							</div> */}
							</article>
						</a>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
