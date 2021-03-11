import React from 'react';
import './DontForget.css';
import ClassCold from "./classcold.png";
import ClassHot from "./classhot.png";

import Quotes from "./Quotes";

function DontForget(props){

    function getImage(){
        if(props.title >18){
            return <img src={ClassHot} className="vetement"/>;
        }else{
            return <img src={ClassCold} className="vetement"/>;
        }
    }

    function getGif(){
        if(props.title >16){
            return <img src="https://media.giphy.com/media/bcJvDLgxVSPulkDYB4/giphy.gif" className="gif"/>
        }else{
            return <img src="https://media.giphy.com/media/Fod1Ofcq3dEys/giphy.gif" className="gif"/>;
        }
    }
    return(
        <div className="boxDontFrget">
            <h1 id="dontforgtTitle">So don't forget...</h1>
            {/* 
            <div id="getgif">
                {
                    getGif()
                }
            </div>
            */} 
            <div id="getimage">
                {
                    getImage()
                }
            </div>

            <div id="quotes">
                <Quotes />
            </div>
        </div>
    )
}
export default DontForget;
