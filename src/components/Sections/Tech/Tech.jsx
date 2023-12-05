import AOS from 'aos';
import { useEffect, useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TechPng from '../../../img/Tech/tech.png';
import TechWebp from '../../../img/Tech/tech.webp';
import Hashes from '../../Additional/Hashes/Hashes';
import Button from '../../Buttons/Button';

export const Tech = () => {
  const techRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.techImg img',
          start: 'top 90%',
          end: 'center center',
          // markers: true,
          scrub: 1
        },
      })
      tl.fromTo('.techImg img', {
        scale: .5,
        opacity: 0,
        duration: 3
      }, {
        scale: 1,
        opacity: 1
      })
      tl.fromTo('.h2', { y: -100, opacity: 0 }, { y: 0, opacity: 1 }, '<')
      tl.fromTo('.hashes', { x: 100, opacity: 0 }, { x: 0, opacity: 1 }, '<')
      tl.fromTo('.button', { x: -100, opacity: 0, duration: 2 }, { x: 0, opacity: 1})
    }, techRef)
  }, [])  

	return (
		<section className="tech" id='tech' ref={techRef}>
			<div className="container">
				<div className="techWrapper" >
					<div className="techImg">
						<picture>
							<source srcSet={TechWebp} type="image/webp" />
							<img src={TechPng} width="493" height="493" alt="Abstract light blue background" />
						</picture>
					</div>
					<h2 className='h2'>
						Будь в тренде <span>цифровых</span> технологий
					</h2>
					<Hashes className='tech-hashes' />
					<Button text="Что такое облако 1С?" isWhite onClick={() => window.location.href = '#'} />
				</div>
			</div>
		</section>
	)
}

export default Tech