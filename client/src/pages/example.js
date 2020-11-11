import React from "react";
import Progress from "./Progress";
import axios from "axios";

class Data extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hi i m one {this.props.sort} and limit {this.props.limit}
      </div>
    );
  }
}

class Filters extends React.Component {
  constructor() {
    super();
    this.state = { sort: "", limit: "", colors: [], maxPrice: "1000" };
  }

  componentDidMount() {
    this.getMaxPrice();
    this.getColors();
   
  }

  getMaxPrice() {
    axios
      .get("http://localhost:3001/items/getFilters")
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          this.setState({ maxPrice: res.data.price });
        } else {
          alert("Some error occured ", res.error);
        }
      })
      .catch((err) => console.log("Some error occured", err));
  }

  getColors()
  {
    let colorLists = [];
    axios
      .get("http://localhost:3001/items/getItemByCategory/" + "Kurta")
      .then((res) => {
        if (res.data.success === true) {
          this.setState({ limit: res.data.data.length });
          res.data.data.map((ex) => {
            colorLists.push(ex.color);
          });

          let uniqueColors = colorLists.filter((val, id, array) => {
            return array.indexOf(val) == id;
          });

          console.log("uc", uniqueColors);

          this.setState({
            limit: res.data.data.length,
            colors: uniqueColors,
          });
        } else {
          alert("Some error occured ", res.error);
        }
      })
      .catch((err) => console.log("Some error occured", err));

  }

  handleSort = (e) => {
    e.preventDefault();
    this.setState({
      sort: e.target.value,
    });
  };

  handleShow = (e) => {
    e.preventDefault();
    this.setState({
      limit: e.target.value,
    });
  };

  onPriceChange = (e) => {
      e.preventDefault();
      this.setState({
          value: e.value
      });
  }

  render() {
    return (
      <div>
        <section class="product-shop spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
                <div class="filter-widget">
                  <h4 class="fw-title">Price</h4>

                  <Progress max={this.state.maxPrice} />

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
                          value={this.state.sort}
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
                          value={this.state.limit}
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
                <Data sort={this.state.sort} limit={this.state.limit} />

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

export default Filters;
