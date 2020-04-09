import React, { Component } from "react";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import LinearProgress from "@material-ui/core/LinearProgress";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loginStatusErrorMessage: "",
      loading: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  loginSuccess(response) {
    localStorage.setItem("usertoken", response.data);
    this.props.history.push(`/Profile`);
  }
  loginFail() {
    this.setState({
      loginStatusErrorMessage: "Please check with your credentials",
      loading: false,
    });
  }
  serverNotConnected() {
    this.setState({
      loginStatusErrorMessage: "Server Error !",
      loading: false,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ loginStatusErrorMessage: "", loading: true });
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    if (user.email === "" && user.password === "") {
      this.setState({
        loginStatusErrorMessage: "Please Enter UserName & Password",
        loading: false,
      });
      return;
    }
    axios
      .post(
        "http://localhost:8080/spiro_2020/result-managment-system/api/read_login_details.php",
        { email: user.email, password: user.password }
      )
      .then((response) => {
        //setLoading(false);
        response.data == "success"
          ? this.loginSuccess(response)
          : this.loginFail();
      })
      .catch((error) => {
        this.serverNotConnected();
      });
  }

  render() {
    const isLoggedInErrorMessage = this.state.loginStatusErrorMessage;
    const isLoading = this.state.loading;
    let alert, button;
    if (isLoggedInErrorMessage == "") {
    } else {
      alert = (
        <Alert variant="filled" severity="error">
          {isLoggedInErrorMessage}
        </Alert>
      );
    }
    if (isLoading) {
      button = (
        <div>
          <button
            disabled
            type="submit"
            className="btn btn-lg btn-primary btn-block"
          >
            Sign in
          </button>

          <LinearProgress color="secondary" />
        </div>
      );
    } else {
      button = (
        <div>
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Sign in
          </button>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            {alert}
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
              {button}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
