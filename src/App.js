import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";


export default class App extends Component {
  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      < >
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News apiKey={this.apiKey} key={"/"} pageSize={this.pageSize} country="in" category="general" />} ></Route>
            <Route exact path='/general' element={<News apiKey={this.apiKey} key={"general"} pageSize={this.pageSize} country="in" category="general" />} ></Route>
            <Route exact path='/business' element={<News apiKey={this.apiKey} key={"business"} pageSize={this.pageSize} country="in" category="business" />} ></Route>
            <Route exact path='/entertainment' element={<News apiKey={this.apiKey} key={"entertainment"} pageSize={this.pageSize} country="in" category="entertainment" />} ></Route>

            <Route exact path='/health' element={<News apiKey={this.apiKey} key={"health"} pageSize={this.pageSize} country="in" category="health" />} ></Route>
            <Route exact path='/science' element={<News apiKey={this.apiKey} key={"science"} pageSize={this.pageSize} country="in" category="science" />} ></Route>
            <Route exact path='/sports' element={<News apiKey={this.apiKey} key={"sports"} pageSize={this.pageSize} country="in" category="sports" />} ></Route>
            <Route exact path='/technology' element={<News apiKey={this.apiKey} key={"technology"} pageSize={this.pageSize} country="in" category="technology" />} ></Route>
          </Routes>
        </Router >
      </>
    )
  }
}
