// import React, { Component } from "react";
// import PropTypes from "prop-types";

const Newsitem=(props)=>{
  // static propTypes = {
  //   prop: PropTypes,
  // };

  // render() {
    // let { title, description, imageurl, newurl,author,date} = this.props;
    return (
      <>
        <div className="card" style={{ margin: "10px" }}>
          <img src={props.imageurl} className="card-img-top" alt=" news" onError={(e)=>{

          e.target.scr="https://via.placeholder.com/300x180?text=No+Image";}} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="cart-text"><small className="text-muted"> By {!props.author?"unknown":props.author} on {new Date( props.date).toGMTString()}</small></p>
            <a
              href={props.newurl}
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
  
// }
export default Newsitem;
