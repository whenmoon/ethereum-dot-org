import './App.css';
import usePretalx from '../../Hooks/usePretalx';
import moment from 'moment';
import { groupBy } from 'lodash';
import Loading from '../Loader/Loader';
import Day from '../Day/Day';

export default function App() {
	//const events = usePretalx();
	console.log('events', events);
	const dayName = item => moment(item.slot.start, 'YYYY-MM-DD').format('DDD');
	const eventsGroupedByDays = Object.values(groupBy(events, dayName));
	console.log('eventsGroupedByDays', eventsGroupedByDays)

	const listOfDays = eventsGroupedByDays.map((el) => String(new Date(el[0].slot.start)).substring(0, 20));
	console.log('%c listOfDays', 'color: green;', listOfDays);

	const eventsGroupedByRoom = events.reduce((acc, curr) => {
		acc[curr.slot.room.en] = acc[curr.slot.room.en] || [];
		acc[curr.slot.room.en].push(curr);
		return acc;
	}, {});

	console.log('eventsGroupedByRoom', eventsGroupedByRoom)
	return (
		<div
			className="App"
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<div>
				Welcome To Democon!
				</div>
			{events.length
				?
				<>
					<div style={{ fontSize: 30 }}>
						Events By Day:
					</div>
					{listOfDays.map((day) => <Day day={String(day)} />)}
				</>
				: <Loading />
			}
		</div>
	);
}
