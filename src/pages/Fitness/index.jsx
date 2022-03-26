import Tittle from "../../components/BlogUtilities/Tittle";

export default function Fitness() {
  return (
    <section className="md:px-56">
      <div className="md:bg-gray-rick-morty p-20 text-black-js">
        <Tittle children="Be the best version of you" />
        <>
          <div className="mx-auto w-20 my-4 border-t-2 border-black-js"></div>
          <div className="text-center font-bold text-4xl text-black-rick-morty tracking-widest">
            Why is so difficult to achive our goals?
          </div>
          <div className="mx-auto text-justify text-xl max-w-2xl mt-10">
            Because it's difficult to get out from our comfort zone. We are all
            time giving excuses and we don't focus on the important things for
            getting muscular; train, sleep, eat and repeat. Moreover, the
            society don't help due to "social activities", if you don't hang out
            with your friends to take a beer it is considered a "strange person"
            or also, the phrase "you're obsessed with".
          </div>
          <div class="mx-auto w-20 my-4 border-t-2 border-black-js"></div>
        </>
        <div className="mx-auto max-w-3xl">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/-p1zwLg4T0I"
            title="bulking"
          ></iframe>
        </div>
        <>
          <div className="mx-auto w-20 my-4 border-t-2 border-black-js"></div>
          <div className="text-center font-bold text-4xl text-black-rick-morty tracking-widest">
            Not only our physical conditions is genetic
          </div>
          <div className="mx-auto text-justify text-xl max-w-2xl mt-10">
            But also our suffering capacity or consistency should be taken into consideration. Don't be fooled!
            We should fight with our weaknesses and focus on ourselves and your unique aim is compete with you and get your best version.
          </div>
          <div class="mx-auto w-20 my-4 border-t-2 border-black-js"></div>
        </>
      </div>
    </section>
  );
}
