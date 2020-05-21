import React, { Component } from "react";
import GitHubLogin from "react-github-login";

class Login extends Component {
  onSuccess = (val) => {
    return (window.location = "repos");
  };
  onFailure = (val) => {
    console.log(val);
    alert("FAiled login");
  };
  render() {
    return (
      <div className="App">
        <GitHubLogin
          clientId="b11a235b1dba9420dc07"
          onSuccess={(val) => this.onSuccess(val)}
          onFailure={(val) => this.onFailure(val)}
          redirectUri={"http://localhost:3000/repos"}
        />
      </div>
    );
  }
}

export default Login;
