import AOS from 'aos';
import { useEffect } from 'react';
import Button from "../../Buttons/Button"
import phonePng from '../../../img/Panel/phone.png'
import phoneWebp from '../../../img/Panel/phone.webp'
import tabWebp from '../../../img/Panel/tab.webp'
import tabPng from '../../../img/Panel/phone.png'

export const Panel = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="panel">
			<div className="container">
				<div className="panelWrapper">
					<div className="panelInfo">
						<h2 className="h2"  data-aos="fade-right" data-aos-once="false" data-aos-anchor-placement="center-center">
							Смотри
						</h2>
						<h2 className="h2" data-aos="fade-right" data-aos-once="false">
							Работай
						</h2>
						<h2 className="h2" data-aos="fade-right" data-aos-once="false">
							Управляй
						</h2>
						<Button anim='fade-right' text="Перейти в панель управления" onClick={() => window.location.href = '#'} />
					</div>
					<div className="panelImg">
						<div className="backImg" data-aos="fade-in" data-aos-once="false">
							<picture>
								<source srcSet={tabWebp} type="image/webp" />
								<img src={tabPng} width="535" height="336" alt="Abstract light blue background" />
							</picture>
						</div>
						<div className="frontImg" data-aos="fade-up" data-aos-once="false">
							<picture>
								<source srcSet={phoneWebp} type="image/webp" />
								<img src={phonePng} width="178" height="355" alt="Abstract light blue background" />
							</picture>
						</div>
					</div>
					<button data-aos="fade-right" data-aos-once="false" onClick={() => window.location.href = '#'} className='button mobileButton'>Перейти в панель управления</button>
				</div>
			</div>
		</section>
	)
}