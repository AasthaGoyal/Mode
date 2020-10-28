import React from "react";
import axios from "axios";
import Details from "./Details";

class KurtaPlazo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: [],
			showDetails: false,
			itemId: "",
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:3001/items/getItemByCategory/" + "Kurta Plazo set")
			.then((res) => {
				console.log(res);
				res.data.success === true
					? this.setState({ item: res.data.data })
					: alert("Some error occured ", res.error);
			})
			.catch((err) => console.log("Some error occured", err));
	}

	imageClick = (id) => {
		this.setState({
			showDetails: true,
			itemId: id,
		});
	};

	render() {
		console.log(this.state.showDetails);
		console.log(this.state.item);

		if (this.state.showDetails) {
			return <Details itemId={this.state.itemId} />;
		} else {
			console.log(this.state.item);
			if (this.state.item.length === 0) {
				return (
					<div class='loading-more'>
						<i class='icon_loading'></i>
						<a href='#'>Loading More</a>
					</div>
				);
			} else {
				let itemLists = this.state.item;
				let image = itemLists.map((it) => {
					return (
						<a href={it.id}>
							<img
								src={it.imgCollection[0]}
								alt=''
								onClick={() => this.imageClick(it._id)}
							/>
						</a>
					);
				});
				let name = itemLists.map((it) => {
					return (
						<a href={it.id}>
							<h5>
								{" "}
								<label onClick={() => this.imageClick(it._id)}>{it.name}</label>
							</h5>
						</a>
					);
				});
				let price = itemLists.map((it) => {
					return "Rs." + it.price;
				});
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
											<span>Kurta Plazo</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<section class='product-shop spad'>
							<div class='container'>
								<div class='row'>
									<div class='col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter'>
										<div class='filter-widget'>
											<h4 class='fw-title'>Price</h4>
											<div class='filter-range-wrap'>
												<div class='range-slider'>
													<div class='price-input'>
														<input type='text' id='minamount' />
														<input type='text' id='maxamount' />
													</div>
												</div>
												<div
													class='price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content'
													data-min='33'
													data-max='98'>
													<div class='ui-slider-range ui-corner-all ui-widget-header'></div>
													<span
														tabindex='0'
														class='ui-slider-handle ui-corner-all ui-state-default'></span>
													<span
														tabindex='0'
														class='ui-slider-handle ui-corner-all ui-state-default'></span>
												</div>
											</div>
											<a href='#' class='filter-btn'>
												Filter
											</a>
										</div>
										<div class='filter-widget'>
											<h4 class='fw-title'>Color</h4>
											<div class='fw-color-choose'>
												<div class='cs-item'>
													<input type='radio' id='cs-black' />
													<label class='cs-black' for='cs-black'>
														Black
													</label>
												</div>
												<div class='cs-item'>
													<input type='radio' id='cs-violet' />
													<label class='cs-violet' for='cs-violet'>
														Violet
													</label>
												</div>
												<div class='cs-item'>
													<input type='radio' id='cs-blue' />
													<label class='cs-blue' for='cs-blue'>
														Blue
													</label>
												</div>
												<div class='cs-item'>
													<input type='radio' id='cs-yellow' />
													<label class='cs-yellow' for='cs-yellow'>
														Yellow
													</label>
												</div>
												<div class='cs-item'>
													<input type='radio' id='cs-red' />
													<label class='cs-red' for='cs-red'>
														Red
													</label>
												</div>
												<div class='cs-item'>
													<input type='radio' id='cs-green' />
													<label class='cs-green' for='cs-green'>
														Green
													</label>
												</div>
											</div>
										</div>
										<div class='filter-widget'>
											<h4 class='fw-title'>Size</h4>
											<div class='fw-size-choose'>
												<div class='sc-item'>
													<input type='radio' id='s-size' />
													<label for='s-size'>s</label>
												</div>
												<div class='sc-item'>
													<input type='radio' id='m-size' />
													<label for='m-size'>m</label>
												</div>
												<div class='sc-item'>
													<input type='radio' id='l-size' />
													<label for='l-size'>l</label>
												</div>
												<div class='sc-item'>
													<input type='radio' id='xs-size' />
													<label for='xs-size'>xs</label>
												</div>
											</div>
										</div>
									</div>
									<div class='col-lg-9 order-1 order-lg-2'>
										<div class='product-show-option'>
											<div class='row'>
												<div class='col-lg-7 col-md-7'>
													<div class='select-option'>
														<select class='sorting'>
															<option value=''>Default Sorting</option>
														</select>
														<select class='p-show'>
															<option value=''>Show:</option>
														</select>
													</div>
												</div>
												<div class='col-lg-5 col-md-5 text-right'>
													<p>Show 01- 09 Of 36 Product</p>
												</div>
											</div>
										</div>
										<div class='product-list'>
											<div class='row'>
												<div class='col-lg-4 col-sm-6'>
													<div class='product-item'>
														<div class='pi-pic'>
															{image}

															{/* <div class='icon'>
															<i class='icon_heart_alt'></i>
														</div>
														<ul>
															<li class='w-icon active'>
																<a href='#'>
																	<i class='icon_bag_alt'></i>
																</a>
															</li>
															<li class='quick-view'>
																<a href='#'>+ Quick View</a>
															</li>
															<li class='w-icon'>
																<a href='#'>
																	<i class='fa fa-random'></i>
																</a>
															</li>
														</ul> */}
														</div>
														<div class='pi-text'>
															<div class='catagory-name'>Kurta</div>
															{name}
															<div class='product-price'>{price}</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class='loading-more'>
											<i class='icon_loading'></i>
											<a href='#'>Loading More</a>
										</div>
									</div>
								</div>
							</div>
						</section>
						<script src='js/jquery-3.3.1.min.js'></script>
						<script src='js/bootstrap.min.js'></script>
						<script src='js/jquery-ui.min.js'></script>
						<script src='js/jquery.countdown.min.js'></script>
						<script src='js/jquery.nice-select.min.js'></script>
						<script src='js/jquery.zoom.min.js'></script>
						<script src='js/jquery.dd.min.js'></script>
						<script src='js/jquery.slicknav.js'></script>
						<script src='js/owl.carousel.min.js'></script>
						<script src='js/main.js'></script>
					</div>
				);
			}
		}
		// let data = this.state.item && this.state.item.map((item) => {
		// 	let imagesrc = item.imgCollection.
		// 	console.log(imagesrc);
		// 	return (
		// 		<div>
		// 			<img
		// 				src={imagesrc}
		// 				alt='minion image '
		// 			/>
		// 			<label name='name' id='name'>
		// 				{" "}
		// 				{item.name}
		// 			</label>
		// 		</div>
		// 	);
		// });
		// console.log(data);
	}
}

export default KurtaPlazo;
