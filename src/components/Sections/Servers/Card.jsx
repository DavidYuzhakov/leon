import CardButton from "../../Buttons/CardButton"

export const Card = ({ isBold, isBlack, title, text, buttonText,num, anim, pos }) => {
	const textStyleClass = isBold ? 'cardPrice bold' : 'cardPrice'
	const titleStyleClass = isBlack ? 'card black' : 'card'

	return (
		<div className={`${pos} ${titleStyleClass}`}>
			<div className="cardInner">
				<div className="cardTitle">{title}</div>
				<div className={textStyleClass}><span>{num}</span>{text}</div>
				<CardButton  buttonText={buttonText} onClick={() => window.location.href='#'}/>
			</div>
		</div>
	)
}

export default Card
