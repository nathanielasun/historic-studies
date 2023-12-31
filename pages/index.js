import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import Carousel from '../components/carousel'
import {Imagecard_l, Imagecard_r} from '../components/imagecard';
import homestyle from '../styles/home.module.css';

//d prefix convention used for div
//m suffix convention used for mobile

const Home = () => {

    const companyAbout = `\nHistoric Studies Limited is an organization dedicated to comprehensive historic research, specializing in resolving intricate cultural resource challenges. Our primary focus lies in meticulous historic deed research, with expertise in navigating 18th and 19th-century archives. Our comprehensive services encompass historic deed analysis, family genealogies, oral histories, cemetery investigations, and cultural resource reporting and support. \n\nWith a profound commitment to uncovering the rich history of both land and people, HSL is your trusted partner. Our proprietor brings decades of experience collaborating with cultural resource entities, municipalities, counties, private families, and businesses. We have successfully contributed to diverse projects, including historical land use assessments, site ruins identification, original grant linkages, cemetery location services, and conducting oral history interviews.`;
    const charlesAbout = `\nAs founder and sole proprietor of Historic Studies Limited, Charles Philips has worked in the cultural resources field as a life-long historian. He has a B.A. from Mercer University (1975) and an M.A. from the Citadel/College of Charleston (2002). He has more than fifty years experience in lower south-east history. The majority of his research and writing has been in support of cultural resource investigations, land study histories, cemetery studies, and oral histories. He has published on a variety of subjects including Colonial, Antibellum, and Twentieth-Century topics. \n\nThe photo shows Mr. Philips conducting a study of a Seventeenth-Century mill dam near Summerville, S.C., typical of the work he does. He joins archeology, anthrpology, and history together to explain the features on the landscape.`
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
        <div className={`${homestyle.d_carousel}`}>
            <Carousel />
        </div>
        <div className={`${homestyle.d_cards}`}>
            <div className={`${homestyle.d_card}`}>
                <Imagecard_l className={`${homestyle.card}`} imagealt={"Photo of HSL team working"} width="400" height="300" imageurl={"/images/oral_history/CFP_and_PCG_interview.jpg"} title={"Work with HSL"} text={companyAbout} />
            </div>
            <div className={`${homestyle.d_card}`}>
                <Imagecard_r className={homestyle.card} imagealt={"Photo of Charles F. Philips, Jr."} width="357" height="460" imageurl={"/images/people/dam_photo_cfp.jpg"} title={"Charles F. Philips, Jr."} text={charlesAbout}/>
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