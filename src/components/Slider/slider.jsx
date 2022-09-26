import React from 'react'

const delayBetweenSlides = 10 * 1000 // 10 * 1000ms = 10s
const commonStyles = 'absolute shadow-md rounded-t-xl -bottom-20 sm:right-10 h-96 w-96 rotate-6 object-cover object-left-top'
const slides = [
  {
    title: 'GitHub Finder',
    description: 'Search a GitHub user and find out stats about their profile. Find how many followers, public repositorios, location and many more.',
    img: () => <img className={`shadow-violet-300 ${commonStyles}`} src='./assets/images/projects/github-finder.png' alt='show a search input and some users with the name' />
  },
  {
    title: 'Hackaton Weather',
    description: 'Discover the weather through the search engine or using your current location. Access to the forecast history for the following 3 days. Keep track of the weather!',
    img: () => <img className={`shadow-black ${commonStyles}`} src='./assets/images/projects/hackaton-weather.png' alt='show historical numbers' />
  },
  {
    title: 'Foods 4 Bulking',
    description: 'Make your daily routine. Control the macros of your diet automatically.',
    img: () => <img className={`shadow-gray-100 ${commonStyles}`} src='./assets/images/projects/foods-4-bulking.png' alt='show rows and columns with ingredients and weights' />
  }
]
function Slider () {
  const [isPaused, setIsPaused] = React.useState(false)
  const [index, setIndex] = React.useState(0)
  const timeoutRef = React.useRef(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  React.useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delayBetweenSlides
    )
    return () => {
      resetTimeout()
    }
  }, [index])
  return (
    <section id='projects'>
      <div className='font-extrabold text-gray-50 text-5xl sm:text-7xl'>
          Projects
      </div>
      <div className='text-base sm:text-xl mt-2'>
          latest highlighted
      </div>
      <div className='mx-auto overflow-hidden w-full mt-5 sm:mt-20'>
        <div className='whitespace-nowrap transition ease-linear duration-1000' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
          {slides.map((color, index) => (
            <div className='inline-block sm:h-[400px] w-full bg-black-js h-screen' key={index}>
              <div className='flex flex-col sm:flex-row justify-between h-full'>
                <div className='flex flex-col justify-between gap-8 px-4 pt-10 sm:p-10'>
                  <div className='flex flex-col flex-wrap gap-6 wrap break-words whitespace-normal'>
                    <header>
                      <h1 className='font-bold text-3xl'>{color.title}</h1>
                    </header>
                    <p className='max-w-xs'>{color.description}</p>
                  </div>
                  <footer className='flex flex-col opacity-70'>
                    Read more
                    <span className='italic text-sm text-extralight'>(Not available yet)</span>
                  </footer>
                </div>
                <picture className='relative h-96 w-96 rotate-10'>
                  {color.img()}
                </picture>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10 flex justify-between items-center'>
        <div>
          {slides.map((_, idx) => (
            <button key={`second ${idx}`} className={`inline-block h-3 w-3 rounded-full cursor-pointer mr-4 hover:bg-slate-300 ${index === idx ? 'bg-slate-500' : 'bg-slate-50'}`} onClick={() => {
              setIndex(idx)
              setIsPaused(false)
            }} />
          ))}
          {isPaused && <span>Slider has been paused</span>}
        </div>

        <button className='text-slate-50 hover:text-slate-300' onClick={() => {
          clearTimeout(timeoutRef.current)
          setIsPaused(true)
        }}>Stop</button>
      </div>
    </section>

  )
}

export default Slider
