
import React, {useState, useEffect} from 'react';
import './Weather.css';

const Weather = () => {

    const[weather, setWeather] = useState(null);

    useEffect(() => {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.props.searchValue + "&units=metric&APPID=f4256cf32470ba990948dc5ecba800de")
            .then((resp)=>resp.json())
            .then((data) => setWeather(data));
    });

  
   function dateBuilder(d){
        let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    

        let day = days[d.getDay()];
        let date= d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return  day + " " + date + " " + month + " " + year; 
    
   }

    
        return(
            <main> 
                    <div className="location-box">
                        <div className="location">
                                {weather.name}, {weather.sys.country}
                            <div className="date">
                                <h1>{dateBuilder(new Date())}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="weather-box">
                        <div className="temp">
                                {Math.round(weather.main.temp)}°C 

                            <div className="weather">
                                {weather.weather[0].main}
                            </div>
                        </div>
                    </div>
            </main>   
        );
        }

export default Weather; 

