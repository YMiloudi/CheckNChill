import React, { Component } from 'react'
import Movie from './Movie';

class MoviesList extends Component{
    
    constructor (props){
        super(props);
        this.state = {
            movies:null
        }
    }
    
    moviesFetch = ()=>{
        fetch("https://api.betaseries.com/movies/random?key=2d6c9af974c7&nb=3")
            .then((resp) => resp.json())
            .then((movies) => this.displayMovies(movies.movies));
    }
    
    displayMovies = (movies)=>{
        this.setState({movies});
    }
    
    componentDidMount(){
        this.moviesFetch();
    }

    render(){
        return(
            <div>
                {this.state.movies != null && (
                    this.state.movies.map((film)=>(
                        <Movie movie={film}/>
                    ))
                )}   
            </div>
        )
    }
}

export default MoviesList;