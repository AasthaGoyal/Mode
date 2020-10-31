import React, { Component } from "react";
import axios from "axios";

export default class FilesUploadComponent extends Component {
	constructor(props) {
		super(props);

		this.onFileChange = this.onFileChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
            imgCollection: "",
            messsage: '',
            name: '',
            desc: ''
        };
        this.onTextChange = this.onTextChange.bind(this); 
	}

	onFileChange(e) {
		this.setState({ imgCollection: e.target.files });
	}

	onSubmit(e) {
		e.preventDefault();

		var formData = new FormData();
		for (const key of Object.keys(this.state.imgCollection)) {
			formData.append("imgCollection", this.state.imgCollection[key]);
        }
        formData.append("name", this.state.name);
        formData.append("desc", this.state.desc);

		axios
			.post("http://localhost:3001/items/upload-images", formData)
			.then((res) => {
				console.log(res.data);
			});
	}

    onTextChange = (event) => {
        event.preventDefault();
        switch(event.target.name){
            case 'name':
                this.setState({ name: event.target.value});
                break;
            case 'desc':
                this.setState({ desc: event.target.value});
                break;
            default:
                this.setState({ message: 'Some error occured'});
        }

    }

	render() {
			const data = [
				{
					value: 1,
					label: "Kurta",
				},
				{
					value: 2,
					label: "Kurta Plazo set",
				},
				{
					value: 3,
					label: "A Line Kurta",
				},
				{
					value: 4,
					label: "Kurta Plazo Dupatta set",
				},
			];
		return (
			<div className='container'>
				<div className='row'>
					<form onSubmit={this.onSubmit}>
						<div className='form-group'>
							<input
								type='text'
                                id='name'
                                name='name'
								placeholder='name'
								onChange={this.onTextChange}
							/>
							<input
								type='text'
                                id='desc'
                                name='desc'
								placeholder='desc'
								onChange={this.onTextChange}
							/>

							<input
								type='file'
								name='imgCollection'
								onChange={this.onFileChange}
								multiple
							/>
						</div>
						<div className='form-group'>
							<button className='btn btn-primary' type='submit'>
								Upload
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
