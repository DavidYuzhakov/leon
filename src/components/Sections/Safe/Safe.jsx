import AOS from 'aos';
import { useEffect } from 'react';
import safePng from '../../../img/Safe/safe.png'
import safeWebp from '../../../img/Safe/safe.webp'
import Button from '../../Buttons/Button'

export const Safe = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="safe">
			<div className="container">
				<div className="safeWrapper">
				<div className="quickInfo">
						<h2 className="h2" data-aos="fade-down" data-aos-once="false" data-aos-anchor-placement="top-center"><span>Безопасно</span> и надежно </h2>
						<ul className="quickList" data-aos="zoom-in" data-aos-once="false" data-aos-anchor-placement="top-center">
							<li className='quickItem'>
								Надежные виртуальные <span>серверы Infra</span> и объектные хранилища <span>Hotbox и Icebox</span> с поддержкой протокола <span>S3 (simple storage service)</span>  
							</li>
							<li className='quickItem'>
								Используйте лучшие сервера России бесплатно !
							</li>
						</ul>
						<Button anim={'fade-down'} text="Узнать подробнее" onClick={() => window.location.href = '#'} />
					</div>
					<div className="safeImg" data-aos="fade-left" data-aos-once="false" data-aos-anchor-placement="top-center">
						<picture>
							<source srcSet={safeWebp} type="image/webp" />
							<img src={safePng} width="582" height="772" alt="Abstract light blue background" />
						</picture>
					</div>
					<button  onClick={() => window.location.href = '#'} className='button mobileButton'>Узнать подробнее</button>
				</div>
			</div>
		</section>
	)
}

export default Safe