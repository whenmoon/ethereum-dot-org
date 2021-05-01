export default function fetchData() {
	const result = fetch('https://pretalx.com/api/events/democon/talks/')
		.then((res) => res.json())
		.then((result) => result)
		.catch((error) => error);
	return result
}
