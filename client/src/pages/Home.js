import React from "react";
import Details from "./Details";
import axios from "axios";
import ImageSlider from './ImageSlider';

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			kurta: true,
			kurtaPlazo: false,
			aLine: false,
			dupatta: false,
			item: [],
			showDetails: false,
			itemId: "",
		};
	}

	componentDidMount() {
		console.log("value is", this.state.kurta);
		axios
			.get("http://localhost:3001/items/getItemByCategory/" + "Kurta")
			.then((res) => {
				res.data.success === true
					? this.setState({ item: res.data.data })
					: alert("Some error occured ", res.error);
			})
			.catch((err) => console.log("Some error occured", err));
	}

	onChange = (e) => {
		e.preventDefault();

		if (this.state.kurta) {
			axios
				.get("http://localhost:3001/items/getItemByCategory/" + "Kurta")
				.then((res) => {
					res.data.success === true
						? this.setState({ item: res.data.data })
						: alert("Some error occured ", res.error);
				})
				.catch((err) => console.log("Some error occured", err));
		} else if (this.state.kurtaPlazo) {
			axios
				.get(
					"http://localhost:3001/items/getItemByCategory/" + "Kurta Plazo Set"
				)
				.then((res) => {
					res.data.success === true
						? this.setState({ item: res.data.data })
						: alert("Some error occured ", res.error);
				})
				.catch((err) => console.log("Some error occured", err));
		} else if (this.state.aLine) {
			axios
				.get("http://localhost:3001/items/getItemByCategory/" + "A Line Kurta")
				.then((res) => {
					res.data.success === true
						? this.setState({ item: res.data.data })
						: alert("Some error occured ", res.error);
				})
				.catch((err) => console.log("Some error occured", err));
		} else if (this.state.dupatta) {
			axios
				.get(
					"http://localhost:3001/items/getItemByCategory/" +
						"Kurta Plazo Dupatta Set"
				)
				.then((res) => {
					res.data.success === true
						? this.setState({ item: res.data.data })
						: alert("Some error occured ", res.error);
				})
				.catch((err) => console.log("Some error occured", err));
		}
	};
	imageClick = (id) => {
		console.log(id);
		this.setState({
			showDetails: true,
			itemId: id,
		});
	};

	render() {
		if (this.state.showDetails) {
			return <Details itemId={this.state.itemId} />;
		} else {
			if (this.state.item.length === 0) {
				return (
					<div class='loading-more'>
						<i class='icon_loading'></i>
						<a href='#'>Loading More</a>
					</div>
				);
			} else {
				let itemLists = this.state.item;
				let items = itemLists.map((it) => {
					console.log(it);
					return (
						<div class='product-item'>
							<div class='pi-pic'>
								<a href={it.id}>
									<img
										src={it.imgCollection[0]}
										alt=''
										onClick={() => this.imageClick(it._id)}
									/>
								</a>

								<ul>
									<li class='w-icon active'>
										<a href='#'>
											<i class='icon_bag_alt'></i>
										</a>
									</li>

									<li class='w-icon'>
										<a href='#'>
											<i class='fa fa-random'></i>
										</a>
									</li>
								</ul>
							</div>
							<div class='pi-text'>
								<div class='catagory-name'>{it.category}</div>
								<a href='#'>
									<h5>{it.name}</h5>
								</a>
								<div class='product-price'>Rs. {it.price}</div>
							</div>
						</div>
					);
				});

				return (
					<div>
						<section class='hero-section'>
							<div class='hero-items owl-carousel'>
								<div
									class='single-hero-items set-bg'
									width=''
									data-setbg='img/01.png'>
									<div class='container'>
										<div class='row'>
											<div class='col-lg-5'>
												<span>Design for everyone</span>
												<h1>Kurta Plazo </h1>
												<p style={{ color: "#000000" }}>
													We have the best designs for you that would suit your
													needs{" "}
												</p>
												<a href='#' class='primary-btn'>
													See our collection
												</a>
											</div>
										</div>
									</div>
								</div>
								<div class='single-hero-items set-bg' data-setbg='img/02.png'>
									<div class='container'>
										<div class='row'>
											<div class='col-lg-5'>
												<span>See our specials</span>
												<h1>Kurtas </h1>
												<p style={{ color: "white" }}>
													Special collection for special occassions. We have
													fashionable designs for special occasions to meet your
													needs.{" "}
												</p>
												<a href='#' class='primary-btn'>
													See our specials
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						<div class='banner-section spad'>
							<div class='container-fluid'>
								<div class='row'>
									<div class='col-lg-4'>
										<div class='single-banner'>
											<img
												src='img/banner_1.jpeg'
												alt=''
												width='570'
												height='320'
											/>
											<div class='inner-text'>
												<h4>Kurta Plazo</h4>
											</div>
										</div>
									</div>
									<div class='col-lg-4'>
										<div class='single-banner'>
											<img
												src='img/banner_2.jpg'
												alt=''
												width='570'
												height='320'
											/>
											<div class='inner-text'>
												<h4>A Line Kurta</h4>
											</div>
										</div>
									</div>
									<div class='col-lg-4'>
										<div class='single-banner'>
											<img
												src='img/banner_3.jpg'
												alt=''
												width='570'
												height='320'
											/>
											<div class='inner-text'>
												<h4>Dupatta set</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<section class='women-banner spad'>
							<div class='container-fluid'>
								<div class='row'>
									<div class='col-lg-3'>
										<div
											class='product-large set-bg'
											style={{ backgroundImage: "url('img/001.jpeg')" }}>
											<h2 style={{ color: "black" }}>Women’s</h2>
											<a href='#' style={{ color: "black" }}>
												Discover More
											</a>
										</div>
									</div>

									<div class='col-lg-8 offset-lg-1'>
										<div class='filter-control'>
											<ul>
												<li
													className={this.state.kurta ? "active" : null}
													name='kurta'
													onClick={(e) =>
														this.setState({
															kurta: true,
															kurtaPlazo: false,
															aLine: false,
															dupatta: false,
														})
													}>
													Kurta	
												</li>
												<li
													className={this.state.kurtaPlazo ? "active" : null}
													onClick={this.onChange}>
													{/* // onClick={(e) =>
													// 	this.setState({
													// 		kurtaPlazo: true,
													// 		kurta: false,
													// 		aLine: false,
													// 		dupatta: false,
													// 	})
													// }> */}
													Kurta Plazo
												</li>
												<li
													className={this.state.aLine ? "active" : null}
													onClick={(e) =>
														this.setState({
															aLine: true,
															kurta: false,
															kurtaPlazo: false,
															dupatta: false,
														})
													}>
													A Line Kurta
												</li>
												<li
													className={this.state.dupatta ? "active" : null}
													onClick={(e) =>
														this.setState({
															dupatta: true,
															kurta: false,
															kurtaPlazo: false,
															aLine: false,
														})
													}>
													Kurta Plazo Dupatta set
												</li>
											</ul>
										</div>

										This is slider
									</div>
								</div>
							</div>
						</section>

						<section class='latest-blog spad'>
							<div class='container'>
								<div class='benefit-items'>
									<div class='row'>
										<div class='col-lg-4'>
											<div class='single-benefit'>
												<div class='sb-icon'>
													<img src='img/icon-1.png' alt='' />
												</div>
												<div class='sb-text'>
													<h6>Cheap Shipping</h6>
													<p>Locan and International shipping</p>
												</div>
											</div>
										</div>
										<div class='col-lg-4'>
											<div class='single-benefit'>
												<div class='sb-icon'>
													<img src='img/icon-2.png' alt='' />
												</div>
												<div class='sb-text'>
													<h6>Delivery On Time</h6>
													<p>If good have prolems</p>
												</div>
											</div>
										</div>
										<div class='col-lg-4'>
											<div class='single-benefit'>
												<div class='sb-icon'>
													<img src='img/icon-1.png' alt='' />
												</div>
												<div class='sb-text'>
													<h6>Secure Payment</h6>
													<p>100% secure payment</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						<div class='instagram-photo'>
							<div
								class='insta-item set-bg'
								style={{ backgroundImage: "url('img/inst_1.jpg')" }}>
								<div class='inside-text'>
									<i class='ti-instagram'></i>
									<h5>
										<a href='#'>colorlib_Collection</a>
									</h5>
								</div>
							</div>
							<div
								class='insta-item set-bg'
								style={{ backgroundImage: "url('img/inst_2.jpg')" }}>
								<div class='inside-text'>
									<i class='ti-instagram'></i>
									<h5>
										<a href='#'>colorlib_Collection</a>
									</h5>
								</div>
							</div>
							<div
								class='insta-item set-bg'
								style={{ backgroundImage: "url('img/inst_7.jpg')" }}>
								<div class='inside-text'>
									<i class='ti-instagram'></i>
									<h5>
										<a href='#'>colorlib_Collection</a>
									</h5>
								</div>
							</div>
							<div
								class='insta-item set-bg'
								style={{ backgroundImage: "url('img/inst_4.jpeg')" }}>
								<div class='inside-text'>
									<i class='ti-instagram'></i>
									<h5>
										<a href='#'>colorlib_Collection</a>
									</h5>
								</div>
							</div>
							<div
								class='insta-item set-bg'
								style={{ backgroundImage: "url('img/inst_5.jpg')" }}>
								<div class='inside-text'>
									<i class='ti-instagram'></i>
									<h5>
										<a href='#'>colorlib_Collection</a>
									</h5>
								</div>
							</div>
							<div
								class='insta-item set-bg'
								style={{ backgroundImage: "url('img/inst_6.jpg')" }}>
								<div class='inside-text'>
									<i class='ti-instagram'></i>
									<h5>
										<a href='#'>colorlib_Collection</a>
									</h5>
								</div>
							</div>
						</div>
					</div>
				);
			}
		}
	}
}

export default Home;
