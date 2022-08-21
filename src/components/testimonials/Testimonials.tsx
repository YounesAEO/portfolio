import React from 'react';
import './testimonials.css';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
	{
		id: 1,
		img: require('../../assets/amine.jpg'),
		review: "I've been following Younes' improvement for years now, as his mentor and friend. He's very ambitious and result-oriented, loves to work with motivated teams and has developed a great sense of leadership over the years I've known him.  ",
		name: 'Mohammed Amin ALAOUI SOSSAI',
		role: 'Strategy Executive @ <a href="https://www.ocpgroup.ma/"> OCP Group </a>',
	},
	{
		id: 2,
		img: require('../../assets/mehdi.webp'),
		review: 'Younes started as an intern at LaStartupStation and quickly became one of the core members of our Tech Team. For over a year working together, he always demonstrated strong work ethic and high intelligence in understanding the business needs and delivering high quality products that solved these needs.',
		name: 'Mehdi ALAOUI',
		role: 'CEO @ <a href="https://www.lastartupstation.co/"> LaStartupStation </a>',
	},
	{
		id: 3,
		img: require('../../assets/vannary.jpeg'),
		review: 'I worked with Younes on a computer vision project and not only we achieved great results on a short time but we also could get very helpful insights on the upcoming challenges. What I really liked about him, is his ability to communicate very transparently, at each step of the project, the different challenges, potential solutions as well as pros and cons of each solution ',
		name: 'Vannary MEAS-YEDID HARDY',
		role: 'Research Engineer @ <a href=https://www.pasteur.fr/>Institut Pasteur</a>',
	},
	{
		id: 4,
		img: require('../../assets/hassouni.jpg'),
		review: 'Younes has a good acumen of analysis, synthesis and initiatives. He likes challenges and is committed to innovative projects. Moreover, he is naturally equipped with an exemplary work ethic and a keen teamwork spirit.',
		name: 'Larbi HASSOUNI',
		role: 'University Lecturer & Researcher @ <a href=http://www.est-uh2c.ac.ma/>Université Hassan II de Casablanca</a>',
	},
];
const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>What Others Tell About Me</h5>
			<h2>Endorsements</h2>
			<Swiper
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
				className="container testimonials-container">
				{data.map(({ id, img, review, name, role }) => {
					return (
						<SwiperSlide key={id} className="testimonial">
							<div className="client-avatar">
								<img src={img} alt={name} />
							</div>
							<h5 className="client-name">{name}</h5>
							<small
								className="client-role"
								dangerouslySetInnerHTML={{
									__html: role,
								}}></small>
							<small className="client-review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
