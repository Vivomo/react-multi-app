import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import './App.css';

const About = () => <h1 style={{color: 'red'}}>about</h1>;

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                index2
                <Route exact path="about" component={About}/>
            </div>
        </Router>
    );
  }
}

export default App;
