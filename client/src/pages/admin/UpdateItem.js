import axios from "axios";
import React from "react";
import { Carousel } from "react-responsive-carousel";

class UpdateItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			imgCollection: "",
			name: "",
			desc: "",
			price: "",
			care: "",
			stock: "",
			color: "",
			category: "",
			message: "",
		};

		this.state = {
			selectedOption: " ",
			item: [],
		};

		this.onFileChange = this.onFileChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		console.log("the item id is", this.props.itemId);
		axios
			.get("http://localhost:3001/items/getItemById/" + this.props.itemId)
			.then(
				(res) => res.data.data
				// res.success === true
				// 	? res.data.data
				// 	: this.setState({ message: "No item with that Id was found" });
			)
			.then((data) => {
				console.log(data);
				this.setState({ name: data.name, selectedOption: data.category });
			});
	}

	onFileChange(e) {
		this.setState({ imgCollection: e.target.files });
	}

	onSubmit = (e) => {
		console.log("button clicked");
		var formData = new FormData();

		for (const key of Object.keys(this.state.imgCollection)) {
			formData.append("imgCollection", this.state.imgCollection[key]);
		}
		formData.append("name", this.state.name);
		formData.append("desc", this.state.desc);
		formData.append("price", this.state.price);
		formData.append("care", this.state.care);
		//formData.append("size", this.state.size);
		formData.append("stock", this.state.stock);
		formData.append("color", this.state.color);
		formData.append("category", this.state.selectedOption);

		axios
			.put("http://localhost:3001/items/updateItemById", formData)
			.then((res) => console.log(res));
	};

	handleChange = (event) => {
		console.log(event.target.value);
		event.preventDefault();
		switch (event.target.name) {
			case "name":
				this.setState({ ...this.state.item, name: event.target.value });
				break;
			case "desc":
				this.setState({ desc: event.target.value });
				break;
			case "price":
				this.setState({ price: event.target.value });
				break;
			case "care":
				this.setState({ care: event.target.value });
				break;
			case "stock":
				this.setState({ stock: event.target.value });
				break;
			case "color":
				this.setState({ color: event.target.value });
				break;
		}
	
	};

	categoryChange = (e) => {
		console.log(e.target.value);
		this.setState({
			selectedOption:  e.target.value,
		});
	};

	onSizeSelected = (e) => {
		e.preventDefault();
		e.target.style.backgroundColor = "#ABABAB";
		this.setState({ [e.target.name]: true });
	};

	getAllSizes() {
		let lists = [];
		if (this.state.s) lists.push("S");
		if (this.state.m) lists.push("M");
		if (this.state.l) lists.push("L");
		if (this.state.xl) lists.push("XL");
		if (this.state.xxl) lists.push("XXL");
		if (this.state.xxxl) lists.push("XXXL");
		return lists;
	}

	render() {
		const data = [
			"Kurta",
			"Kurta Plazo Set",
			"A Line Kurta",
			"Kurta Plazo Dupatta Set",
		];

		let cats = data.map((ex) => {
			return <option value={ex}> {ex}</option>;
		});
		if (this.state.item.length === 0) {
			return (
				<div class='loading-more'>
					<i class='icon_loading'></i>
					<a href='#'>Loading More</a>
				</div>
			);
		} else {
			console.log("category is", this.state.selectedOption);
			let images = this.state.item.imgCollection.map((img) => {
				return (
					// <div class='pt active' data-imgbigurl={img}>
					// 	<img src={img} style={{width:"100%", height: "700px"}} alt='' onClick={this.onImageClicked(img)} />
					// </div>
					<div style={{ height: "600px" }}>
						<img src={img} />
					</div>
				);
			});

			let sizes = this.state.item.size.map((st) => {
				return (
					<button
						style={{
							backgroundColor: "#e7e7e7",
							border: " 2px solid #e7e7e7",
							width: "50px",
							height: "50px",
						}}
						value={st}>
						{" "}
						{st}
					</button>
				);
			});

			return (
				<div>
					<div class='breacrumb-section'>
						<div class='container'>
							<div class='row'>
								<div class='col-lg-12'>
									<div class='breadcrumb-text product-more'>
										<a href='./home.html'>
											<i class='fa fa-home'></i> Admin Login
										</a>
										<a>Update Item </a>
										<span>Detail</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section class='product-shop spad page-details'>
						<div class='container'>
							<div class='row'>
								<div class='col-lg-12'>
									<div class='row'>
										<div class='col-lg-6' style={{ height: "700px" }}>
											<Carousel
												autoPlay
												interval='5000'
												style={{ height: "700px" }}>
												{images}
											</Carousel>
										</div>
										<div class='col-lg-6'>
											<div class='product-details'>
												<div class='pd-color'>
													<h6> Upload New Images:</h6>
													<input
														type='file'
														multiple
														id='imgCollection'
														name='imgCollection'
														onChange={this.onFileChange}
														class='form-control'
													/>
													<br />
													<h6>Category:</h6>
													<select
														value={this.state.selectedOption} // set selected value
														// set list of the data
														onChange={this.categoryChange} // assign on Change function
														class='form-control'>
														{cats}
													</select>
													<br />

													<h6> Name:</h6>
													{/* <input
														type='text'
														onChange={this.handleChange}
														class='form-control'
														name='name'
														value={this.state.name}></input> */}
                                                        <input type="text" value={this.state.name} onChange={(e) => {this.setState({ name: e.target.value}) }}/>
													<br />
													<h6> Description:</h6>
													<textarea
														onChange={this.handleChange}
														height='120px'
														class='form-control'
														name='description'
														value={this.state.item.desc}></textarea>
													<br />
													<h6> Price (Rs):</h6>
													<input
														type='number'
														onChange={this.handleChange}
														class='form-control'
														name='price'
														value={this.state.item.price}></input>
													<br />
													<h6> Color:</h6>
													<input
														type='text'
														onChange={this.handleChange}
														class='form-control'
														name='color'
														value={this.state.item.color}></input>
													<br />
													<h6>Sizes Available :</h6>
													<ul>{sizes}</ul>
													<br />
													<h6> Enter new sizes</h6>
													<button
														style={{
															backgroundColor: "#e7e7e7",
															border: " 2px solid #e7e7e7",
															width: "50px",
															height: "50px",
														}}
														onClick={this.onSizeSelected}
														value='S'
														id='s'
														name='s'>
														{" "}
														S
													</button>
													{"  "}
													<button
														style={{
															backgroundColor: "#e7e7e7",
															border: " 2px solid #e7e7e7",
															width: "50px",
															height: "50px",
														}}
														onClick={this.onSizeSelected}
														value='M'
														id='m'
														name='m'>
														{" "}
														M
													</button>
													{"  "}
													<button
														style={{
															backgroundColor: "#e7e7e7",
															border: " 2px solid #e7e7e7",
															width: "50px",
															height: "50px",
														}}
														onClick={this.onSizeSelected}
														value='L'
														id='l'
														name='l'>
														{" "}
														L
													</button>
													{"  "}
													<button
														style={{
															backgroundColor: "#e7e7e7",
															border: " 2px solid #e7e7e7",
															width: "50px",
															height: "50px",
														}}
														onClick={this.onSizeSelected}
														value='XL'
														id='xl'
														name='xl'>
														{" "}
														XL
													</button>
													{"  "}
													<button
														style={{
															backgroundColor: "#e7e7e7",
															border: " 2px solid #e7e7e7",
															width: "50px",
															height: "50px",
														}}
														onClick={this.onSizeSelected}
														value='XXL'
														id='xxl'
														name='xxl'>
														{" "}
														XXL
													</button>
													{"  "}
													<button
														style={{
															backgroundColor: "#e7e7e7",
															border: " 2px solid #e7e7e7",
															width: "50px",
															height: "50px",
														}}
														onClick={this.onSizeSelected}
														value='XXXL'
														id='xxxl'
														name='xxxl'>
														{" "}
														XXXL
													</button>
													<br />
													<h6> Items in Stock:</h6>
													<input
														type='number'
														onChange={this.handleChange}
														class='form-control'
														name='stock'
														value={this.state.item.stock}></input>
												</div>
												<button
													onClick={this.onSubmit}
													class='form-control'
													style={{
														backgroundColor: "#E7AB3C",
														color: "white",
													}}>
													Update Item
												</button>
											</div>
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
}

export default UpdateItem;
