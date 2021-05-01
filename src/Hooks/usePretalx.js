import { useEffect, useState } from "react";
import fetchData from '../Services/fetchData'
import moment from 'moment';
import { groupBy } from 'lodash';

export default function usePretalx() {
	const [events, setEvents] = useState([]);

	useEffect(() => { fetchData().then(data => setEvents(data.results)); }, [])

	const dayName = item => moment(item.slot.start, 'YYYY-MM-DD').format('DDD');

	const eventsGroupedByDays = Object.values(groupBy(events, dayName));

	const listOfDays = eventsGroupedByDays.map((el) => String(new Date(el[0].slot.start)).substring(0, 20));

	const eventsGroupedByRoom = Object.values(events.reduce((acc, curr) => {
		acc[curr.slot.room.en] = acc[curr.slot.room.en] || [];
		acc[curr.slot.room.en].push(curr);
		return acc;
	}, {}));

	return { events, eventsGroupedByDays, listOfDays, eventsGroupedByRoom };
}
