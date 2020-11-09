import React from "react";
import axios from "axios";
import Details from "./Details";
import ReturnItems from "./ReturnItems";

class Kurta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      showDetails: false,
      itemId: "",
      colors: [],
      selectedColor: "",
      selectedSort: "",
      selectedShow: "",
      displayResult: "",
      category: "",
    };

    // this.state = {
    // 	s: false,
    // 	m: false,
    // 	l: false,
    // 	xl: false,
    // 	xxl: false,
    // 	xxxl: false,
    // };

    this.colorSelected = this.colorSelected.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  componentDidMount() {
	let colorLists = [];
	console.log(this.state.selectedSort, this.state.displayResult);
    this.state.selectedSort.length > 0 || this.state.displayResult.length > 0
      ? this.getData()
      : axios
          .get("http://localhost:3001/items/getItemByCategory/" + "Kurta")
          .then((res) => {
            if (res.data.success === true) {
              this.setState({ limit: res.data.data.length });
              res.data.data.map((ex) => {
                colorLists.push(ex.color);
              });
              this.setState({
                item: res.data.data,
                displayResult: res.data.data.length,
                colors: colorLists,
              });
            } else {
              alert("Some error occured ", res.error);
            }
          })
          .catch((err) => console.log("Some error occured", err));
  }

  getData() {
    console.log(
      "the params are",
      this.state.selectedSort,
      this.state.displayResult
    );
    axios
      .get("http://localhost:3001/items/getSortedItems/" + "Kurta", {
        params: {
          sort: this.state.selectedSort,
          limit: this.state.displayResult,
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          this.setState({ limit: res.data.data.length, item: res.data.data });
        } else {
          alert("Some error occured ", res.error);
        }
      })
      .catch((err) => console.log("Some error occured", err));
  }

  imageClick = (id) => {
    this.setState({
      showDetails: true,
      itemId: id,
	});
	console.log('image clicked');
  };

  handleSort = (e) => {
    e.preventDefault();
    this.setState({
      selectedSort: e.target.value,
	});
	this.getData();
	
  };

  handleShow = (e) => {
    this.setState({
      selectedShow: e.target.value,
      displayResult: e.target.value,
	});
	this.getData();
	
  };

  //   onSizeSelected = (e) => {
  //     e.preventDefault();
  //     e.target.style.backgroundColor = "#ABABAB";
  //     this.setState({ [e.target.name]: true });
  //   };

  colorSelected = (e) => {
    console.log("color", e);
    this.setState({ selectedColor: e });
  };

  render() {

	

    if (this.state.showDetails) {
      return <Details itemId={this.state.itemId} />;
    } else {
      if (this.state.item.length === 0) {
        return (
          <div class="loading-more">
            <i class="icon_loading"></i>
            <a href="#">Loading More</a>
          </div>
        );
      } else {
        let colors = this.state.colors.map((color) => {
          return (
            <div class="cs-item">
              <div
                style={{
                  backgroundColor: color,
                  width: "30px",
                  height: "30px",
                  mozBorderRadius: "50px",
                  webkitBorderRadius: "50px",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                onClick={() => this.colorSelected(color)}
              />
            </div>
          );
        });

        let itemLists = this.state.item;
        let items = itemLists.map((it) => {
          return (
            <div class="col-lg-4 col-sm-6">
              <div class="product-item">
                <div class="pi-pic">
                  <a href={it.id}>
                    <img
                      src={it.imgCollection[0]}
                      alt=""
                      onClick={() => this.imageClick(it._id)}
                    />
                  </a>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">{it.category}</div>
                  <a href={it.id}>
                    <h5>
                      {" "}
                      <label onClick={() => this.imageClick(it._id)}>
                        {it.name}
                      </label>
                    </h5>
                  </a>
                  <div class="product-price">Rs. {it.price}</div>
                </div>
              </div>
            </div>
          );
        });

        return (
          <div>
            <div class="breacrumb-section">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="breadcrumb-text">
                      <a href="#">
                        <i class="fa fa-home"></i> Home
                      </a>
                      <span>Kurta</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section class="product-shop spad">
              <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                    <div class="filter-widget">
                      <h4 class="fw-title">Price</h4>
                      <div class="filter-range-wrap">
                        <div class="range-slider">
                          <div class="price-input">
                            <input type="text" id="minamount" />
                            <input type="text" id="maxamount" />
                          </div>
                        </div>
                        <div
                          class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                          data-min="33"
                          data-max="98"
                        >
                          <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                          <span
                            tabindex="0"
                            class="ui-slider-handle ui-corner-all ui-state-default"
                          ></span>
                          <span
                            tabindex="0"
                            class="ui-slider-handle ui-corner-all ui-state-default"
                          ></span>
                        </div>
                      </div>
                      <a href="#" class="filter-btn">
                        Filter
                      </a>
                    </div>
                    <div class="filter-widget">
                      <h4 class="fw-title">Color</h4>
                      <div class="fw-color-choose">{colors}</div>
                    </div>
                    <br />
                    <div class="filter-widget">
                      <h4 class="fw-title">Size</h4>
                      <div>
                        <button
                          style={{
                            backgroundColor: "#e7e7e7",
                            border: " 2px solid #e7e7e7",
                            width: "50px",
                            height: "50px",
                          }}
                          onClick={this.onSizeSelected}
                          value="S"
                          id="s"
                          name="s"
                        >
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
                          value="M"
                          id="m"
                          name="m"
                        >
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
                          value="L"
                          id="l"
                          name="l"
                        >
                          {" "}
                          L
                        </button>
                        {"  "}
                        <br />
                        <br />
                        <button
                          style={{
                            backgroundColor: "#e7e7e7",
                            border: " 2px solid #e7e7e7",
                            width: "50px",
                            height: "50px",
                          }}
                          onClick={this.onSizeSelected}
                          value="XL"
                          id="xl"
                          name="xl"
                        >
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
                          value="XXL"
                          id="xxl"
                          name="xxl"
                        >
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
                          value="XXXL"
                          id="xxxl"
                          name="xxxl"
                        >
                          {" "}
                          XXXL
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-9 order-1 order-lg-2">
                    <div class="product-show-option">
                      <div class="row">
                        <div class="col-lg-7 col-md-7">
                          <div class="select-option">
                            <select
                              class="sorting form-control"
                              value={this.state.selectedOption}
                              onChange={this.handleSort}
                            >
                              <option selected enabled="false">
                                Default Sorting
                              </option>
                              <option value="1"> Price (Low to High)</option>
                              <option value="-1"> Price (High to Low)</option>
                            </select>
                            <select
                              class="p-show form-control"
                              value={this.state.selectedshow}
                              onChange={this.handleShow}
                            >
                              <option selected enabled="false">
                                Show All
                              </option>
                              <option value="10"> 10</option>
                              <option value="20">20</option>
                              <option value="30"> 30 </option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-5 col-md-5 text-right">
                          <p>Showing {this.state.displayResult} product(s)</p>
                        </div>
                      </div>
                    </div>
                    <div class="product-list">
                      <div class="row">{items}</div>
                    </div>

                    <div class="loading-more">
                      <i class="icon_loading"></i>
                      <a href="#">Loading More</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <script src="js/jquery-3.3.1.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/jquery-ui.min.js"></script>
            <script src="js/jquery.countdown.min.js"></script>
            <script src="js/jquery.nice-select.min.js"></script>
            <script src="js/jquery.zoom.min.js"></script>
            <script src="js/jquery.dd.min.js"></script>
            <script src="js/jquery.slicknav.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/main.js"></script>
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

export default Kurta;
