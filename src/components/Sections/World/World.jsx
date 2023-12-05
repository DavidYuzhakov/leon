import AOS from 'aos';
import { useEffect } from 'react';
import Hashes from "../../Additional/Hashes/Hashes"
import bag from '../../../img/World/bag.svg'
import house from '../../../img/World/house.svg'
import drive from '../../../img/World/drive.svg'
import sun from '../../../img/World/sun.svg'

export const World = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="world">
			<div className="container">
				<div className="worldWrapper">
					<div className="worldInfo">
						<h2 className="h2" data-aos="fade-right" data-aos-once="false" data-aos-anchor-placement="center-center">Из любой <br /> точки мира</h2>
						<h3 className="h3" data-aos="fade-up" data-aos-once="false"><strong>Главное - это наличие интернета,</strong> и не важно медленный он или быстрый</h3>
						<button className="button" data-aos="fade-down" data-aos-once="false">
							Подключить Облако 1С
						</button>
						<Hashes anim="fade-left"  />
					</div>
					<div className="worldItems">
						<div className="worldItemsInner" data-aos="zoom-in" data-aos-anchor-placement="center-center" data-aos-once="false">
							<div className="worldItem">
								<svg width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="105" cy="105" r="104" stroke="#959494" strokeWidth="2" strokeDasharray="12 12" />
								</svg>
								<img src={bag} width="62" height="51" alt="" />
								<div className="worldItemTitle">На работе</div>
							</div>
							<div className="worldItem">
								<svg width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="105" cy="105" r="104" stroke="#959494" strokeWidth="2" strokeDasharray="12 12" />
								</svg>
								<img src={drive} width="62" height="51" alt="" />
								<div className="worldItemTitle">В дороге</div>
							</div>
						</div>
						<div className="worldItemsInner" data-aos="zoom-in" data-aos-once="false">
							<div className="worldItem">
								<svg width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="105" cy="105" r="104" stroke="#959494" strokeWidth="2" strokeDasharray="12 12" />
								</svg>
								<img src={house} width="62" height="51" alt="" />
								<div className="worldItemTitle">Дома</div>
							</div>
							<div className="worldItem">
								<svg width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="105" cy="105" r="104" stroke="#959494" strokeWidth="2" strokeDasharray="12 12" />
								</svg>
								<img src={sun} width="62" height="51" alt="" />
								<div className="worldItemTitle">В отпуске</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default World