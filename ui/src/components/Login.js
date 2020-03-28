import React, { Component } from "react";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loginStatusErrorMessage: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  loginSuccess(response) {
    localStorage.setItem("usertoken", response.data);
    this.props.history.push(`/profile`);
  }
  loginFail() {
    this.setState({
      loginStatusErrorMessage: "Login Fail"
    });
  }
  serverNotConnected() {
    this.setState({
      loginStatusErrorMessage: "Please check Server/Network Connection !"
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    if (user.email === "" && user.password === "") {
      this.setState({
        loginStatusErrorMessage: "Please Enter UserName & Password"
      });
      return;
    }
    axios
      .post(
        "http://localhost:8080/spiro_2020/result-managment-system/api/read_login_details.php",
        { email: user.email, password: user.password }
      )
      .then(response => {
        //setLoading(false);
        response.data == "success"
          ? this.loginSuccess(response)
          : this.loginFail();
      })
      .catch(error => {
        this.serverNotConnected();
      });
  }

  render() {
    const isLoggedInErrorMessage = this.state.loginStatusErrorMessage;
    let alert;
    if (isLoggedInErrorMessage == "") {
    } else {
      alert = (
        <Alert variant="filled" severity="error">
          {isLoggedInErrorMessage}
        </Alert>
      );
    }
    return (
      <div className="container">
        {alert}
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn  btn-primary btn-block">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
