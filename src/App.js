import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Containers/search_bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}

export default App;
