import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import AddKurta from "../pages/admin/AddKurta";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "",
			username: "",
			pass: "",
			allow: false,
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		axios
			.get("http://localhost:3001/users/getUser", {
				params: {
					email: this.state.username,
					password: this.state.pass,
				},
			})
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
					this.setState({
						message: "Successfully logged in! Welcome " + res.data.user[0].name,
						allow: true,
					});
				} else if (res.status === 400) {
					this.setState({ message: "Invalid Username or Password! " });
				} else {
					this.setState({
						message: "Some error occured" + res.message,
					});
				}
			});
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
				<div className='register-login-section spad'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6 offset-lg-3'>
								<div className='login-form'>
									<h2>Login</h2>
									<form action='#'>
										<div className='group-input'>
											<label for='username'>Username or email address *</label>
											<input
												type='text'
												id='username'
												name='username'
												onChange={this.onChange}
											/>
										</div>
										<div className='group-input'>
											<label for='pass'>Password *</label>
											<input
												type='text'
												id='pass'
												name='pass'
												onChange={this.onChange}
											/>
										</div>
										<div className='group-input gi-check'>
											<div className='gi-more'>
												<NavLink
													exact
													className='or-login'
													activeClassName='is-active'
													to='/ForgetPassword'>
													Forget Password
												</NavLink>

												<NavLink
													exact
													className='forget-pass'
													activeClassName='is-active'
													to='/Register'>
													<i className='fa fa-user'></i>Create an account
												</NavLink>
											</div>
										</div>
										<button
											type='submit'
											className='site-btn login-btn'
											onClick={this.onSubmit}>
											Sign In
										</button>
									</form>
									<div className='switch-login'>
										<div className='switch-login'>
											<label style={{ color: "red", fontWeight: "bold" }}>
												{" "}
												{this.state.message}
											</label>
											<label>
												{this.state.allow ? (
													<NavLink
														exact
														className='or-login'
														activeClassName='is-active'
														to='/AddKurta'>
														Access Admin
													</NavLink>
												) : null}
											</label>
										</div>
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

export default Login;
