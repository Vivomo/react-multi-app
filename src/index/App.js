import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

const User = () => <h1 style={{color: 'green'}}>user</h1>;

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                index1
                <Route exact path="/user" component={User}/>
            </div>
        </Router>
    );
  }
}

export default App;
