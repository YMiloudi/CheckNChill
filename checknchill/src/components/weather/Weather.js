import React from "react";

const Weather = (props) => {
    return(
        <div>
            <h1>Quel temps fait-il à {props.city} ?</h1>
        </div>
    )
}
export default Weather;