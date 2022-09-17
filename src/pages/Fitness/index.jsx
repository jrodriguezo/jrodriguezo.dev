import Tittle from 'components/BlogUtilities/Tittle'

export default function Fitness () {
  return (
    <section className="xl:px-56">
      <div className="bg-gray-rick-morty p-20 text-black-js">
        <Tittle>Be the best version of you</Tittle>
        <div className="mx-auto w-20 my-4 border-t-2 border-black-js"></div>
        <div className="text-center font-bold text-4xl text-black-rick-morty tracking-widest">
          Why is so difficult to achive our goals?
        </div>
        <div className="mx-auto text-justify text-xl max-w-2xl my-10">
          Because it's difficult to get out from our comfort zone. We are all
          time giving excuses and we don't focus on the important things for
          gainning muscle; train, sleep, eat and repeat. Moreover, the society
          doesn't help too much due to "social activities", if you don't hang
          out with your friends to take a beer it is considered like a "strange
          person" or, you'll also listen to the phrase "you're obsessed with".
        </div>
        <div className="mx-auto max-w-3xl">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/-p1zwLg4T0I"
            title="bulking"
          ></iframe>
        </div>
        <div className="mx-auto w-20 my-4 border-t-2 border-black-js"></div>
        <div className="text-center font-bold text-4xl text-black-rick-morty tracking-widest">
            Not only our physical conditions is genetic
        </div>
        <div className="mx-auto text-justify text-xl max-w-2xl my-10">
            But also our suffering capacity or consistency should be taken into
            consideration. Don't be fooled! We should be aware of our weaknesses
            to fight against it with the final goal of achieving our best
            version.
        </div>
        <div className="mx-auto max-w-3xl">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/IGaN66dcZEs"
            title="bulking"
          ></iframe>
        </div>
        <div className="flex justify-center flex-col mx-auto text-center max-w-2xl">
          <span className='font-serif font-black text-8xl mt-10'>“</span>
          <p className='font-light italic text-2xl'>
              It’s that great feeling, like the first man on the moon, the first man to run a mile in under four minutes. And now, I’m the first to deadlift half a ton. It’s history, and I’m very proud to be a part of it.
          </p>
          <p className='text-2xl mt-4'>Eddie Hall</p>
          <p>Strongman</p>
        </div>

      </div>
    </section>
  )
}
