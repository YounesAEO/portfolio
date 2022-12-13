import React from 'react';
import './reason.css';

const Reason = ({ title, content, SVG, isOdd }) => {
	return (
		<div className={isOdd ? 'reason right' : 'reason left'}>
			<SVG />
			<div className="content">
				<h1>{title}</h1>
				<p dangerouslySetInnerHTML={{ __html: content }}></p>
			</div>
		</div>
	);
};

export default Reason;
