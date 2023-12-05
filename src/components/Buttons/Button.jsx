const Button = ({ onClick, text, isWhite, anim }) => {
	const buttonClasses = isWhite ? 'button white' : 'button'

	return (
		<button className={buttonClasses} onClick={onClick} tabIndex="0">
			{text}
		</button>
	)
}

export default Button