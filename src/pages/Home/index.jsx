import Header from '../../components/Header';
import CoverPage from '../../components/CoverPage';
import BlockWithTitleTextAndImage from '../../components/BlockWithTitleTextAndImage';

import Philosophy from '../Philosophy';
import BlockWithTitleTextAndImageReversed from '../../components/BlockWithTitleTextAndImageReversed';


export default function Home() {

    return(
        <div>
            <div className="bg-yellow-js text-black-js">
                <Header />
                <CoverPage />
            </div>
            <section>
                <BlockWithTitleTextAndImage />
                <Philosophy />
                <BlockWithTitleTextAndImageReversed />
            </section>
        </div>
    )
}