import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import {Imagecard_l, Imagecard_r } from '../components/imagecard'
import styles from '../styles/about.module.css'


const About = () => {

    const aboutCharlesPhilips = `B.A. Mercer University (1975) \nM.A. Citadel/College of Charleston (2002) \n\nCharles F. Philips, Jr. has been in business as Historic Studies Limited, LLC since October of 2021. Prior to that he served as a Senior Historian, Project and Program Manager in the Charleston office of Brockington and Associates. He has worked on over a thousand projects in the Lowcountry of South Carolina where he served as Program Manager for Brockington’s Land Studies, King’s Grant applications, Oral History programs, and Genealogy Outreach Programs. He managed the historic studies of projects as diverse as the 80,000-acre, East Edisto development for Dorchester and Charleston counties, SC, inland rice contextual study for the South Carolina State Historic Preservation Office, heritage studies in St. Johns County, Florida, and land studies for Fort Stewart, Georgia. `
    const charlesPhilipsWork = `\nMr. Philips has been involved in supporting client’s efforts to establish a King’s Grant to claim marshlands and the research component in the South Carolina County Boundaries Project by the South Carolina Geodetic Survey. He has written more than a dozen private land study histories working for families and companies that own historic lands in South Carolina, Georgia, and Florida. As the company oral historian, he is an active member of the Oral History Association where he has been a member of the Education Committee (2019-2023). He has conducted or managed more than 350 oral histories. The oral history program has also led Mr. Philips to work on Brockington’s African American descendants’ outreach. Mr. Philips has published separate works on a range of topics including the Mobile District US Army Corps of Engineers, the Phosphate Mining Industry in the South Carolina Lowcountry, the Gateway National Recreation Area in New York City. \n\nDownload <a class="footer_link" href="/images/about/Philips_Charlie_Vitae.pdf" download>full vitae</a>`
    return (
        <>
        <Head>
            <title>About | Historic Studies Limited</title>
        </Head>
        <section className={`${styles.full_env}`}>
            <div className={`${styles.d_encompass}`}>
                <div className={`${styles.d_header}`}>
                    <Header />
                </div>
                <div className={styles.d_connect}>
                        <h1 className={styles.connect} style={{textAlign: "center", position: 'relative', top:"2px"}}>About Charles Philips and HSL</h1>
                </div>
                <div className={`${styles.d_cards}`}>
                    <div className={`${styles.d_card}`}>
                        <Imagecard_l imageurl={"/static/images/people/CFP_library_ded.jpg"} imagealt={"A photo of Charles Philips"} height={405} width={335} title={"Charles F. Philips, Jr."} text={aboutCharlesPhilips}/>
                    </div>
                    <div className={`${styles.d_card}`}>
                        <Imagecard_r imageurl={"/static/images/about/CFP_presentation.jpg"} imagealt={"Charles Philips Vitae"} height={420} width={454} title={"HSL's Work"} text={charlesPhilipsWork}/>
                    </div>
                </div>
                <div className={`${styles.d_footer}`}>
                    <Footer />
                </div>
            </div>
        </section>
        </>
    )
}

export default About;