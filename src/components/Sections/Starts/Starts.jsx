import AOS from 'aos';
import { useEffect } from 'react';
import brand from '../../../img/Hero/1c.svg'
import Button from '../../Buttons/Button'
import bgPng from '../../../img/Starts/bg.png'
import bgWeb from '../../../img/Starts/bg.webp'

export const Starts = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="starts">
			<div className="startsBg" data-aos="fade-in" data-aos-once="false">
				<picture>
					<source srcSet={bgWeb} type="image/webp" />
					<img src={bgPng} width="493" height="493" alt="Abstract black background" />
				</picture>
			</div>
			<div className="container">
				<div className="startsWrapper">
					<img className='heroBrand' src={brand} width="96" height="96" alt="" data-aos="zoom-out" data-aos-anchor-placement="center-center" data-aos-once="false" />
					<h2 className="h2" data-aos="zoom-in-up" data-aos-anchor-placement="center-center" data-aos-once="false">
						Запустим <span>за 60 сек</span>
					</h2>
					<h3 className="h3"  data-aos="zoom-in-down" data-aos-anchor-placement="center-center" data-aos-once="false">
						Сами в шоке, но это реально !
					</h3>
					<Button anim='fade-in' isWhite text="Начать работу" onClick={() => window.location.href = '#'} />
				</div>
			</div>
		</section>
	)
}

export default Starts