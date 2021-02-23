import React from 'react';
import './DontForget.css';
import ClassCold from "./classcold.png";
import ClassHot from "./classhot.png";


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
        <div className="dontFrget">
            <div>
                {
                    getGif()
                }
            </div>
            <div>
                {
                    getImage()
                }
            </div>
        </div>
    )
}
export default DontForget;
