import "./App.css";
// import PropTypes from 'prop-types'
import { useState } from "react";
import LoadingBar from "react-top-loading-bar";
// import React, { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import {

  Routes,
  Route,

} from "react-router-dom";
const App =()=> {
   const api="7d9069b897344f42a23f24bba87d998a"
 const [progress,setProgress]=useState(0);

  const country="us"
  const pagesize=12
    return (
      <>
        <Navbar />
         <LoadingBar
        color="#f11946"
        progress={progress}
       
      />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} api={api} country={country} pageSize={pagesize}  category="general"/>}/>
          <Route path="/general" element={<News setProgress={setProgress} api={api} country={country} pageSize={pagesize}  category="general"/>}/>
          <Route path="/sports" element={<News setProgress={setProgress} api={api} country={country} pageSize={pagesize}  category="sports"/>}/>
          <Route path="/business" element={<News setProgress={setProgress} api={api} country={country} pageSize={pagesize}  category="business"/>}/>
          <Route path="/health" element={<News setProgress={setProgress} api={api} country={country} pageSize={pagesize}  category="health"/>}/>
          <Route path="/science" element={<News setProgress={setProgress} api={api} country={country} pageSize={pagesize}  category="science"/>}/>
          <Route path="/technology" element={<News setProgress={setProgress} api={api} country={country} pageSize={pagesize}  category="technology"/>}/>

        </Routes>
      </>
    );
  }

export default App;