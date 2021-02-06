import React from 'react';
import './DontForget.css';


function DontForget(props){

    function getClass(){
        if(props.title >20){
            return "classHot";
        }else{
            return "classCold";
        }
    }

    function getImage(){
        if(props.title >20){
            return "imgHot";
        }else{
            return "imgCold";
        }
    }
    
    return(
        <div className="dontFrget">
            <div className={getClass()}>
                <img className="classHot"/>
                <img className="classCold"/>
            </div>
            <div className={getImage()}>
                <img className='imgHot'/>
                <img className='imgCold'/>
            </div>
        
        </div>
    )


}

export default DontForget;
