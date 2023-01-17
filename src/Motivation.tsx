import React from 'react';
import { REASONS } from './utils/constants';
import Reason from './components/reason/Reason';
import { Link, useLoaderData } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { GrLinkTop } from 'react-icons/gr';

const Motivation = () => {
	const target = useLoaderData().toString();
	return target === 'jur' || target === 'odazjw' ? (
		<div className="container container-motivation">
			<Link
				to={target === 'jur' ? '/' : '/personal'}
				className="back"
				title="Go back to portfolio">
				<TiArrowBack />
			</Link>
			<p id="start">
				{' '}
				If my super complicated algorithm works, You gotta be{' '}
				{target === 'jur' ? 'Ali' : 'Furqan'}. I'm actually proud I got
				you to this page! <br />
				Long story short, I wanna work for you! I'll steal{' '}
				<strong>3 mins and 20 seconds</strong> of your time to tell you{' '}
				<strong>
					why I am a perfect fit for{' '}
					{target === 'jur' ? 'stonks' : 'thirdweb'} .
				</strong>
			</p>
			{REASONS.filter((reason) => reason.for.includes(target)).map(
				({ title, content, SVG }, index) => {
					return (
						<Reason
							key={index}
							isOdd={index % 2 === 1}
							title={title}
							content={content}
							SVG={SVG}
						/>
					);
				}
			)}
			<a href="#start" className="back-to-top" title="Back to top">
				<GrLinkTop />
			</a>
		</div>
	) : (
		<div id="error-page" className="container container-motivation">
			<h1>Oops!</h1>
			<p>Seems like you're on the wrong page</p>
			<Link to={'/'}>
				<p>Go to portfolio</p>
			</Link>
		</div>
	);
};

export default Motivation;
