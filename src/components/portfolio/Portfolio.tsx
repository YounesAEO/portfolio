import React from 'react';
import './portfolio.css';
import { PORTFOLIO_DATA } from '../../utils/constants';

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2> Projects </h2>
			<div className="container portfolio-container">
				{PORTFOLIO_DATA.map(({ id, github, demo, image, title }) => {
					return (
						<a
							href={github}
							target="_blank"
							key={id}
							rel="noreferrer">
							<article className="portfolio-item">
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
