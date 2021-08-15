import './App.scss';
import React, {useEffect, useState} from 'react';
import COLORS_ARRAY from "./colorsArray.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

// Quote database url
let quoteDBurl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {

  // Set inital state for the quote and author
  const [quote, setQuote] = useState("Life is a tragedy when seen in close-up, but a comedy in long-shot.")
  const [author, setAuthor] = useState("Charlie Chaplin")
  const [quotesArray, setQuotesArray] = useState(null)

  // Remove the "" from json
  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  }
  // Perform side effects
  useEffect(() => {
    fetchQuotes(quoteDBurl)
  }, [quoteDBurl])

  // Change colors
  const [accentColor, setAccentColor] = useState('#282c34')

  // Set random numbers that link to the relevant quote and author changes
const [randomNumber, setRandomNumber] = useState (0)
const getRandomQuote = () => {
  let randomInteger = Math.floor(quotesArray.length*Math.random())
setRandomNumber(randomInteger)
setQuote(quotesArray[randomInteger].quote)
setAuthor(quotesArray[randomInteger].author)
setAccentColor(COLORS_ARRAY[randomInteger])

}

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:accentColor}}>
        <div id="quote-box" style={{color:accentColor}}>
        {/* <h1>Random Number: {randomNumber}</h1> */}
        <h2 id = "text">
        "{quote}"
        </h2>
        <p id = "author">
          - {author}
        </p>
        <div class="buttons">
        <a id="tweet-quote" style={{backgroundColor:accentColor}}
        href={encodeURI( "http://www.twitter.com/intent/tweet?text=${quote} -${author}")}><FontAwesomeIcon icon={faTwitter} /></a>
      
        <button id="new-quote" style={{backgroundColor:accentColor}}
        onClick={()=>getRandomQuote()}>New Quote</button>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
