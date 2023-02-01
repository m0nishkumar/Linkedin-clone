import React from "react";
export class Newsapi extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	componentDidMount() {
		fetch(
"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=07489e0f61ee45509f941bd17fd52e6d")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json.articles,
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
		 {
				items.map((item) => (
                <div className="newsfeed">
                <img src={item.urlToImage} alt="Image not found"style={{width:"100%",height:"200px"}}/>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </div>
				))
			}
		</div>
	);
}
}

