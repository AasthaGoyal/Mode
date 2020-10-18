import React from "react";
import axios from "axios";

class Kurta extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: [],
		};
	}

	componentDidMount() {
		axios.get("http://localhost:3001/items/getItems").then((res) => {
			console.log(res);
			this.setState({
				item: res.data,
			});
		});
	}

	render() {
		console.log(this.state.item);
		let data = this.state.item && this.state.item.map((item) => {
			let imagesrc = `http://localhost:3001/${item.image}`;
			console.log(imagesrc);
			return (
				<div>
					<img
						src={imagesrc}
						alt='minion image '
					/>
					<label name='name' id='name'>
						{" "}
						{item.name}
					</label>
				</div>
			);
		});
		console.log(data);
		return <div>{data}</div>;
	}
}

export default Kurta;
