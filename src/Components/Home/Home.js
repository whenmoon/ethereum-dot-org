import React from 'react'
import { useHistory } from 'react-router-dom';
import Loading from '../Loader/Loader';
import Day from '../Day/Day';
import usePretalx from '../../Hooks/usePretalx';
import Room from '../Room/Room';

export default function Home() {

	const history = useHistory();

	const handleClick = (event) => history.push({
		pathname: '/event',
		state: event,
	});

	const { events, eventsGroupedByDays, listOfDays, eventsGroupedByRoom } = usePretalx();

	return (
		<div
			className="App"
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			{events.length && eventsGroupedByRoom.length
				?
				<>
					<div style={{ padding: 100 }}>
						<div style={{ fontSize: 30 }}>
							Events Calendar By Day:
					</div >
						{listOfDays.map((day, i) =>
							<div
								style={{ border: '2px blue solid', margin: 10 }}
								onClick={() => handleClick(eventsGroupedByDays[i])}
							>
								<Day
									day={String(day)}
								/>
							</div>
						)}
					</div>
					<div style={{ padding: 100 }}>
						<div style={{ fontSize: 30 }}>
							Events By Room:
					</div>
						{eventsGroupedByRoom.map((day, i) =>
							<div
								onClick={() => handleClick(eventsGroupedByDays[i])}
							>
								<Room
									room={["Magenta Room"]}
								/>
							</div>
						)}
					</div>
				</>
				: <Loading />
			}
		</div>
	)
}