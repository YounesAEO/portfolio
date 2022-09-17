import React from 'react';

const Cta = () => {
	return (
		<div className="cta">
			<a href="../../assets/CV FS.pdf" download className="btn">
				Download CV
			</a>
			<a href="#contact" className="btn btn-primary">
				{' '}
				Let's Talk
			</a>
		</div>
	);
};

export default Cta;
