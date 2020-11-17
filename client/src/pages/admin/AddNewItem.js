import React from "react";
import axios from "axios";
import Select from "react-select";
import ReactColorPicker from "@super-effective/react-color-picker";




// const nameValidation = (fieldName, filedValue) => {
//   if (filedValue.trim() === "") {
//     return `${fieldName} is required`;
//   }
//   if (/[^a-zA-Z -]/.test(fieldValue)) {
//     return "Invalid characters";
//   }
//   return null;
// };

// const validate = {
// 	itemName: name => nameValidation('Item Name', name) 
// };

class AddNewItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgCollection: "",
      name: "",
      desc: "",
      price: "",
      care: "",
      stock: "",
      category: "",
      message: "",
    };

    this.state = {
      selectedOption: " ",
      setColor: "",
    };

    this.state = {
      s: false,
      m: false,
      l: false,
      xl: false,
      xxl: false,
      xxxl: false,
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.state.selectedOption);
  }
  onFileChange(e) {
    this.setState({ imgCollection: e.target.files });
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      selectedOption: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let lists = this.getAllSizes();
    console.log("category is", this.state.selectedOption);

    let formData = new FormData();
    for (const key of Object.keys(this.state.imgCollection)) {
      formData.append("imgCollection", this.state.imgCollection[key]);
    }
    formData.append("name", this.state.name);
    formData.append("desc", this.state.desc);
    formData.append("price", this.state.price);
    formData.append("care", this.state.care);
    for (const key of Object.keys(lists)) {
      formData.append("size", lists[key]);
    }
    formData.append("stock", this.state.stock);
    formData.append("color", this.state.setColor);
    formData.append("category", this.state.selectedOption);

    axios
      .post("http://localhost:3001/items/upload-images", formData, {})
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        data.success === true
          ? this.setState({ message: "The item was successfully added" })
          : this.setState({
              message: "Sorry some error occured" + data.error,
            });
      });
  };

  onTextChange = (event) => {
    event.preventDefault();

    switch (event.target.name) {
      case "name":
        this.setState({ name: event.target.value });
        break;
      case "desc":
        this.setState({ desc: event.target.value });
        break;
      case "code":
        this.setState({ code: event.target.value });
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
    }
  };

  onSizeSelected = (e) => {
    e.preventDefault();
    e.target.style.backgroundColor = "#ABABAB";
    this.setState({ [e.target.name]: true });
  };

  onColorChange = (e) => {
    this.setState({ setColor: e });
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
    return (
      <div>
        <div className="breacrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <a href="#">
                    <i className="fa fa-home"></i> Admin Login
                  </a>
                  <span>Add New Item</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="register-login-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="register-form">
                  <h2>Add New Item</h2>
                  <form onSubmit={this.onSubmit} autoComplete="off">
                    <div className="group-input">
                      <label for="category">Choose category *</label>
                      {/* <Select
												placeholder='Choose category'
												value={this.state.selectedOption} // set selected value
												options={data} // set list of the data
												onChange={this.handleChange} // assign onChange function
											/>
											 */}
                      <select
                        placeholder="Choose category"
                        value={this.state.selectedOption}
                        onChange={this.handleChange}
                        required
                        class="form-control"
                      >
                        <option selected enabled="false">
                          {" "}
                          Choose category
                        </option>
                        {cats}
                      </select>
                    </div>

                    <div className="group-input">
                      <label for="name">Item Image (Multiple) *</label>
                      <input
                        type="file"
                        multiple
                        id="imgCollection"
                        name="imgCollection"
                        required
                        onChange={this.onFileChange}
                      />
                    </div>
                    <div className="group-input">
                      <label for="name">Item name *
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        onChange={this.onTextChange}
                      />
					  {/* {touched.itemName && errors.itemName} */}
					  </label>
                    </div>
                    <div className="group-input">
                      <label for="desc">Description </label>
                      <textarea
                        type="text"
                        id="desc"
                        name="desc"
                        class="form-control"
                        onChange={this.onTextChange}
                      />
                    </div>

                    <div className="group-input">
                      <label for="price">Price (Rs) *</label>
                      <input
                        type="Number"
                        id="price"
                        name="price"
                        required
                        onChange={this.onTextChange}
                      />
                    </div>

                    <div className="group-input">
                      <label for="size">
                        Sizes available (select all that applies)*
                      </label>
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
                    <div className="group-input">
                      <label for="stock">Care</label>
                      <input
                        type="String"
                        id="care"
                        name="care"
                        onChange={this.onTextChange}
                      />
                    </div>

                    <div className="group-input">
                      <label for="stock">Stock Limit*</label>
                      <input
                        type="Number"
                        id="stock"
                        required
                        name="stock"
                        onChange={this.onTextChange}
                      />
                    </div>
                    <div className="group-input">
                      <label for="stock">Colour*</label>
                      <ReactColorPicker
                        color="#ff00ff"
                        required
                        onChange={this.onColorChange}
                      />
                    </div>

                    <button
                      type="submit"
                      className="site-btn register-btn"
                      onClick={this.onSubmit}
                    >
                      Add item
                    </button>
                  </form>
                  <div className="switch-login">
                    {/* <a href='./login.html' className='or-login'>
											Logout
										</a> */}
                    <label style={{ color: "red", fontWeight: "bold" }}>
                      {" "}
                      {this.state.message}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddNewItem;
