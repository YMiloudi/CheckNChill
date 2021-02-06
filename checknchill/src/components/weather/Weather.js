
import React, {useState} from 'react';
import DontForget from '../dontforget/DontForget';
import SearchCity from '../search/SearchCity';
import './Weather.css';

const Weather = (props) => {

    const [weather, setWeather] = useState(null);

  
   function dateBuilder(d){
        let months= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    

        let day = days[d.getDay()];
        let date= d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return  day + " " + date + " " + month + " " + year; 
   }

    
    function getInfoByCityName(cityValue){
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&units=metric&APPID=9098e1580bce922eca2949d617a96532")
        .then((resp)=>resp.json())
        .then((data) => setWeather(data));
    
   }

   
        
   
    return(
            <main> 
                    <SearchCity onSearch= {(cityValue) => getInfoByCityName(cityValue)}/>
                    
                    {
                        weather != null &&
                        
                        <>
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

                        <DontForget 
                            title={weather.main.temp}/>

                    </>
                        
                    }
                
            </main>   
        );
        }

export default Weather; 

