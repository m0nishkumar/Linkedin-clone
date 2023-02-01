import React from "react";
export class Event_display extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
"http://localhost:3001/api/events")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Please wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h2 style={{marginLeft:"10px"}}>Upcoming Events:</h2>
			<ul>{
				items.map((item) => (
                <div className="events">
                    <h3 className="event-title"><li>{item.title}<span>{item.date}</span></li></h3>
                    </div>
				))
			}</ul>
		</div>
	);
}
}

