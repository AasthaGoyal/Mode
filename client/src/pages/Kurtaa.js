import React from "react";
import axios from "axios";
import Details from "./Details";




class Kurta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      itemId: "",
      colors: [],
      selectedColor: "",
      sort: "",
      selectedShow: "",
      limit: "",
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

  // componentDidMount() {
  //   let colorLists = [];
  //   axios
  //     .get("http://localhost:3001/items/getItemByCategory/" + "Kurta")
  //     .then((res) => {
  //       if (res.data.success === true) {
  //         this.setState({ limit: res.data.data.length });
  //         res.data.data.map((ex) => {
  //           colorLists.push(ex.color);
  //         });

  //         let uniqueColors = colorLists.filter((val, id, array) => {
  //           return array.indexOf(val) == id;
  //         });

  //         console.log("uc", uniqueColors);

  //         this.setState({
  //           item: res.data.data,
  //           displayResult: res.data.data.length,
  //           colors: uniqueColors,
  //         });
  //       } else {
  //         alert("Some error occured ", res.error);
  //       }
  //     })
  //     .catch((err) => console.log("Some error occured", err));
  // }

  // componentWillMount(oldProps, oldState) {
  //   // if(oldState.open == true  &&  this.state.selectedSort == false) {
  //   //   console.log("its open");
  //   // }
  //   console.log(this.state.selectedSort, this.state.displayResult);
  // }

  

  handleSort = (e) => {
    this.setState({
      sort: e.target.value,
    });
    console.log(e.target.value);
  };

  handleShow = (e) => {
    this.setState({
      selectedShow: e.target.value,
      limit: e.target.value,
    });
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

  onPriceChange = (e) => {
    console.log("prce ranfe is", e);
  };

  render() {
    console.log("inside render", this.state.sort, this.state.limit);
    if (this.state.showDetails) {
      return <Details itemId={this.state.itemId} />;
    } else {
      // let colors = this.state.colors.map((color) => {
      //   return (
      //     <div class="cs-item" style={{ width: "52px", height: "40px" }}>
      //       <div
      //         style={{
      //           backgroundColor: color,
      //           width: "30px",
      //           height: "30px",
      //           mozBorderRadius: "50px",
      //           webkitBorderRadius: "50px",
      //           borderRadius: "50px",
      //           cursor: "pointer",
      //         }}
      //         onClick={() => this.colorSelected(color)}
      //       />
      //     </div>
      //   );
      // });

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

                 

                    <button
                      style={{ border: "none" }}
                      onClick={this.onPriceChange}
                      class="filter-btn"
                    >
                      Filter
                    </button>
                  </div>
                  <div class="filter-widget">
                    <h4 class="fw-title">Color</h4>
                    <div>colors</div>
                    {/* <div class="fw-color-choose">{colors}</div> */}
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
                            <option selected value="100" enabled="false">
                              Show All
                            </option>
                            <option value="10"> 10</option>
                            <option value="20">20</option>
                            <option value="30"> 30 </option>
                          </select>
                        </div>
                      </div>
                      <div class="col-lg-5 col-md-5 text-right">
                        <p>Showing {this.state.limit} product(s)</p>
                      </div>
                    </div>
                  </div>
                  <Data
                    selectedSort={this.state.sort}
                    selectedLimit={this.state.limit}
                  />

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

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: [] };
    console.log(
      "inside constrictor",
      this.props.selectedSort,
      this.props.selectedLimit
    );
  }

  componentDidMount() {
    if (this.props.selectedSort) {
      axios
        .get("http://localhost:3001/items/getSortedItems/" + "Kurta", {
          params: {
            sort: this.props.selectedSort,
            limit: this.props.selectedLimit || "100",
          },
        })
        .then((res) => {
          if (res.data.success === true) {
            this.setState({ item: res.data.data });
          } else {
            alert("Some error occured ", res.error);
          }
        })
        .catch((err) => console.log("Some error occured", err));
    } else {
      axios
        .get("http://localhost:3001/items/getItemByCategory/" + "Kurta")
        .then((res) => {
          if (res.data.success === true) {
            //this.setState({ limit: res.data.data.length });
            // res.data.data.map((ex) => {
            //   colorLists.push(ex.color);
            // });

            // let uniqueColors = colorLists.filter((val, id, array) => {
            //   return array.indexOf(val) == id;
            // });

            // console.log("uc", uniqueColors);

            this.setState({
              item: res.data.data,

              //colors: uniqueColors,
            });
          } else {
            alert("Some error occured ", res.error);
          }
        })
        .catch((err) => console.log("Some error occured", err));
    }
  }

  render() {
    console.log('data reaching');
    if (this.state.item.length === 0) {
      return (
        <div class="loading-more">
          <i class="icon_loading"></i>
          <a href="#">Loading More</a>
        </div>
      );
    } else {
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
                    style={{ width: "260px", height: "353px" }}
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
        <div class="product-list">
          <div class="row">{items}</div>
        </div>
      );
    }
  }
}

export default Kurta;
