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
        {movies.map(movie=> {
            <Movie title = {movie.title} poster  = {movie.poster}
        })};

      </div>
    );
  }
}

export default App;
