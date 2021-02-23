import React, {useState, useEffect} from 'react';
import './Quotes.css'


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
        <div className="quoteContainer">
            <div className="quote">
                <p className = "quoteText">{quote.text}</p>
                <p>Author: {quote.author}</p>

                <div className="btnContainer">
                    <button onClick={getQuote} className="btn">Get another quote !</button>
                </div>
            </div>
        </div>
    )
}

export default Quotes; 

