import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './MoviesList.css'


function MoviesList(){

    const [movies, setMovies] = useState(null);

    useEffect(()=>{ // Equivaut au componentDidMount
        fetch("https://api.betaseries.com/movies/random?key=2d6c9af974c7&nb=3")
            .then((resp)=>resp.json())
            .then((movies) => setMovies(movies.movies));
    },[]);

    return(
        <div>
            <AwesomeSlider className='divMoviesList'>
                {movies != null && (
                    movies.map((film)=>(
                        <div>
                            <Movie movies={film}/>
                        </div>
                    ))  
                )}
            </AwesomeSlider>   
        </div>
    )
}

export default MoviesList;