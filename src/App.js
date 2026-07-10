import "./App.css";
// import PropTypes from 'prop-types'

import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import {

  Routes,
  Route,

} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<News category="general"/>}/>
          <Route path="/general" element={<News category="general"/>}/>
          <Route path="/sports" element={<News category="sports"/>}/>
          <Route path="/business" element={<News category="business"/>}/>
          <Route path="/health" element={<News category="health"/>}/>
          <Route path="/science" element={<News category="science"/>}/>
          <Route path="/technology" element={<News category="technology"/>}/>

        </Routes>
      </>
    );
  }
}
