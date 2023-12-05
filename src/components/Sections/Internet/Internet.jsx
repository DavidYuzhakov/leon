import AOS from 'aos';
import { useEffect } from 'react';
import TechPng from '../../../img/Tech/tech.png';
import TechWebp from '../../../img/Tech/tech.webp';
import brand from '../../../img/Hero/1c.svg'

export const Internet = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="internet">
			<div className="container">
				<div className="internetWrapper">
					<div className="internetInfo">
						<img src={brand} width="85" height="85" alt="" data-aos="zoom-out-right" data-aos-once="false" />
						<h2 className="h2" data-aos="fade-down" data-aos-once="false" data-aos-anchor-placement="center-center">
							Интернет вокруг нас, <span>1С работает</span> для Вас
						</h2>
						<h3 className="h3" data-aos="fade-in" data-aos-once="false" data-aos-anchor-placement="center-center">Главное - это наличие интернета, и не важно медленный он или быстрый</h3>
					</div>
					<div className="internetImg" data-aos="zoom-out-left" data-aos-once="false">
						<picture>
							<source srcSet={TechWebp} type="image/webp" />
							<img src={TechPng} width="493" height="493" alt="Abstract light blue background" />
						</picture>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Internet