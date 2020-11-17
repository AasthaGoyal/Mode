import React from "react";

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      cpassword: "",
      message: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.password != this.state.cpassword) {
      this.setState({ message: "The passwords dont match" });
    } else {
        console.log(this.state.password);
    //   let data = {
    //     password: this.state.password,
    //   };

    //   axios.post("http://localhost:3001/users/addUser", data).then((res) => {
    //     if (res.status === 200) {
    //       console.log(res);
    //       this.setState({ message: "The user has been saved successfully" });
    //     } else {
    //       this.setState({ message: "Some error occured" + res.message });
    //     }
    //   });
    }
  }

  render() {
    return (
      <div>
        <div className="breacrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-text">
                  <a href="#">
                    <i className="fa fa-home"></i> Home
                  </a>
                  <span>Reset Password</span>
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
                  <h2>Reset Password</h2>
                  <form onSubmit={this.handleFormSubmit}>
                    <div className="group-input">
                      <label for="pass">Password *</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}
                        required
                      />
                    </div>
                    <div className="group-input">
                      <label for="con-pass">Confirm Password *</label>
                      <input
                        type="password"
                        id="cpassword"
                        name="cpassword"
                        onChange={this.onChange}
                        value={this.state.cpassword}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={this.onSubmit}
                      className="site-btn register-btn"
                    >
                      SAVE
                    </button>
                  </form>
                  <div className="switch-login">
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
