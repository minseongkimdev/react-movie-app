import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {   id : 1,
      title : "Matrix",
      poser : ""
  },
  {   id : 2,
      title : "old boy",
      poser : ""
  },
  {   id : 3,
      title : "Inception",
      poser : ""
  },
  {   id : 4,
      title : "Star wars",
      poser : ""
  }
]
class App extends Component {
  static propTypes = {
    title : React.propTypes.string,
    poster : React.propTypes.string
  }
  render() {
    return (
      <div className="App">
        {movies.map(((movie, index)=> {
            return <Movie title = {movie.title} poster={movie.poster} key  = {index}/>
        })}

      </div>
    );
  }
}

export default App;
