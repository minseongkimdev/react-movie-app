import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movie = [
  "Matrix",
  "Full Metal Jacket",
  "oldboy",
  "Star wars"
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title ={movie[0]}/>
        <Movie title ={movie[1]}/>
        <Movie title ={movie[2]}/>
        <Movie title ={movie[3]}/>

      </div>
    );
  }
}

export default App;
