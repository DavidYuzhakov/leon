import AOS from 'aos';
import { useEffect } from 'react';
import mapPng from '../../../img/Companys/map.png'
import mapWebp from '../../../img/Companys/map.webp'

export const Companys = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="companys">
			<div className="container">
				<div className="companysWrapper">
					<h2 className="h2"  data-aos="zoom-out" data-aos-once="false" data-aos-anchor-placement="center-center">Уже более <span>1700 компаний</span> в облаке</h2>
					<div className="companysMap" data-aos="zoom-in" data-aos-once="false">
						<picture>
							<source srcSet={mapWebp} type="image/webp" />
							<img src={mapPng} width="493" height="493" loading='lazy' alt="Abstract light blue background" />
						</picture>
					</div>
				</div>
			</div>
		</section>
	)
}