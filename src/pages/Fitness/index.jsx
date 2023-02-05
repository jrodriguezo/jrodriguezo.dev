import Title from 'components/BlogUtilities/Title'
import Iframe from 'components/Iframe/Iframe'
import Quote from 'components/Quote/Quote'

export default function Fitness () {
  return (
    <section className='xl:px-56'>
      <div className='flex flex-col gap-y-5 w-full bg-gray-rick-morty p-20 text-black'>
        <Title>Be the best version of you</Title>
        <div className='mx-auto w-20 my-4 border-t-2 border-black'></div>
        <div className='text-center font-bold text-4xl text-black-rick-morty tracking-widest'>
          Why is so difficult to achive our goals?
        </div>
        <div className='flex flex-col gap-y-4 mx-auto text-justify text-xl max-w-2xl my-10'>
          <p>Because it's difficult to get out from our comfort zone. We are all
          time giving excuses and we don't focus on the important things for
          gainning muscle; train, sleep, eat and repeat.</p>
          <p>
          Moreover, most social activities are not very helpful; hang out with your friends,
          going out for dinner, etc.</p>
        </div>
        <Iframe src='https://www.youtube.com/embed/-p1zwLg4T0I' title='bulking diet motivation' />
        <div className='mx-auto w-20 my-4 border-t-2 border-black'></div>
        <div className='text-center font-bold text-4xl text-black-rick-morty tracking-widest'>
            Not only our physical conditions is genetic
        </div>
        <div className='mx-auto text-justify text-xl max-w-2xl my-10'>
            But our capacity for suffering or consistency must also be taken into
            consideration. If you wanna be a mister Olympia, you have to do whatever it takes.
            Achieving your best version requires pushing your body to the limit.
        </div>
        <Iframe src='https://www.youtube.com/embed/rqNjhkn9zjo' title='eating like a bodybuilder' />
        <Quote title='Whatever it takes.'
          author='Rich Piana'
          role='Bodybuilder'
        />
        <div className='text-center font-bold text-4xl text-black-rick-morty tracking-widest'>
            There is no limits
        </div>
        <Iframe src='https://www.youtube.com/embed/IGaN66dcZEs' title='deadlift with 500kg' />
        <Quote title='It’s that great feeling, like the first man on the moon, the first man to run a mile in under four minutes. And now, I’m the first to deadlift half a ton. It’s history, and I’m very proud to be a part of it.'
          author='Eddie Hall'
          role='Strongman'
        />
        <div className='text-center font-bold text-4xl text-black-rick-morty tracking-widest'>
           Lifting heavy weight is addicting
        </div>
        <Iframe src='https://www.youtube.com/embed/JaTKomJUNPM' title='addicted to lifting heavy weight' />
        <Quote title="The more you wanna feel like the more discipline you can make yourself, I'll give up anything to like reach my goal."
          author='Larry Wheels'
          role='Powerlifting'
        />
      </div>
    </section>
  )
}
