import React from "react";
import Select from "react-select";
import Dropdown from './Dropdown';

class AddKurta extends React.Component {
	constructor(props) {
		super(props);
		this.fileHandler = this.fileHandler.bind(this);
		this.state = {
            images: []
		};
		
	}

	

	fileHandler = (e) => {
		e.preventDefault();
		console.log(...e.target.value);
		this.setState({ images: [...this.state.images, ...e.target.files] });
	};

	render() {
		console.log(this.state.images);
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
									<span>Add Kurta</span>
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
									<form action='#'>
										<div className='group-input'>
											<label for='category'>Choose category </label>
											<Dropdown />
										</div>

										<div className='group-input'>
											<label for='name'>Item Image (Multiple) </label>
											<input
												type='file'
												multiple
												id='images'
												name='images'
												onChange={this.fileHandler}
											/>
										</div>
										<div className='group-input'>
											<label for='name'>Item name </label>
											<input type='text' id='username' />
										</div>
										<div className='group-input'>
											<label for='pass'>Price (Rs) *</label>
											<input type='text' id='pass' />
										</div>
										<div className='group-input'>
											<label for='con-pass'>
												Sizes available (separated by ',')
											</label>
											<input type='text' id='con-pass' />
										</div>
										<div className='group-input'>
											<label for='con-pass'>Stock limit</label>
											<input type='text' id='con-pass' />
										</div>
										<div className='group-input'>
											<label for='con-pass'>Description</label>
											<input type='text' id='con-pass' />
										</div>

										<button type='submit' className='site-btn register-btn'>
											Add item
										</button>
									</form>
									<div className='switch-login'>
										<a href='./login.html' className='or-login'>
											Or Login
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

export default AddKurta;
