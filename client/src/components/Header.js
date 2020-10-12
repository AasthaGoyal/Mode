import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<div>
				<header className='header-section'>
					<div className='header-top'>
						<div className='container'>
							<div className='ht-left'>
								<div className='mail-service'>
									<i className=' fa fa-envelope'></i>
									202,Udhyog vihar phase 1,Gurgaon(Haryana)
								</div>
								<div className='phone-service'>
									<i className=' fa fa-phone'></i>
									9910991208
								</div>
							</div>
							<div className='ht-right'>
								
									<NavLink
										exact
										className='login-panel'
										activeClassName='is-active'
										to='/Login'>
										<i className='fa fa-user'></i>Admin Login
									</NavLink>
								
								<div className='top-social'>
									<a href='https://www.facebook.com/modeZara6/'>
										<i className='ti-facebook'></i>
									</a>

									<a href='#'>
										<i className='ti-linkedin'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='inner-header'>
							<div className='row'>
								<div className='col-lg-2 col-md-2'>
									<div className='logo'>
										<a href='./index.html'>
											<img
												src='img/full_logo.jpeg'
												alt=''
												width='88'
												height='53'
											/>
											{/* <img
												src='img/logo_image.jpeg'
												alt=''
												width='53'
												height='63'
											/>
											<img
												src='img/logo_name.jpeg'
												alt=''
												width='65'
												height='63'
											/> */}
										</a>
									</div>
								</div>
								<div className='col-lg-7 col-md-7'>
									<div className='advanced-search'>
										<button type='button' className='category-btn'>
											All Categories
										</button>
										<div className='input-group'>
											<input type='text' placeholder='What do you need?' />
											<button type='button'>
												<i className='ti-search'></i>
											</button>
										</div>
									</div>
								</div>
								<div className='col-lg-3 text-right col-md-3'>
									<ul className='nav-right'>
										<li className='heart-icon'>
											<a href='#'>
												<label className='input'>Your saved searches</label>
												<i className='icon_heart_alt'></i>
												<span>1</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className='nav-item'>
						<div className='container'>
							<nav className='nav-menu mobile-menu'>
								<ul>
									<li className='active'>
										<NavLink
											exact
											className='navvar-item'
											activeClassName='is-active'
											to='/Home'>
											Home
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											className='navvar-item'
											activeClassName='is-active'
											to='/Kurta'>
											Kurta
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											className='navvar-item'
											activeClassName='is-active'
											to='/KurtaPlazo'>
											Kurta Plazo
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											className='navvar-item'
											activeClassName='is-active'
											to='/ALineKurta'>
											A Line Kurta
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											className='navvar-item'
											activeClassName='is-active'
											to='/Dupatta'>
											Dupatta Set
										</NavLink>
									</li>
									<li>
										<NavLink
											exact
											className='navvar-item'
											activeClassName='is-active'
											to='/ContactUs'>
											Contact Us
										</NavLink>
									</li>
								</ul>
							</nav>
							<div id='mobile-menu-wrap'></div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
