import React, { Component } from 'react';
import {HashRouter as Router, Route} from "react-router-dom";

import './App.css';

const About = () => <h1 style={{color: 'green'}}>About</h1>;
class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <h2>Index2</h2>
                <Route path="/About" component={About}/>
            </div>
        </Router>
    );
  }
}

export default App;
