import React from "react";
import axios from "axios";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			password: "",
			cpassword: "",
			message: "",
		};
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		if (this.state.password != this.state.cpassword) {
			this.setState({ message: "The passwords dont match" });
		} else {
			let data = {
				name: this.state.name && this.state.name,
				email: this.state.email && this.state.email,
				password: this.state.password,
			};

			axios.post("http://localhost:3001/users/addUser", data).then((res) => {
				if (res.status === 200) {
					console.log(res);
					this.setState({ message: "The user has been saved successfully" });
				} else {
					this.setState({ message: "Some error occured" + res.message });
				}
			});
		}
	}

	onChange(e) {
		e.preventDefault();
		const value = e.target.value;
		this.setState({
			...this.state,
			[e.target.name]: value,
		});
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
										<i className='fa fa-home'></i> Home
									</a>
									<span>Register</span>
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
									<h2>Register</h2>
									<form>
										<div className='group-input'>
											<label for='username'>Full Name*</label>
											<input
												type='text'
												id='name'
												name='name'
												onChange={this.onChange}
												value={this.state.name}
												required
											/>
										</div>
										<div className='group-input'>
											<label for='username'>Username or email address *</label>
											<input
												type='text'
												id='email'
												name='email'
												onChange={this.onChange}
												value={this.state.email}
												required
											/>
										</div>
										<div className='group-input'>
											<label for='pass'>Password *</label>
											<input
												type='password'
												id='password'
												name='password'
												onChange={this.onChange}
												value={this.state.password}
												required
											/>
										</div>
										<div className='group-input'>
											<label for='con-pass'>Confirm Password *</label>
											<input
												type='password'
												id='cpassword'
												name='cpassword'
												onChange={this.onChange}
												value={this.state.cpassword}
												required
											/>
										</div>
										<button
											type='submit'
											onClick={this.onSubmit}
											className='site-btn register-btn'>
											REGISTER
										</button>
									</form>
									<div className='switch-login'>
										<label style={{ color: "red", fontWeight: "bold" }}>
											{" "}
											{this.state.message}
										</label>
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

export default Register;
