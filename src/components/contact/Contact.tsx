import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsTwitter } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_95jgtlj',
				'template_a34lcgv',
				form.current,
				'oiYlucZGizUgrcjeA'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact-container">
				<div className="contact-options">
					<article className="contact-option">
						<MdOutlineEmail />
						<h4>Email</h4>
						<h5>y.abouelomoum09@gmail.com</h5>
						<a href="mailto:y.abouelomoum09@gmail.com">
							Send a message
						</a>
					</article>

					<article className="contact-option">
						<RiMessengerLine />
						<h4>Messenger</h4>
						<h5>Younes Abou</h5>
						<a href="https://m.me/youness.abou.9">Send a message</a>
					</article>

					<article className="contact-option">
						<BsTwitter />
						<h4>Twitter</h4>
						<h5>@YAbouelomoum</h5>
						<a href="https://twitter.com/messages/compose?recipient_id=1493266109419696135">
							Send a message
						</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						required
					/>
					<textarea
						name="message"
						rows={7}
						placeholder="Your Message"
						required
					/>
					<button className="btn btn-primary" type="submit">
						Send a message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
