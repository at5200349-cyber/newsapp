import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Newsitem extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    let { title, description, imageurl, newurl } = this.props;
    return (
      <>
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
          <img src={imageurl} className="card-img-top" alt="not found" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newurl}
              className="btn btn-sm  btn-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}
