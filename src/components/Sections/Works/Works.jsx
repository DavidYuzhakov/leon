import AOS from 'aos';
import { useEffect } from 'react';
import Button from "../../Buttons/Button"
import data from '../../../img/Works/data.svg'
import phone from '../../../img/Works/phone.svg'
import copy from '../../../img/Works/copy.svg'

export const Works = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 })
	}, [])

	return (
		<section className="works">
			<div className="container">
				<div className="worksWrapper">
					<div className="worksInfo">
						<h2 className="h2"  data-aos="fade-down" data-aos-once="false" data-aos-anchor-placement="center-center">
							Вы спите <span className="span1">.</span><span className="span2">.</span><span className="span3">.</span>
							<span className="span4">z</span><span className="span5">z</span><span className="span6">z</span>, <br /> <span className="spanText">1C работает</span>
						</h2>
						<Button anim='fade-right' text="Начать работу" onClick={() => window.location.href = '#'} />
					</div>
					<div className="worksItems">
						<div className="workItem" data-aos="fade-up" data-aos-once="false">
							<div className="workItemInner">
								<div className="workImg">
									<img src={data} width="35" height="35" loading="lazy" alt="Blue icon" />
								</div>
								<div className="workItemText">
									Автоматическое <br /> <strong>обновление 1С в облаке</strong>
								</div>
							</div>
						</div>
						<div className="workItem" data-aos="fade-down" data-aos-once="false">
							<div className="workItemInner">
								<div className="workImg">
									<img src={copy} width="35" height="35" loading="lazy" alt="Blue icon" />
								</div>
								<div className="workItemText">
									Автоматические <br /> <strong>резервные копии</strong>
								</div>
							</div>
						</div>
						<div className="workItem" data-aos="fade-up" data-aos-once="false">
							<div className="workItemInner">
								<div className="workImg">
									<img src={phone} width="35" height="35" loading="lazy" alt="Blue icon" />
								</div>
								<div className="workItemText">
									<strong>Техподдержка</strong> 24/7
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}