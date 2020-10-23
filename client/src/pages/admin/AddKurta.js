import React from "react";
import Select from "react-select";
import axios from "axios";
const path = require("path");

// var upload = multer({ dest: "/client/public/uploads" });

class AddKurta extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedFile: null,
		};
	}

	onFileChange = (event) => {
		this.setState({ selectedFile: event.target.files[0] });
	};

	onFileUpload = () => {
		const formData = new FormData();
		formData.append(
			"myFile",
			this.state.selectedFile,
			this.state.selectedFile.name
		);

		console.log(this.state.selectedFile);
		// axios
		// 	.post("http://localhost:3001/uploadFile", formData)
		// 	.then((res) => console.log(res));
	};

	fileData = () => {
		if (this.state.selectedFile) {
			return (
				<div>
					<h2>File Details:</h2>
					<p>File Name: {this.state.selectedFile.name}</p>
					<p>File Type: {this.state.selectedFile.type}</p>
					<p>
						Last Modified:{" "}
						{this.state.selectedFile.lastModifiedDate.toDateString()}
					</p>
				</div>
			);
		} else {
			return (
				<div>
					<br />
					<h4>Choose before Pressing the Upload button</h4>
				</div>
			);
		}
	};

	Post = (e) => {
		e.preventDefault();
		const file = document.getElementById("inputGroupFile01").files;
		const formData = new FormData();

		formData.append("img", file[0]);

		console.log(formData);
		// fetch("http://localhost:3001/uploadImage", {
		// 	method: "POST",
		// 	body: formData,
		// }).then((r) => {
		// 	console.log(r);
		// });
		console.log(file[0]);
	};
	// componentDidMount() {
	// 	fetch("http://localhost:3001/routes/img_data")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			console.log(img);
	// 			var base64Flag = "data:image/jpeg;base64,";
	// 			var imageStr = this.arrayBufferToBase64(data.img.data.data);
	// 			this.setState({
	// 				img: base64Flag + imageStr,
	// 			});
	// 		});
	// }

	submitForm() {
		const formdata = new FormData();

		formdata.append("image");
		// axios
		// 	.post("http://localhost:3001/stats", {
		// 		method: "POST",
		// 		headers: {
		// 			"content-type": "multipart/form-data",
		// 		},
		// 		body: formdata,
		// 	})
		// 	.then((res) => console.log(res));
	}

	render() {
		return (
			<div>
				<h1>GeeksforGeeks</h1>
				<h3>File Upload using React!</h3>
				<div>
					<input type='file' onChange={this.onFileChange} />
					<button onClick={this.onFileUpload}>Upload!</button>
				</div>
				{this.fileData()}
			</div>
			// <div>
			// 	<form  enctype='multipart/form-data' onSubmit={this.submitForm}>
			// 		<div class='form-group'>
			// 			<input type='file' class='form-control-file' name='image' />
			// 			<input
			// 				type='text'
			// 				class='form-control'
			// 				placeholder='Category'
			// 				name='category'
			// 			/>
			// 			<input
			// 				type='submit'
			// 				value='Get me the stats!'
			// 				class='btn btn-default'
			// 				onClick={this.submitForm}
			// 			/>
			// 		</div>
			// 	</form>
			// </div>
			// <form
			// 	action='/uploadProfilePicture'
			// 	enctype='multipart/form-data'
			// 	method='POST'>
			// 	<span>Upload Profile Picture:</span>
			// 	<input type='file' name='mypic' required /> <br />
			// 	<input type='submit' value='submit' onSubmit = {this.onSubmit} />
			// </form>

			// <div>
	
		);
	}
}

export default AddKurta;
