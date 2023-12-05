const CardButton = ({ onClick, buttonText }) => {

	return (
		<button className="cardButton" onClick={onClick} tabIndex="0">
			{buttonText}
		</button>
	)
}

export default CardButton