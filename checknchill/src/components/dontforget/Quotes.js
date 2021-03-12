import React, {useState, useEffect} from 'react';

import './Quotes.css';

import {BsFillChatQuoteFill} from "react-icons/bs";
import {FaAngleDoubleRight} from "react-icons/fa";


const Quotes = () => {

    const [quote, setQuote] = useState ("");


    const getQuote = () => {
        fetch("https://type.fit/api/quotes")
        .then((resp) => resp.json())
        .then((data) => {
            let randomNumber = Math.floor(Math.random() * data.length);
            setQuote(data[randomNumber])
        });
    };

    useEffect(() => {
        getQuote(); 
    }, [])

    return (
        <div id="quoteBox"> 
            <hr align="center" />
            
            <div className="quote">
                    <div id="quoteContent">
                        <p id="quoteIcon"><BsFillChatQuoteFill /></p>
                        <div className="quoteText">
                            <p id= "quoteStence">"{quote.text}"</p>
                            <p id="quoteAuthor">Quote from {quote.author}</p>
                        </div>
                    </div>
                    <div className="btnContainer">
                        <p>Not inspired ? </p>
                        <button id="quoteBtn" onClick={getQuote} className="btn">Get another quote <FaAngleDoubleRight id="quoteBtnIcon" /></button>
                    </div>
            </div>
        </div>
    )
}

export default Quotes; 

