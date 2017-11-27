import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Home/>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
