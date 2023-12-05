import { Hero } from '../Sections/Hero/Hero';
import Tech from '../Sections/Tech/Tech';
import { Servers } from '../Sections/Servers/Servers';
import Gadgets from '../Sections/Gadgets/Gadgets';
import World from '../Sections/World/World';
import Internet from '../Sections/Internet/Internet';
import Quick from '../Sections/Quick/Quick';
import { Safe } from '../Sections/Safe/Safe';
import { Steps } from '../Sections/Steps/Steps';
import { Starts } from '../Sections/Starts/Starts';
import { Panel } from '../Sections/Panel/Panel';
import { Works } from '../Sections/Works/Works';
import { Calc } from '../Sections/Calc/Calc';
import { Companys } from '../Sections/Companys/Companys';
import { Chat } from '../Sections/Chat/Chat';

const App = () => {
	return (
		<div className="App">
			<Hero />
			<Tech />
			<div className="overlay">
				<Servers />
				<Gadgets />
			</div>
			<World />
			<Internet />
			<Quick />
			<Safe />
			<Steps />
			<Starts />
			<Panel />
			<div className="overlay">
				<Works />
				<Calc />
			</div>
			<Companys />
			<Chat />
		</div>
	)
}

export default App;
