import AOS from 'aos';
import { useEffect } from 'react';
import Button from '../../Buttons/Button'
import cirlce1 from '../../../img/Calc/circle1.svg'
import cirlce2 from '../../../img/Calc/circle2.svg'

export const Calc = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="calc">
			<img className="circle1" src={cirlce1} width="252" height="252" loading="lazy" alt="green circle"  />
			<img className="circle2" src={cirlce2} width="326" height="326" loading="lazy" alt="blue circle" />
			<div className="container">
				<div className="calcWrapper">
					<h2 className='h2' data-aos="fade-down" data-aos-once="false" data-aos-anchor-placement="center-center">
						Как ни крути - <span>выгодно</span> получается
					</h2>
					<h3 className="h3" data-aos="fade-right" data-aos-once="false">
						Технологии превосходят время…
					</h3>
					<Button anim='zoom-out' text="Калькулятор стоимости" onClick={() => window.location.href = '#'} />
				</div>
			</div>
		</section>
	)
}

export default Calc