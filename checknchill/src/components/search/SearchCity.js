import "./SearchCity.css";
import React, { useState, useEffect} from "react";
import Lottie from 'react-lottie';
import animationData from '../../Logo.json';
import { MdPlace } from 'react-icons/md';

const SearchCity = (props) => {

    const [searchValue, setSearchValue]=useState("");

    const [isStopped, setIsStopped]=useState(false);

    const [isPaused, setIsPaused]=useState(false);

    const defaultOptions = {
        loop: false,
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
    })

    function searchBtnHanbleClick () {
        props.onSearch(searchValue)
    }

    return(
        <div id="nav">
            <Lottie
                id="animation" 
                options={defaultOptions}
                height={300}
                width={400}
                isStopped={isStopped}
                isPaused={isPaused}/>

            <div id="searchBar"> 
                <input 
                    onChange={(event)=>setSearchValue(event.target.value)} 
                    type="text" 
                    placeholder="Chose your city" 
                    value={searchValue} />
                <button onClick={()=>searchBtnHanbleClick()}><MdPlace /></button>
            </div>
        </div>
    )
}

export default SearchCity;

