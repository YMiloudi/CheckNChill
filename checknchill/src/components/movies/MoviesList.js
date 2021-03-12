import React, { useEffect, useState } from 'react'
import Movie from '../movies/Movie';
import Slider from 'react-slick';

// import CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './MoviesList.css'

function MoviesList(){

    const [movies, setMovies] = useState(null);

    useEffect(()=>{ // Equivaut au componentDidMount
        fetch("https://api.betaseries.com/movies/random?key=2d6c9af974c7&nb=6")
            .then((resp)=>resp.json())
            .then((movies) => setMovies(movies.movies));
    },[]);

    //paramètres du slider
    const settings = {
        arrows: false,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialise: 0,
        cssEase: 'ease-in-out',
        draggable: false,
        classNames: 'carouselSlider',
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    infinite: false,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true,
                }
            }
        ]
    };

    return(
        <div id="movieBox">
            <h1>Or stay home and Chill on TV</h1>
            <Slider {...settings}>
                {   
                    movies != null &&
                    movies.map((movie) => (
                        <Movie movie={movie}/>
                ))}
            </Slider>   
        </div>
    )
}

export default MoviesList;