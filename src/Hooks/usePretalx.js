import { useEffect, useState } from "react";
import fetchData from '../Services/fetchData'

export default function usePretalx() {
	const [events, setEvents] = useState([]);
	useEffect(() => { fetchData().then(data => setEvents(data.results)); }, [])
	return events;
}