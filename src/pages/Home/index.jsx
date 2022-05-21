import Header from "../../components/Header";
import CoverPage from "../../components/CoverPage";
import BlockWithTitleTextAndImage from "../../components/BlockWithTitleTextAndImage";

import Philosophy from "../Philosophy";
import BlockWithTitleTextAndImageReversed from "../../components/BlockWithTitleTextAndImageReversed";

import "./styles.css";
import UnderConstruction from "../../components/UnderConstruction";
import Projects from "../../components/Projects";
import Helmet from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Learn more about me and also check out my blog and projects | Jesús Rodríguez Ovejero</title>
        <meta name="description" content="Jesús Rodríguez Ovejero is a Telecommunications Engineer specialized in Computer Science. Currently, he works as a Frontend Developer. Visit his little blog and take a look at his most recent projects." />
      </Helmet>
      <div className="bg-yellow-js text-black-js">
        <Header />
        <CoverPage />
      </div>
      <section className="lg:px-56">
        <div className="2xl:bg-gray-rick-morty">
          <BlockWithTitleTextAndImage />
          <Philosophy />
          <BlockWithTitleTextAndImageReversed />
          <Projects />
          <UnderConstruction />
        </div>
      </section>
    </div>
  );
}
