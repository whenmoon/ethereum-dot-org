import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Event from '../Event/Event';

export default function App() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<Route path="/event" component={Event} />
		</Router>
	);
}
