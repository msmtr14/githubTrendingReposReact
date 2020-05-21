import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorPage extends Component {
  render() {
    return (
      <div className="pageNotFound">
        <div className="pageBoundry">
          <div className="pageDesc">
            <h3>404</h3>
            <p>Looks like the page you were looking for is no longer here.</p>
          </div>
          <div className="goBackHomePage">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    );
  }
}
