import React from 'react'

export default function Event(props) {
	return (
		<div className="App" style={{ margin: 30 }}>
			Events:
			{props.location.state.map((el) =>
				<>
					<div style={{ fontSize: 24 }}>
						Event:
			    </div>
					<div style={{ padding: 50 }}>
						{JSON.stringify(el.title)}
						{JSON.stringify(el.description)}
						{JSON.stringify(el.slot.start)}
					</div>
				</>
			)}
		</div>
	);
}
