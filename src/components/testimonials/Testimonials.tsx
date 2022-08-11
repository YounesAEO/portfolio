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
		img: require('../../assets/avatar1.jpg'),
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quibusdam autem, laborum odio adipisci, ullam eius dolore perspiciatis atque amet soluta harum libero tenetur repudiandae natus neque porro mollitia recusandae.',
		name: 'Erwin SMITH',
	},
	{
		id: 2,
		img: require('../../assets/avatar2.jpg'),
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quibusdam autem, laborum odio adipisci, ullam eius dolore perspiciatis atque amet soluta harum libero tenetur repudiandae natus neque porro mollitia recusandae.',
		name: 'Erwin SMITH',
	},
	{
		id: 3,
		img: require('../../assets/avatar3.jpg'),
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quibusdam autem, laborum odio adipisci, ullam eius dolore perspiciatis atque amet soluta harum libero tenetur repudiandae natus neque porro mollitia recusandae.',
		name: 'Erwin SMITH',
	},
	{
		id: 4,
		img: require('../../assets/avatar4.jpg'),
		review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quibusdam autem, laborum odio adipisci, ullam eius dolore perspiciatis atque amet soluta harum libero tenetur repudiandae natus neque porro mollitia recusandae.',
		name: 'Erwin SMITH',
	},
];
const Testimonials = () => {
	return (
		<section id="testimonials">
			<h5>Reviews from clients</h5>
			<h2>Testimonials</h2>
			<Swiper
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
				className="container testimonials-container">
				{data.map(({ id, img, review, name }) => {
					return (
						<SwiperSlide key={id} className="testimonial">
							<div className="client-avatar">
								<img src={img} alt={name} />
							</div>
							<h5 className="client-name">{name}</h5>
							<small className="client-review">{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
