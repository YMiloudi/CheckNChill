import React, { Component } from 'react'
import './Movie.css';

class Movie extends Component{
    
    constructor (props){
        super(props);
    }

    render(){
        return(
            <div className='containerMovie'>
                <div>
                    <img className='posterMovie' src={this.props.movies.poster}/>
                </div>
                <div className='descriptionMovie'>
                    <h2 className='titleMovie'>{this.props.movies.title}</h2>
                    <p className='detailsMovie'>{this.props.movies.production_year}</p>
                    <p className='detailsMovie'>{this.props.movies.genres}</p>
                    <p className='synopsisMovie'>{this.props.movies.synopsis}</p>
                </div>
            </div>
        )
    }
}

export default Movie;