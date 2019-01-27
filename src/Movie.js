import React, {
    Component
} from 'react';
import './movie.css';
import propTypes from "prop-types";


class Movie extends Component {
    static propTypes = {
        title : React.propTypes.string,
        poster : React.propTypes.string
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <MoviePoster /> 

                <h1> {this.props.title} </h1>

            </div>
        )
    }
}


class MoviePoster extends Component {
    render() {
        return (
            <img scr="http://optimal.inven.co.kr/upload/2015/09/09/bbs/i11920504926.png"/>

        

        ) }}


export default Movie