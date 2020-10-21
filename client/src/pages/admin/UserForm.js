import React, { PureComponent } from "react";
import axios from "axios";

class UserForm extends React.Component {
	constructor() {
		super();
		this.state = {
			recentImage: {},
			name: "",
			description: "",
			uploadedImageUrl: "",
			uploadedImage: {},
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.fetchRecent();
	}

	fetchRecent = () => {
		axios
			.get("http://localhost:3001/items/recent")
			.then((res) => {
				console.log(res.data);
				this.setState({ recentImage: res.data.image });
			})
			.catch((err) => alert("Error:", err));
	};

	uploadImage = () => {
		let formData = new FormData();
		formData.append("name", this.state.name);
		formData.append("description", this.state.description);
		formData.append("file", this.state.uploadedImage);

		axios
			.post("http://localhost:3001/items/insertItems", formData)
			.then((res) => {
				res.data.success
					? alert("File successfully uploaded")
					: alert("File already exists");
				this.fetchRecent();
			})
			.catch((err) => alert("Error:" + err));
	};

	onChange = (e) => {
		switch (e.target.name) {
			case "name":
				this.setState({ name: e.target.value });
				break;
			case "description":
				this.setState({ description: e.target.value });
				break;
			case "selectedFile":
				this.setState({
					selectedFile: [...this.state.selectedFile, ...e.target.files],
				});
				break;
			default:
				console.log("no name descibed");
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

		axios
			.post("http://localhost:3001/items/multiple", formData)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			uploadedImageUrl: URL.createObjectURL(e.target.files[0]),
			uploadedImage: e.target.files[0],
		});
	};

	render() {
		const { name, description, selectedFile } = this.state;
		return (
			<div className='UploadPage'>
				<div className='Recent'>
					<p className='Recent__Title'>Recently uploaded file</p>
					<div className='ImageBox'>
						<div className='CaptionBox'>
							<p className='ImageBox__Caption'>Caption</p>
							<span className='ImageBox__CaptionValue'>
								{this.state.recentImage.caption}
							</span>
						</div>

						<img
							src={
								"http://localhost:3001/items/image/" +
								this.state.recentImage.filename
							}
							alt='recent-image'
							className='Recent__Image'
						/>
					</div>
				</div>

				<div className='Upload'>
					<p className='Upload__Title'>Upload File</p>
					<div className='Upload__InputSection'>
						<input
							type='text'
							id='name'
							className='Upload__Caption'
							placeholder='Enter name...'
							onChange={(event) => this.setState({ name: event.target.value })}
							value={this.state.name}
						/>
						<input
							type='text'
							id='description'
							className='Upload__Caption'
							placeholder='Enter description...'
							onChange={(event) =>
								this.setState({ description: event.target.value })
							}
							value={this.state.description}
						/>
						<input
							type='file'
							className='Upload__Input'
							multiple
							id='file'
							name='file'
							onChange={this.handleChange}
						/>
					</div>

					{/* <img
						src={
							!this.state.uploadedImageUrl.trim()
								? Upload
								: this.state.uploadedImageUrl
						}
						alt='upload-image'
						className='Upload__Image'
					/> */}

					<button onClick={this.uploadImage} className='Upload__Button'>
						Upload
					</button>
				</div>
			</div>
			// <form onSubmit={this.onSubmit} enctype='multipart/form-data'>
			// 	<input type='text' name='name' value={name} onChange={this.onChange} />
			// 	<br />

			// 	<input
			// 		type='text'
			// 		name='description'
			// 		value={description}
			// 		onChange={this.onChange}
			// 	/>
			// 	<br />
			// 	<input
			// 		type='file'
			// 		name='selectedFile'
			// 		id='selectedFile'
			// 		multiple
			// 		onChange={this.onChange}
			// 	/>
			// 	<button type='submit'>Submit</button>
			// </form>
		);
	}
}

export default UserForm;
