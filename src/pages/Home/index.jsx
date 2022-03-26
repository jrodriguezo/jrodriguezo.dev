import Header from '../../components/Header';
import CoverPage from '../../components/CoverPage';
import BlockWithTitleTextAndImage from '../../components/BlockWithTitleTextAndImage';

import Philosophy from '../Philosophy';
import BlockWithTitleTextAndImageReversed from '../../components/BlockWithTitleTextAndImageReversed';

import './styles.css'

export default function Home() {

    return(
        <div>
            <div className="bg-yellow-js text-black-js">
                <Header />
                <CoverPage />
            </div>
            <section className='sm:px-20'>
                <div className='mx-auto md:bg-gray-rick-morty'>
                    <BlockWithTitleTextAndImage />
                    <Philosophy />
                    <BlockWithTitleTextAndImageReversed />
                </div>

            </section>
        </div>
    )
}