
import AOS from 'aos';
import { useEffect } from 'react';
import Hashes from "../../Additional/Hashes/Hashes";
import Button from "../../Buttons/Button";
import AnimCircle from "../../Additional/Hashes/AnimCircle";
import brand from '../../../img/Hero/1c.svg';
import arrow from '../../../img/Hero/arrow.svg';

const scrollToSection = (sectionId, duration = 3200) => {
	const section = document.getElementById(sectionId)

	if (section) {
		const startingY = window.scrollY
		const targetY = section.getBoundingClientRect().top + window.scrollY
		const distance = targetY - startingY
		let startTime = null

		function scrollTo(time) {
			if (!startTime) startTime = time
			const progress = time - startTime
			const easeInOutCubic = progress < duration ? progress / duration : 1

			window.scrollTo(0, startingY + distance * easeInOutCubic)

			if (progress < duration) {
				requestAnimationFrame(scrollTo)
			}
		}

		requestAnimationFrame(scrollTo)
	}
}

export const Hero = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="hero">
			<AnimCircle />
			<div className="container">
				<div className="heroWrapper">
					<img className='heroBrand' src={brand} width="96" height="96" alt=""/>
					<h1 className="h1">
						Я, <span>ОБЛАКО 1С</span>
					</h1>
					<Hashes />
					<Button text="Купить или попробовать" onClick={() => window.location.href = '#'} />
					<button  className="scrollDown" onClick={() => scrollToSection('tech', 1200)}>
						<img src={arrow} width="46" height="46" alt="" />
					</button>
				</div>
			</div>
		</section>
	);
}
