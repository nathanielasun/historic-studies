import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Carousel from '../components/carousel'
import {Imagecard_l, Imagecard_r} from '../components/imagecard';
import homestyle from '../styles/home.module.css';
import CFP_and_PCG from '../public/static/images/oral_history/CFP_and_PCG_interview.png';
import Image from 'next/image';

//d prefix convention used for div
//m suffix convention used for mobile
/* photo of charlie philips card
            <div className={`${homestyle.d_card}`}>
                <Imagecard_r className={homestyle.card} imagealt={"Photo of Charles F. Philips, Jr."} width="357" height="460" imageurl={"/static/images/people/dam_photo_cfp.JPG"} title={"Charles F. Philips, Jr."} text={charlesAbout}/>
            </div>
*/
const Home = () => {

    const companyAbout = `\nHistoric Studies Limited is an organization dedicated to comprehensive historic research, specializing in resolving intricate cultural resource challenges. Our primary focus lies in meticulous historic deed research, with expertise in navigating 18th and 19th-century archives.\n\n Perhaps you need... \n\u009c•\u009c A cultural resource study\n\u009c•\u009c A King's Grant, boundary, or easement study\n\u009c•\u009c An oral history of a near-forgotten community\n\u009c•\u009c A documented photographic coffee table style family history\n\u009c•\u009c Information on a community/family cemetary\n
These and many other projects require expertise in legal, archival, and family records, then interpreting those records to provide a context. Contact us. We discover the past for you today that helps prepare your future.`;
    const charlesAbout = `\nAs founder and sole proprietor of Historic Studies Limited, Charles Philips has worked in the cultural resources field as a life-long historian. Mr. Philips was employed by Brockington and Associates, a cultural resources firm, for twenty years and has continued to work on projects with them after his retirement in 2021. He has a B.A. from Mercer University (1975) and an M.A. from the Citadel/College of Charleston (2002). He has more than fifty years experience in lower south-east history. The majority of his research and writing has been in support of cultural resource investigations, land study histories, cemetery studies, and oral histories. He has published on a variety of subjects including Colonial, Antebellum, and Twentieth-Century topics.`
    return (
        <>
<Head>
    <title>Home | Historic Studies Limited</title>
    <meta property="og:title" content="Home | Historic Studies Limited"/>
    <meta property="og:type" content="website"/>
    <meta name="description" content="Historic Studies Limited is operated by Charles Philips, a freelance historian who seeks to provide the best research and analysis on historical sites and landmarks, King's grants, and cemetaries. He also develops oral history projects and home and land history studies." />
</Head>
<section className={`${homestyle.full_env}`} >
    <div className={`${homestyle.d_encompass}`}>
        <div className={`${homestyle.d_header}`}>
            <Header />
        </div>
        <div className={homestyle.d_byline}>
                <Image 
                    className={homestyle.byline}
                    src="/static/images/byline.png"
                    width={1200*1.2}
                    height={600*1.2}
                />
            </div>
        <div className={`${homestyle.d_carousel}`}>
            <Carousel />
        </div>
        <div className={`${homestyle.d_cards}`}>
            <div className={`${homestyle.d_card}`}>
                <Imagecard_l className={`${homestyle.card}`} imagealt={"Photo of HSL team working"} width="400" height="300" imageurl={CFP_and_PCG} title={"Work with HSL"} text={companyAbout} />
            </div>
            
        </div>
        <div className={`${homestyle.d_footer}`}>
            <Footer />
        </div>
    </div>
</section>
</>
    )
}

export default Home;
