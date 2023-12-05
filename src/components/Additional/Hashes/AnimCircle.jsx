export const animCircle = () => {
	return (
		<svg className="animateCircles" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
			<circle cx="50%" cy="50%" r="10%" stroke="#A7A4A4" fill="none">
				<animate attributeName="r" values="1%;100%" dur="5s" repeatCount="indefinite" />
			</circle>

			<circle cx="50%" cy="50%" r="10%" stroke="#A7A4A4" fill="none">
				<animate attributeName="r" values="1%;100%" dur="5s" begin="1s" repeatCount="indefinite" />
			</circle>

			<circle cx="50%" cy="50%" r="10%" stroke="#A7A4A4" fill="none">
				<animate attributeName="r" values="1%;100%" dur="5s" begin="2s" repeatCount="indefinite" />
			</circle>
		</svg>
	)
}

export default animCircle