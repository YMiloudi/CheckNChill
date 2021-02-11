import "./SearchCity.css";
import React, { useState } from "react";


const SearchCity = (props) => {
    const [searchValue, setSearchValue]=useState("");

    function searchBtnHandleClick (){ //le searchBtnHandleClick va récupérer l'input lors du clique
        props.onSearch(searchValue) //La valeur de l'input est récupérée 
    }

    return(
        <div id="nav">
                <img src="https://i.picsum.photos/id/156/80/80.jpg?hmac=hYcI8dQ3OXrmBBeH32vnTkgktt5M9eZ4B1p08Er1WKc" alt="Check'n'chill Logo" />
                <div id="searchBar">
                    <input 
                        onChange={(event)=>setSearchValue(event.target.value)} 
                        type="text" 
                        placeholder="Chose your city" 
                        value={searchValue} />
                    <button onClick={()=>searchBtnHandleClick()}>search</button>
                </div>
        </div>
    )
}
export default SearchCity;