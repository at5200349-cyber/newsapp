import "./App.css";
// import PropTypes from 'prop-types'
// import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import {

  Routes,
  Route,

} from "react-router-dom";
export default class App extends Component {
  api="7d9069b897344f42a23f24bba87d998a"
  state={
    progress:0
  }
  setProgress=(progress)=>{
  this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <Navbar />
         <LoadingBar
        color="#f11946"
        progress={this.state.progress}
       
      />
        <Routes>
          <Route path="/" element={<News setProgress={this.setProgress} api={this.api}  category="general"/>}/>
          <Route path="/general" element={<News setProgress={this.setProgress} api={this.api}  category="general"/>}/>
          <Route path="/sports" element={<News setProgress={this.setProgress} api={this.api}  category="sports"/>}/>
          <Route path="/business" element={<News setProgress={this.setProgress} api={this.api}  category="business"/>}/>
          <Route path="/health" element={<News setProgress={this.setProgress} api={this.api}  category="health"/>}/>
          <Route path="/science" element={<News setProgress={this.setProgress} api={this.api}  category="science"/>}/>
          <Route path="/technology" element={<News setProgress={this.setProgress} api={this.api}  category="technology"/>}/>

        </Routes>
      </>
    );
  }
}
