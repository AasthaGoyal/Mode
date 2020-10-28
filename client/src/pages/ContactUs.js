import React from "react";

class ContactUs extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();

    }

	render() {
		return (
			<div>
				<div class='breacrumb-section'>
					<div class='container'>
						<div class='row'>
							<div class='col-lg-12'>
								<div class='breadcrumb-text'>
									<a href='#'>
										<i class='fa fa-home'></i> Home
									</a>
									<span>Contact Us</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class='map spad'>
					<div class='container'>
						<div class='map-inner'>
							<iframe
								src='https://www.google.co.nz/maps/place/202,+Udyog+Vihar+Phase+V,+Phase+V,+Udyog+Vihar,+Sector+19,+Gurugram,+Haryana+122008,+India/@28.5002209,77.0832571,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1941325e7a6f:0xcf587c7cfed6380a!8m2!3d28.5002209!4d77.0854458'
								height='610'
								style={{ border: 0 }}
								allowfullscreen=''></iframe>
							<div class='icon'>
								<i class='fa fa-map-marker'></i>
							</div>
						</div>
					</div>
				</div>

				<section class='contact-section spad'>
					<div class='container'>
						<div class='row'>
							<div class='col-lg-5'>
								<div class='contact-title'>
									<h4>Contact Us</h4>
									<p>Feel free to contact us for any queries</p>
								</div>
								<div class='contact-widget'>
									<div class='cw-item'>
										<div class='ci-icon'>
											<i class='ti-location-pin'></i>
										</div>
										<div class='ci-text'>
											<span>Address:</span>
											<p>
												202, Udyog Vihar Phase V Phase V, Udyog Vihar, Sector 19
												Gurugram, Haryana 122008
											</p>
										</div>
									</div>
									<div class='cw-item'>
										<div class='ci-icon'>
											<i class='ti-mobile'></i>
										</div>
										<div class='ci-text'>
											<span>Phone:</span>
											<p>+91 9910991208</p>
										</div>
									</div>
									<div class='cw-item'>
										<div class='ci-icon'>
											<i class='ti-email'></i>
										</div>
										<div class='ci-text'>
											<span>Email:</span>
											<p>mgarg073@gmail.com</p>
										</div>
									</div>
								</div>
							</div>
							<div class='col-lg-6 offset-lg-1'>
								<div class='contact-form'>
									<div class='leave-comment'>
										<h4>Leave A Comment</h4>
										<p>
											Our staff will call back later and answer your questions.
										</p>
										<form action='#' class='comment-form'>
											<div class='row'>
												<div class='col-lg-6'>
													<input type='text' placeholder='Your name' />
												</div>
												<div class='col-lg-6'>
													<input type='text' placeholder='Your email' />
												</div>
												<div class='col-lg-12'>
													<textarea placeholder='Your message'></textarea>
													<button type='submit' class='site-btn' onClick={this.onSubmit}>
														Send message
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default ContactUs;
