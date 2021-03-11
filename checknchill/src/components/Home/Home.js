import React, { useState } from "react";
import Weather from "../weather/Weather";
import Quotes from '../dontforget/Quotes';
import MoviesList from '../movies/MoviesList';

import Check from '../../assets/Check.png'
import Chill from '../../assets/Chill.png'

import '../Home/Home.css'
import SearchCity from "../search/SearchCity";

const Home = () => {
    
    const [isSearched, setIsSearched] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    
    function isClicked(searchValue){
        setIsSearched(true);
        setSearchValue(searchValue)
    }
    return(
        <div>
            <SearchCity onSearch={(searchValue) => isClicked(searchValue)}/> 
            {
                isSearched == true &&
                <Weather cityValue = {searchValue}/> 
            }

            {
                isSearched == false &&
                <div className="ContainerAboutTop">
                    <img id="imageAbout" src={Check}/>
                    <div id="textAbout">
                        <h3 id="titleAbout">
                            Why CheckNChill ? 
                        </h3>
                        <p id="textAbout">
                        <p>Changing your plans due to the weather can be very frustrating! 
                        <br>
                        </br>
                        Imagine yourself. It’s been 2 months since you planned to go to the sea with your friends and at the last minute, 
                        <br></br>everything is cancelled because of the weather! 
                        It’s so frustrating, right? <br>
                        </br>That’s why we created this app, just for you!</p>
                        </p>
                    </div>

                    <div className="ContainerAboutBottom">
                        <div id="testAbout">
                            <h3 id="titleAbout">
                            Just check it... and chill ! 
                            </h3>
                            <p id="textAbout">
                            <p>
                            The application CheckNChill was created by an observation. 
                            <br></br> 
                            It is very complicated to organize an activity because of the weather that can sometimes be changing. <br>
                            </br>CheckNchill announces the weather first, but on top of that it reminds you of the essentials to take with you.
                            <br></br>
                            You can also enjoy a daily quote that will inspire your day! 
                            <br></br>
                            On sunny days the app offers you ideas for outdoor activities, such as the nicest bars in your area ! And when it rains, the app proposes you to watch nice movies at home!
                            <br></br>
                            CheckNChill is THE app that you need ! 
                            </p></p>
                        </div>
                        <img id="imageAbout" src={Chill}/>
                    </div>
                </div>
            }
           


        </div>
    )
}

export default Home;