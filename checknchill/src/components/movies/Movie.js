import React, { Component } from 'react'
import './Movie.css';

class Movie extends Component{
    
    constructor (props){
        super(props);
    }

    render(){
        return(
            <div className='effect'>
                <div className='transition'>
                    <img src={this.props.movie.poster || 'https://pictures.betaseries.com/films/affiches/original/68126.jpg'} alt={this.props.movie.title} className='imageSlide'/>
                    <div className='overlay'>
                        <p className='text'>
                            <h4 className='titleImage'>{this.props.movie.title}</h4>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie;