import React, { useState } from "react";
import SearchCity from "../search/SearchCity";
import Weather from "../weather/Weather";

const Home = () => {
    
    const [city, setCity]=useState("");
    
    
    return(
        <div>
            <SearchCity 
                onSearch={(searchValue)=>setCity(searchValue)} />
            <Weather 
                city={city} />
        </div>
    )
}

export default Home;