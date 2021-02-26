
import React, {useState} from 'react';


import DontForget from '../dontforget/DontForget';
import SearchCity from '../search/SearchCity';

import {FaTemperatureHigh} from 'react-icons/fa';
import {TiWeatherWindyCloudy} from 'react-icons/ti';

import Clouds from "./clouds.png";

import './Weather.css';

const Weather = (props) => {

    const [weather, setWeather] = useState(null); // Création de weather = variable d'étât, qui récupère la data. setWeather va permettre d'apporter
                                                    //des changements à la variable d'état : weather
    
  
   function dateBuilder(d){ //Fonction qui permet de stocker et créer la date 
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
        .then((data) => onDataRetrieved(data));  //setWeather ne peut passer qu'une seule fonction. Donc, création d'une nouvelle fonction onDataRetrieved
   }

   function onDataRetrieved(data){ // Création de fonction, pour passer plusieurs lignes 
        setWeather(data);
       props.onDataSearch(data.main.temp) //va récupérer la data de la température (L'évènement est soulevé)
   }

   //SearchCity va récup le onSearch (valeur de l'input), on lui assigne une valeur. Cette valeur va être utiliser dans une fonction
// qui elle va faire un fetch avec l'API et afficher la data. 
        
   
    return(
            <main> 
                <SearchCity onSearch= {(cityValue) => getInfoByCityName(cityValue)}/> 
                
                {
                    weather != null &&
                    <>
                        <div id="meteoBox">
                            <div className="location-box">
                                <div className="location">
                                    
                                    <div className="date">
                                        <h2>{dateBuilder(new Date())}</h2>
                                    </div> 
                                    
                                    <h1>What's the weather like in <br />{weather.name}, {weather.sys.country} ?</h1>
     
                                </div>
                            </div>
                            
                            <div id="weatherContent">
                                <div className="weather-box">
                                                                
                                    <div id="tempData">
                                        <div className="temp">
                                            <FaTemperatureHigh className="icons" />
                                            <p className="weatherText"> {Math.round(weather.main.temp)}°C </p> 
                                        </div>
                                    
                                        <div className="weather">
                                            <TiWeatherWindyCloudy className="icons" />
                                            <p className="weatherText"> {weather.weather[0].main} </p>
                                        </div>
                                    </div>

                                    <img id="weatherIllu" src={Clouds} />
                                    
                                    
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

