import AOS from 'aos';
import { useEffect } from 'react';
import scroll from '../../../img/Chat/scroll.svg'

export const Chat = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])
	
	return (
		<section className="chat">
			<div className="container">
				<div className="chatWrapper">
					<h4 className="h4" data-aos="zoom-out-down" data-aos-once="false" data-aos-anchor-placement="center-center">
						Привет, давай знакомиться?
					</h4>
					<div className="chatItems">
						<img className='chatScroll' src={scroll} width="6" height="353" loading="lazy" alt="Scrollbar" data-aos="fade-left" data-aos-once="false" />
						<div className="chatItem" data-aos="zoom-in" data-aos-once="false">
							<div className="chatItemInner">
								Я, 1С ОБЛАКО !
							</div>
						</div>
						<div className="chatItem" data-aos="zoom-in" data-aos-once="false">
							<div className="chatItemInner">
								А как твое имя?
							</div>
						</div>
						<div className="chatItem" data-aos="zoom-in" data-aos-once="false">
							<div className="chatItemInner">
								Максим
							</div>
						</div>
						<div className="chatItem" data-aos="zoom-in" data-aos-once="false">
							<div className="chatItemInner">
								Максим, держи ссылку на вход
							</div>
						</div>
						<div className="chatItemsBox" data-aos="zoom-in" data-aos-once="false">
							<div className="chatButton">
								Тарифы
							</div>
							<div className="chatButton">
								Войти
							</div>
						</div>
					</div>
					<div className="chatInputWrapper" data-aos="fade-up" data-aos-once="false">
						<div className="chatInput">
							<div className="chatSend">
								Отправить
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}