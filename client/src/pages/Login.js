import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import App from "../App";
import { CardColumns } from "react-bootstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      username: "",
      pass: "",
      allow: false,
      forgot: false,
      cemail: "",
      smessage: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    axios
      .get("http://localhost:3001/users/getUser", {
        params: {
          email: this.state.username,
          password: this.state.pass,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          res.data.user.length === 0
            ? this.setState({
                message: "Invalid Username or password combination",
                allow: false,
              })
            : this.setState({
                message:
                  "Successfully logged in! Welcome " + res.data.user[0].name,
                allow: true,
              });
        } else {
          this.setState({
            message: "Some error occured" + res.message,
          });
        }
      });
  }

  handleClose = (e) => {
    this.setState({ forgot: false });
  };

  handleForgot = (e) => {
    this.setState({ forgot: true });
  };

  handleResend = (e) => {
    this.setState({ cemail: e.target.value });
  };

  sendEmail = (e) => {
    e.preventDefault();
    console.log("send confirmation for", this.state.cemail);
    this.setState({ smessage: "We have send your password to your email" });
  };

  onChange(e) {
    e.preventDefault();
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  }

  render() {
    if (this.state.allow) {
      return <App login={this.state.allow} />;
    } else {
      return (
        <div>
          <div className="register-login-section spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-3">
                  <div className="login-form">
                    <h2>Login</h2>
                    <form action="#">
                      <div className="group-input">
                        <label for="username">
                          Username or email address *
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="group-input">
                        <label for="pass">Password *</label>
                        <input
                          type="password"
                          id="pass"
                          name="pass"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="group-input gi-check">
                        <div className="gi-more">
                          {/* <button
                            onClick={this.forgetPassword.bind(this)}
                            className="or-login"
                          >
                            {" "}
                            Forget Password
						  </button>
						   */}
                          <button
                            className="or-login"
                            style={{ boder: "none" }}
                            onClick={this.handleForgot}
                          >
                            {" "}
                            Forget Password
                          </button>
                          {this.state.forgot && (
                            <Popup
                              content={
                                <>
                                  <h3> Reset Password</h3>
                                  <br />
                                  <div className="group-input">
                                    Enter Your Email:{" "}
                                    <input
                                      type="email"
                                      id="email"
                                      name="email"
                                      placeholder="Email"
                                      style={{ width: "300px", height: "30px" }}
                                      onChange={this.handleResend}
                                    />{" "}
                                    <button
                                      style={{
                                        color: "#ffffff",
                                        height: "30px",
                                        background: "#e7ab3c",
                                        margin: "5px 0px 0px",
                                      }}
                                      onClick={this.sendEmail}
                                    >
                                      {" "}
                                      Submit
                                    </button>
                                  </div>

                                  <center>
                                    <label
                                      style={{
                                        color: "red",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {" "}
                                      {this.state.smessage}
                                    </label>
                                  </center>
                                </>
                              }
                              handleClose={this.handleClose}
                            />
                          )}

                          {/* <NavLink
                            exact
                            className="forget-pass"
                            activeClassName="is-active"
                            to="/Register"
                          >
                            <i className="fa fa-user"></i>Create an account
                          </NavLink> */}
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="site-btn login-btn"
                        onClick={this.onSubmit}
                      >
                        Sign In
                      </button>
                    </form>
                    <div className="switch-login">
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
        </div>
      );
    }
  }
}

const Popup = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        background: "#0000050",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "70%",
          margin: "0 auto",
          height: "auto",
          maxHeight: "70vh",
          marginTop: "calc(100vh - 85vh - 20px",
          borderRadius: "4px",
          padding: "20px",
          border: "1px solid #999",
          overflow: "auto",
          background: "#fff",
        }}
      >
        <span
          style={{
            content: "x",
            cursor: "pointer",
            position: "fixed",
            right: "calc(15% - 30px)",
            top: "calc(100vh - 85vh - 33px)",
            background: "#ededed",
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            lineHeight: "20px",
            textAlign: "center",
            border: "1px solid #999",
            fontSize: "20px",
          }}
          onClick={props.handleClose}
        >
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Login;
