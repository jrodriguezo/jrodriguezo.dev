import Header from "../../components/Header";
import CoverPage from "../../components/CoverPage";
import BlockWithTitleTextAndImage from "../../components/BlockWithTitleTextAndImage";

import Philosophy from "../Philosophy";
import BlockWithTitleTextAndImageReversed from "../../components/BlockWithTitleTextAndImageReversed";

import "./styles.css";
import UnderConstruction from "../../components/UnderConstruction";
import Projects from "../../components/Projects";

export default function Home() {
  return (
    <div>
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
