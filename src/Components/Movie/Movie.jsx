import React, { Component } from 'react';
import {API_URL,API_KEY,IMAGE_URL} from "../../API/secrets"
import { Link } from 'react-router-dom';
import "./Movie.css"
import axios from 'axios';

class Movie extends Component {
    state = { 
        detailedMovieObj:{}
     };

    async componentDidMount(){
        //https://api.themoviedb.org/3/movie/550?api_key=bf3a04a4b56fda4ce5a9ae6576570d87
       let response=await axios.get(`${API_URL}/movie/${this.props.movie.id}?api_key=${API_KEY}`);
       let detailedMovieObj=response.data;
       let posterPath=IMAGE_URL+detailedMovieObj.poster_path
       //console.log(response.data);
       this.setState({
           detailedMovieObj:{...detailedMovieObj,poster_path:posterPath}

       })
    }
    render() { 
        //let posterPath=IMAGE_URL+movieObj.poster_path;
        let {poster_path,title,vote_average}=this.props.movie;
        let posterPath=IMAGE_URL+poster_path;
        return  <div className="movie-item">
            <div className="movie-poster">
                <Link to={{pathname:'/moviepage',state:this.state.detailedMovieObj}}> 
                <img src={posterPath} alt="" />
                </Link>
            </div> 
            <div className="movie-info">
                <div className="movie-title">{title}</div>
                <div className="movie-rating">{vote_average} IMDB</div>
             </div>
        </div> 
        ;
    }
}
 
export default Movie;