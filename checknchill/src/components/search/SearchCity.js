import React, { useState, useEffect} from "react";

import "./SearchCity.css";

import Lottie from 'react-lottie';
import animationData from '../../Logo.json';

import { MdPlace } from 'react-icons/md';

import GoogleFontLoader from 'react-google-font-loader';

const SearchCity = (props) => {

    const [searchValue, setSearchValue]=useState("");

    const [isPaused, setIsPaused]=useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    useEffect(()=>{
        setTimeout(()=>{
            setIsPaused(true)
        }, 2700) 
    },[])

    function searchBtnHanbleClick () {
        props.onSearch(searchValue)
    }

    function hoverChange (isPaused) {      
        if(isPaused == true){
            setIsPaused(false)
        }
        else{
            setIsPaused(true)
        }
    }

    return(
        <div id="nav">
            <div id="logo"
                onMouseEnter={()=>hoverChange(isPaused)}
                onMouseLeave={()=>hoverChange(isPaused)}>
                

                <Lottie
                    id="animation" 
                    options={defaultOptions}
                    height={300}
                    width={400}
                    isPaused={isPaused}
                    speed={0.5}
                    

                    /*onMouseEnter={setIsPaused(true)}
                    onMouseLeave={setIsPaused(false)}*/
                    />
                
                <p id="logoText">
                    <GoogleFontLoader
                        fonts={[
                        {
                            font: 'Fredoka One',
                            weights: [400, '400i'],
                        }]} />
                    
                    Check'n Chill</p>

            </div>

            <div id="searchBar"> 
                <input 
                    onChange={(event)=>setSearchValue(event.target.value)} 
                    type="text" 
                    placeholder="Chose your city" 
                    value={searchValue} />
                <button 
                    id="searchBtn" 
                    onClick={()=>searchBtnHanbleClick()}><MdPlace /></button>
            </div>
        </div>
    )
}

export default SearchCity;