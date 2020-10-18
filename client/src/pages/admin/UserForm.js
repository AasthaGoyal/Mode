import React from "react";
import axios from "axios";

class UserForm extends React.Component {
	constructor() {
		super();
		this.state = {
            name: "",
			description: "",
			selectedFile: "",
		};
	}

	onChange = (e) => {
		switch (e.target.name) {
            case "name":
                this.setState({ name: e.target.value});
                break;
            case "description":
                this.setState({ description: e.target.value});
                break;
			case "selectedFile":
				this.setState({ selectedFile: e.target.files[0] });
				break;
			default:
				console.log('no name descibed');
		}
	};

	onSubmit = (e) => {
		e.preventDefault();
		const { name, description, selectedFile } = this.state;
		let formData = new FormData();
        console.log(selectedFile);

		formData.append("name", name);
		formData.append("description", description);
		formData.append("selectedFile", selectedFile);

		axios.post("http://localhost:3001/items/insertItems", formData).then((res) => {
			console.log(res);
        })
        .catch((err) => console.log(err));

	
	};

	render() {
		const { name, description, selectedFile } = this.state;
		return (
			<form onSubmit={this.onSubmit} enctype='multipart/form-data'>
				<input type='text' name='name' value={name} onChange={this.onChange} />
				<br />

				<input
					type='text'
					name='description'
					value={description}
					onChange={this.onChange}
				/>
				<br />
				<input
					type='file'
					name='selectedFile'
                    id='selectedFile'
                    multiple
					onChange={this.onChange}
				/>
				<button type='submit'>Submit</button>
			</form>
		);
	}
}

export default UserForm;
