import React from "react";
import Dropdown from "./Dropdown";
import axios from "axios";

class AddNewItem extends React.Component {
	constructor(props) {
		super(props);

		this.onFileChange = this.onFileChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			imgCollection: "",
			messsage: "",
			name: "",
            desc: "",
            code: "",
            price: "",
            care: "",
            size: "",
            stock: ""
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
        formData.append("code", this.state.code );
        formData.append("price", this.state.price);
        formData.append("care", this.state.care);
        formData.append("size", this.state.size);
        formData.append("stock", this.state.stock);

		axios
			.post("http://localhost:3001/api/upload-images", formData, {})
			.then((res) => {
				console.log(res.data);
			});
	}

	onTextChange = (event) => {
		event.preventDefault();
		switch (event.target.name) {
			case "name":
				this.setState({ name: event.target.value });
				break;
			case "desc":
				this.setState({ desc: event.target.value });
                break;
            case "code":
                this.setState({ code: event.target.value});
                break;
            case "price":
                this.setState({ price: event.target.value});
                break;
            case "care":
                this.setState({ care: event.target.value});
                break;
            case "size":
                this.setState({ size: event.target.value});
                break;
            case "stock":
                this.setState({ stock: event.target.value});
                break;
			default:
				this.setState({ message: "Some error occured" });
		}
    }
    
	render() {
		return (
			<div>
				<div className='breacrumb-section'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='breadcrumb-text'>
									<a href='#'>
										<i className='fa fa-home'></i> Admin Login
									</a>
									<span>Add New Item</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='register-login-section spad'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6 offset-lg-3'>
								<div className='register-form'>
									<h2>Add New Item</h2>
									<form onSubmit={this.onSubmit}>
										<div className='group-input'>
											<label for='category'>Choose category </label>
											<Dropdown />
										</div>

										<div className='group-input'>
											<label for='name'>Item Image (Multiple) </label>
											<input
												type='file'
												multiple
												id='imgCollection'
												name='imgCollection'
												onChange={this.onFileChange}
											/>
										</div>
										<div className='group-input'>
											<label for='name'>Item name </label>
											<input
												type='text'
												id='name'
												name='name'
												onChange={this.onTextChange}
											/>
										</div>
										<div className='group-input'>
											<label for='desc'>Description </label>
											<input
												type='text'
												id='desc'
												name='desc'
												onChange={this.onTextChange}
											/>
										</div>
										<div className='group-input'>
											<label for='code'>Code </label>
											<input
												type='text'
												id='code'
												name='code'
												onChange={this.onTextChange}
											/>
										</div>
										<div className='group-input'>
											<label for='price'>Price (Rs) *</label>
											<input
												type='Number'
												id='price'
												name='price'
												onChange={this.onTextChange}
											/>
										</div>
										<div className='group-input'>
											<label for='care'>Care </label>
											<input
												type='text'
												id='care'
												name='care'
												onChange={this.onTextChange}
											/>
										</div>
										<div className='group-input'>
											<label for='size'>
												Sizes available (separated by ',')
											</label>
											<input
												type='text'
												id='size'
												name='size'
												onChange={this.onTextChange}
											/>
										</div>

										<div className='group-input'>
											<label for='stock'>Stock Limit</label>
											<input
												type='Number'
												id='stock'
												name='stock'
												onChange={this.onTextChange}
											/>
										</div>

										<button
											type='submit'
											className='site-btn register-btn'
											onClick={this.onSubmit}>
											Add item
										</button>
									</form>
									<div className='switch-login'>
										<a href='./login.html' className='or-login'>
											Logout
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddNewItem;
