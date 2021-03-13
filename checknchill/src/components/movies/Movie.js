import React, { Component } from 'react'
import './Movie.css';

import Poster from "../../assets/ovh.png"

class Movie extends Component{
    
    constructor (props){
        super(props);
    }

    render(){
        return(
            <div className='effect'>
                <div className='transition'>
                    <img src={Poster} />
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