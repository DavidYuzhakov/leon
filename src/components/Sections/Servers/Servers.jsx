import { useEffect, useLayoutEffect, useRef } from 'react';

import Card from "./Card";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



export const Servers = () => {
  const serversRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.serversItems',
          scrub: 1,
          markers: true,
          start: 'top 90%',
          end: 'center center',
        }
      })
      tl.fromTo('.h2', { scale: .75, opacity: 0, transformOrigin: 'right' }, { scale: 1, opacity: 1 }, '<')
      tl.fromTo('.subtitle', { scale: 1.35, opacity: 0 }, { scale: 1, opacity: 1 }, '<')
      tl.fromTo('.card', { opacity: 0 }, { opacity: 1}, '<' )
      tl.fromTo('.left-card', { rotateY: -80 }, { rotateY: 0 }, '<')
      tl.fromTo('.right-card', { rotateY: 80 }, { rotateY: 0 }, '<')
    }, serversRef)
  }, [])
  
	return (
		<section className="servers" ref={serversRef}>
			<div className="container">
				<div className="serversWrapper">
					<h2 className="h2">Долой свои сервера</h2>
					<h3 className="subtitle">Вам больше не нужны собственные сервера!</h3>
					<div className="serversItems">
						<Card buttonText="Подробнее" title="Было" num="~100 000 руб" text="/мес" pos={'left-card'} />
						<Card isBlack buttonText="Купить облако 1С" title="Стало" num="~580 руб" text="/мес" pos={'right-card'} />
					</div>
				</div>
			</div>
		</section>
	)
}