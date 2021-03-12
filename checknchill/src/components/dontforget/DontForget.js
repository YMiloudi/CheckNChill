import React from 'react';

import './DontForget.css';
import Quotes from "./Quotes";

import Boots from "../../assets/Boots.png"
import Beanie from "../../assets/Beanie.png"
import Gloves from "../../assets/Gloves.png"
import Scarf from "../../assets/Scarf.png"
import Umbrella from "../../assets/Umbrella.png"
import Jacket from "../../assets/Jacket.png"
import Sunscreen from "../../assets/Sunscreen.png"
import Sunglasses from "../../assets/Sunglasses.png"

function DontForget(props){

    function getImage(){
        if(props.title >18){
            return <div className="pictos">
                <img src={Jacket} alt="Jacket" />
                <img src={Sunglasses} alt="Sun glasses" />
                <img src={Sunscreen} alt="Sunscreen" />
            </div>
        }else{
            return <div className="pictos">
                <img src={Beanie} alt="Beanie" />
                <img src={Boots} alt="Boots" />
                <img src={Gloves} alt="Gloves" />
                <img src={Scarf} alt="Scarf" />
            </div>        
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

            <div id="getimage">
                <div>
                    {
                        getImage()
                    }
                </div>
            </div>

            <div id="quotes">
                <Quotes />
            </div>
        </div>
    )
}
export default DontForget;
