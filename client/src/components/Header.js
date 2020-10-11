import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<div>
				<header class='header-section'>
					<div class='header-top'>
						<div class='container'>
							<div class='ht-left'>
								<div class='mail-service'>
									<i class=' fa fa-envelope'></i>
									202,Udhyog vihar phase 1,Gurgaon(Haryana)
								</div>
								<div class='phone-service'>
									<i class=' fa fa-phone'></i>
									9910991208
								</div>
							</div>
							<div class='ht-right'>
								<a href='#' class='login-panel'>
									<i class='fa fa-user'></i>Admin Login
								</a>

								<div class='top-social'>
									<a href='https://www.facebook.com/modeZara6/'>
										<i class='ti-facebook'></i>
									</a>

									<a href='#'>
										<i class='ti-linkedin'></i>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class='container'>
						<div class='inner-header'>
							<div class='row'>
								<div class='col-lg-2 col-md-2'>
									<div class='logo'>
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
								<div class='col-lg-7 col-md-7'>
									<div class='advanced-search'>
										<button type='button' class='category-btn'>
											All Categories
										</button>
										<div class='input-group'>
											<input type='text' placeholder='What do you need?' />
											<button type='button'>
												<i class='ti-search'></i>
											</button>
										</div>
									</div>
								</div>
								<div class='col-lg-3 text-right col-md-3'>
									<ul class='nav-right'>
										<li class='heart-icon'>
											<a href='#'>
												<label class='input'>Your saved searches</label>
												<i class='icon_heart_alt'></i>
												<span>1</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class='nav-item'>
						<div class='container'>
							<nav class='nav-menu mobile-menu'>
								<ul>
									<li class='active'>
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
