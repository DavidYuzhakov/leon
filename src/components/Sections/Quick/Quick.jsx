import AOS from 'aos';
import { useEffect } from 'react';
import rocketPng from '../../../img/Quick/rocket.png'
import rocketWebp from '../../../img/Quick/rocket.webp'

export const Quick = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="quick">
			<div className="container">
				<div className="quickWrapper">
					<div className="quickImg">
						<picture>
							<source srcSet={rocketWebp} type="image/webp" />
							<img src={rocketPng} width="582" height="772" alt="Abstract light blue background" data-aos-anchor-placement="top-center"
								data-aos="fade-right" data-aos-once="false" />
						</picture>
					</div>
					<div className="quickInfo">
						<h2 className="h2" data-aos-anchor-placement="top-center" data-aos="fade-left" data-aos-once="false">
							Ну <span>ооочень</span> быстро
						</h2 >
						<ul className="quickList" data-aos="zoom-out" data-aos-once="false">
							<li className='quickItem'>
								Работает так быстро, что не угнаться…
							</li>
							<li className='quickItem'>
								Все базы данных 1С размещаются в облачной инфраструктуре <br /> <span>Cloud Solutions (MCS)</span> в партнерстве <span>Фирмы 1С и Mail.ru Group</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Quick