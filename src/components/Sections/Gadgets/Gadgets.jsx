import AOS from 'aos';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import phonePng from '../../../img/Gadgets/phone.png';
import phoneWebp from '../../../img/Gadgets/phone.webp';
import pcPng from '../../../img/Gadgets/pc.png';
import pcWebp from '../../../img/Gadgets/pc.webp';
import tabPng from '../../../img/Gadgets/tab.png';
import tabWebp from '../../../img/Gadgets/tab.webp';

const Gadgets = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="gadgets">
			<div className="container">
				<div className="gadgetsWrapper">
					<h2
						className="h2"
						data-aos="fade-down"
						data-aos-anchor-placement="center-center"
						data-aos-once="false"
					>
						Запускай 1С с любого гаджета
					</h2>
					<h3 className="h3" data-aos="fade-up" data-aos-anchor-placement="center-center">
						Главное - это браузер!
					</h3>
					<Swiper
						modules={[Autoplay]}
						slidesPerView={1}
						spaceBetween={30}
						centeredSlides
						loop={true}
						initialSlide={1}
						autoplay={{ delay: 3000, disableOnInteraction: false }}
						breakpoints={{
							768: {
								spaceBetween: 10,
							},
							1200: {
								slidesPerView: 3,
								spaceBetween: 15,
								centeredSlides: false
							},
						}}
						className="gadgetItems"
						data-aos="fade-up"
					>
						<SwiperSlide>
							<div className="gadget firstGadget"
								data-aos="fade-right" data-aos-once="false">
								<div className="gadgetImg">
									<picture>
										<source type="image/webp" srcSet={tabWebp}></source>
										<img src={tabPng} width="300" height="300" alt="Gadget" />
									</picture>
								</div>
								<div className="gadgetName">Планшет</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="gadget secondGadget" data-aos="zoom-in" data-aos-once="false">
								<div className="gadgetImg">
									<picture>
										<source type="image/webp" srcSet={phoneWebp}></source>
										<img src={phonePng} width="300" height="300" alt="Gadget" />
									</picture>
								</div>
								<div className="gadgetName">Смартфон</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="gadget thirdGadget" data-aos="fade-leftт" data-aos-once="false">
								<div className="gadgetImg">
									<picture>
										<source type="image/webp" srcSet={pcWebp}></source>
										<img src={pcPng} width="300" height="300" alt="Gadget" />
									</picture>
								</div>
								<div className="gadgetName">ПК</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Gadgets;
