import { useEffect, useState, React} from 'react'

export default function Blockquote() {
    
    let MINUTE_MS = 1000; // Refresh quote each 10s
    const quotes = [
        {
            "author": "Elon Musk",
            "description": "I don't ever give up.",
            "time": 5
        },
        {
            "author": "Jeff Bezos",
            "description": "Big things start small",
            "time": 5
        },
        {
            "author": "Unknown",
            "description": "A lion doesn't have to prove it’s a threat. You already know what the lion is capable of.",
            "time": 10
        }
    ]

    const [currentQuote, setCurrentQuote] = useState(quotes[quotes.length-1])
    const [minutes, setMinutes] = useState(1000*quotes[quotes.length-1].time)

    /*
    const selectRandomQuote = () => {
        const index = Math.floor(Math.random()*quotes.length)
        setCurrentQuote(quotes[index])
    }
    */

    const showNextQuote = () => {
        const quote = quotes.shift()
        quotes.push(quote)
        setCurrentQuote(quote)
        setMinutes(1000*quote.time)
    }


    useEffect(() => {
        const interval = setInterval(() => {
            showNextQuote()
        }, minutes);
      
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, [minutes])


    return (
        <div className="m-10 border-l-4 border-yellow-js p-4">
            <span className='font-serif font-black text-8xl'>“</span>
            <p className='text-white font-extralight text-4xl'>{currentQuote.description}</p>
            <p className='text-2xl mt-4'>{currentQuote.author}</p>
        </div>
    )
}

