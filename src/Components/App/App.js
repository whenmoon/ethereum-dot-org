import './App.css';
import usePretalx from '../../Hooks/usePretalx';
import moment from 'moment';
import { groupBy } from 'lodash';
import Loading from '../Loader/Loader';

export default function App() {
	const events = usePretalx();
	console.log('events', events);
	if (events.results) {
		const monthName = item => moment(item.slot.start, 'YYYY-MM-DD').format('DDD');
		const result = groupBy(events.results, monthName);
		console.log('result', result)
	}
	return (
		<div
			className="App"
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			{!events.length && <Loading />}
		</div>
	);
}
