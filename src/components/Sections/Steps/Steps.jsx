import AOS from 'aos';
import { useEffect } from 'react';
import Hashes from "../../Additional/Hashes/Hashes"
import AnimArrows from "../../Additional/AnimArrows/AnimArrows"
import Button from "../../Buttons/Button"

export const Steps = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="steps">
			<div className="container">
				<div className="stepsWrapper">
					<h2 className="h2" data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="center-center">Переехать просто</h2>
					<Hashes anim={'fade-down'} />
					<div className="stepsItems">
						<div className="stepItem" data-aos="fade-up" data-aos-once="false" data-aos-anchor-placement="center-center">
							<svg className="numArrow" width="24" height="116" viewBox="0 0 24 116" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M21.5915 53.4779C21.6914 55.9913 21.6841 58.5469 21.5575 61.1359L23.5551 61.2336C23.6846 58.5842 23.6922 55.9695 23.5899 53.3985L21.5915 53.4779ZM19.6551 38.2924C20.1861 40.7441 20.6235 43.265 20.9528 45.8443L22.9367 45.591C22.6 42.9534 22.1527 40.3758 21.6098 37.869L19.6551 38.2924ZM20.8411 68.7593C20.4935 71.2493 20.03 73.7616 19.4406 76.2889L21.3884 76.7432C21.9917 74.1561 22.4661 71.5845 22.8219 69.0358L20.8411 68.7593ZM15.1288 23.668C16.07 25.9667 16.9372 28.3751 17.7113 30.8794L19.6221 30.2888C18.8304 27.7276 17.9432 25.2634 16.9797 22.9102L15.1288 23.668ZM17.365 83.6673C16.5794 86.0448 15.6757 88.4296 14.6459 90.8159L16.4822 91.6083C17.5355 89.1677 18.46 86.7279 19.264 84.2948L17.365 83.6673ZM7.9943 10.1622C9.34898 12.1727 10.6626 14.3715 11.9054 16.7378L13.676 15.8078C12.4009 13.3799 11.0501 11.1182 9.65292 9.0446L7.9943 10.1622ZM11.3096 97.714C10.1251 99.9186 8.82588 102.12 7.40525 104.313L9.0839 105.401C10.534 103.162 11.8611 100.913 13.0714 98.6605L11.3096 97.714ZM0.691822 1.47431C1.56953 2.27887 2.45329 3.17266 3.3356 4.15121L4.82097 2.81193C3.89978 1.79025 2.97153 0.850901 2.04327 -9.44904e-07L0.691822 1.47431ZM3.73918 111.151C5.2019 110.282 6.76041 109.665 8.26185 109.234C11.1165 108.415 13.8536 108.246 15.5389 108.347L15.419 110.343C13.9478 110.255 11.4385 110.404 8.81329 111.157C6.18669 111.91 3.53256 113.242 1.65795 115.452L-0.000195734 114.36C0.812337 112.725 1.85782 110.09 2.35027 107.532C2.59645 106.253 2.69545 105.039 2.58188 104C2.46815 102.96 2.15131 102.176 1.64164 101.65L3.07899 100.259C4.00112 101.212 4.42724 102.477 4.57003 103.783C4.71297 105.09 4.58202 106.519 4.3142 107.91C4.11432 108.948 3.8332 109.99 3.51414 110.98L3.73918 111.151Z" fill="#7645FF" />
							</svg>
							<div className="stepItemInner">
								<div className="stepItemNum">
									1
								</div>
								<div className="stepItemTitle">
									Вошёл
								</div>
								<div className="stepItemDesc">
									Личный кабинет
								</div>
							</div>
							<AnimArrows />
						</div>
						<div className="stepItem" data-aos="fade-down" data-aos-once="false" data-aos-anchor-placement="center-center">
							<svg className="numArrow" width="24" height="116" viewBox="0 0 24 116" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M21.5915 53.4779C21.6914 55.9913 21.6841 58.5469 21.5575 61.1359L23.5551 61.2336C23.6846 58.5842 23.6922 55.9695 23.5899 53.3985L21.5915 53.4779ZM19.6551 38.2924C20.1861 40.7441 20.6235 43.265 20.9528 45.8443L22.9367 45.591C22.6 42.9534 22.1527 40.3758 21.6098 37.869L19.6551 38.2924ZM20.8411 68.7593C20.4935 71.2493 20.03 73.7616 19.4406 76.2889L21.3884 76.7432C21.9917 74.1561 22.4661 71.5845 22.8219 69.0358L20.8411 68.7593ZM15.1288 23.668C16.07 25.9667 16.9372 28.3751 17.7113 30.8794L19.6221 30.2888C18.8304 27.7276 17.9432 25.2634 16.9797 22.9102L15.1288 23.668ZM17.365 83.6673C16.5794 86.0448 15.6757 88.4296 14.6459 90.8159L16.4822 91.6083C17.5355 89.1677 18.46 86.7279 19.264 84.2948L17.365 83.6673ZM7.9943 10.1622C9.34898 12.1727 10.6626 14.3715 11.9054 16.7378L13.676 15.8078C12.4009 13.3799 11.0501 11.1182 9.65292 9.0446L7.9943 10.1622ZM11.3096 97.714C10.1251 99.9186 8.82588 102.12 7.40525 104.313L9.0839 105.401C10.534 103.162 11.8611 100.913 13.0714 98.6605L11.3096 97.714ZM0.691822 1.47431C1.56953 2.27887 2.45329 3.17266 3.3356 4.15121L4.82097 2.81193C3.89978 1.79025 2.97153 0.850901 2.04327 -9.44904e-07L0.691822 1.47431ZM3.73918 111.151C5.2019 110.282 6.76041 109.665 8.26185 109.234C11.1165 108.415 13.8536 108.246 15.5389 108.347L15.419 110.343C13.9478 110.255 11.4385 110.404 8.81329 111.157C6.18669 111.91 3.53256 113.242 1.65795 115.452L-0.000195734 114.36C0.812337 112.725 1.85782 110.09 2.35027 107.532C2.59645 106.253 2.69545 105.039 2.58188 104C2.46815 102.96 2.15131 102.176 1.64164 101.65L3.07899 100.259C4.00112 101.212 4.42724 102.477 4.57003 103.783C4.71297 105.09 4.58202 106.519 4.3142 107.91C4.11432 108.948 3.8332 109.99 3.51414 110.98L3.73918 111.151Z" fill="#7645FF" />
							</svg>
							<div className="stepItemInner">
								<div className="stepItemNum">
									2
								</div>
								<div className="stepItemTitle">
									Создал
								</div>
								<div className="stepItemDesc">
									Информационную базу
								</div>
							</div>
							<AnimArrows />
						</div>
						<div className="stepItem" data-aos="fade-left" data-aos-once="false" data-aos-anchor-placement="center-center">
							<div className="stepItemInner">
								<div className="stepItemNum">
									3
								</div>
								<div className="stepItemTitle">
									Запустил
								</div>
								<div className="stepItemDesc">
									1С Предприятие
								</div>
							</div>
						</div>
					</div>
					<Button anim='zoom-in' text="Переехать в облако 1С" onClick={() => window.location.href = '#'} />
					<div className="stepsNotify" data-aos="zoom-out" data-aos-once="false">
						Сложно? Мы поможем
					</div>
				</div>
			</div>
		</section>
	)
}