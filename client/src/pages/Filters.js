import Slider from "rc-slider";
import React from "react";
import axios from "axios";
import Data from "./Data";

import "rc-slider/assets/index.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);


class Filters extends React.Component {
  constructor(props) {
    super(props);
    console.log("Filters ", this.props.category);
    this.state = {
      sort: "",
      limit: "",
      colors: [],
      maxPrice: "",
      lower: 100,
      upper: "",
      value: [200, 1800],
      selectedColor: "",
      sendRange: [],
      sendSize: [],
      s: false,
      m: false,
      l: false,
      xl: false,
      xxl: false,
      xxxl: false,
      formSubmit: false,
    };

    this.onFilterSubmit = this.onFilterSubmit.bind(this);
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
          this.setState({ upper: res.data.price });
        } else {
          alert("Some error occured ", res.error);
        }
      })
      .catch((err) => console.log("Some error occured", err));
  }

  getColors() {
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

  onFilterSubmit = (e) => {
    e.preventDefault();
    let range = this.state.value;
    let color = this.state.selectedColor;
    let sizeLists = this.getAllSizes();
    this.setState({ formSubmit: true });

    this.setState({ sendRange: range, sendColor: color, sendSize: sizeLists });
  };

  onSliderChange = (e) => {
    this.setState({ value: e });
  };

  colorSelected = (e) => {
    let item = document.getElementById(e);
    item.style.border = "solid #000000";
    this.setState({ selectedColor: e });
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
    
    let colors = this.state.colors.map((color) => {
      return (
        <div class="cs-item" style={{ width: "52px", height: "40px" }}>
          <div
            id={color}
            style={{
              backgroundColor: color,
              width: "30px",
              height: "30px",
              mozBorderRadius: "50px",
              webkitBorderRadius: "50px",
              borderRadius: "50px",
              cursor: "pointer",
              float: "inherit",
            }}
            onClick={() => this.colorSelected(color)}
          />
        </div>
      );
    });

    return (
      <div>
        <section class="product-shop spad">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-8 order-2 order-lg-1 produts-sidebar-filter">
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

                <div class="filter-widget">
                  <h4 class="fw-title">Color</h4>

                  <div class="fw-color-choose">{colors}</div>
                </div>
                <br />
                <br />
                <div class="filter-widget">
                  <h4 class="fw-title">Price</h4>

                  <div class="filter-range-wrap">
                    <div class="range-slider" style={{ height: "30px" }}>
                      <div class="price-input">
                        <input
                          id="lower"
                          type="text"
                          style={{
                            width: "140px",
                            height: "30px",
                            float: "left",
                          }}
                          value={this.state.value[0]}
                        ></input>
                        <input
                          id="upper"
                          type="text"
                          style={{
                            width: "140px",
                            height: "30px",
                            float: "right",
                          }}
                          value={this.state.value[1]}
                        ></input>
                      </div>
                    </div>
                    <div style={{ height: "30px", width: "210px" }}>
                      <Range
                        id="priceRange"
                        min={this.state.lower}
                        max={this.state.upper}
                        value={this.state.value}
                        step="50"
                        onChange={this.onSliderChange}
                      />
                    </div>
                  </div>

                  <button
                    style={{ border: "none" }}
                    onClick={this.onFilterSubmit}
                    class="filter-btn"
                  >
                    Filter
                  </button>
                </div>

                <br />
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

                {this.state.sort.length > 0 ? <Data key={this.state.sort} sort={this.state.sort} category={this.props.category}/> : null}
                {this.state.limit  ? <Data key={this.state.limit} limit={this.state.limit} category={this.props.category}/> : null}
                {this.state.formSubmit ? (
                  <Data
                    key={this.state.formSubmit}
                    submitted={this.state.formSubmit}
                    sort={this.state.sort}
                    limit={this.state.limit}
                    priceRange={this.state.sendRange}
                    color={this.state.sendColor}
                    size={this.state.sendSize}
                    category={this.props.category}
                  />
                ) : null}
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
