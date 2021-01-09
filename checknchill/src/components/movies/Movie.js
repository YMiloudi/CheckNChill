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
                    <img className='posterMovie' src={this.props.movie.poster}/>
                </div>
                <div className='descriptionMovie'>
                    <h2 className='titleMovie'>{this.props.movie.title}</h2>
                    <p className='detailsMovie'>{this.props.movie.production_year}</p>
                    <p className='detailsMovie'>{this.props.movie.genres}</p>
                    <p className='synopsisMovie'>{this.props.movie.synopsis}</p>
                    
                </div>
            </div>
        )
    }
}

export default Movie;