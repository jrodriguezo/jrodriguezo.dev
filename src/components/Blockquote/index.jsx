import { useEffect, useState, React, useCallback } from 'react'

const quotes = [
  {
    author: 'Elon Musk',
    description: "I don't ever give up.",
    time: 5
  },
  {
    author: 'Jeff Bezos',
    description: 'Big things start small.',
    time: 5
  },
  {
    author: 'Gene Kranz',
    description: 'Failure is not an option.',
    time: 5
  },
  {
    author: 'Victor Küppers',
    description: 'Eres lo que transmites.',
    time: 5
  },
  {
    author: 'Unknown',
    description: 'Imagine the impossible and then do it.',
    time: 5
  },
  {
    author: 'Unknown',
    description:
      "A lion doesn't have to prove it’s a threat. You already know what the lion is capable of.",
    time: 10
  }
]

export default function Blockquote () {
  // let MINUTE_MS = 1000; // Refresh quote each 10s
  const [currentQuote, setCurrentQuote] = useState(quotes[quotes.length - 1])
  const [minutes, setMinutes] = useState(1000 * quotes[quotes.length - 1].time)

  /*
    const selectRandomQuote = () => {
        const index = Math.floor(Math.random()*quotes.length)
        setCurrentQuote(quotes[index])
    }
    */

  const showNextQuote = useCallback(() => {
    const quote = quotes.shift()
    quotes.push(quote)
    setCurrentQuote(quote)
    setMinutes(1000 * quote.time)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      showNextQuote()
    }, minutes)

    return () => clearInterval(interval) // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, [minutes, showNextQuote])

  return (
    <div className='p-4 xl:px-14 2xl:px-32 opacity-100 text-center'>
      <span className='font-serif font-black text-gray-50 text-6xl sm:text-8xl'>“</span>
      <p className='font-extralight text-2xl sm:text-4xl'>
        {currentQuote.description}
      </p>
      <p className='text-lg sm:text-2xl mt-4'>{currentQuote.author}</p>
    </div>
  )
}
