//oral history services page
import Header from '../../components/header';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '../../components/footer';
import { Imagecard_l, Imagecard_r } from '../../components/imagecard';
import {DropCard_l, DropCard_r} from '../../components/dropdowncard';
import styles from "../../styles/services.module.css";

const SpecResearch = () => {
    const gaillardGraves = `\nIn 2013, the City of Charleston called upon Brockington and Associates to determine the origin and background and excavate 36 graves located at the construction site of the new Gaillard Center on Calhoun Street in Charleston. Charles Philips was the historian on a team of individuals authorized to determine who were the individuals buried there. Through archaeology, anthropology, and historic background work, the team identified them as African Americans, most likely slaves, who died about the time of the Revolutionary War. \n\nThe project gained national attention through the Lowcountry Gullah Society and the National Geographic Society. The site was close in proximity to Gadsden’s Wharf, one of the largest slave import landing locations in the South until 1808. Mr. Philips conducted a careful study of the land ownership and combined his research with that of the archaeologist and anthropologist in determining ethnicity and approximate burial time. \nThe photo adjacent shows the grave sites on the grounds of the new Gaillard Center.\n\n(Client: City of Charleston, South Carolina)`
    const countyLineProject = `\nIn 2014, Charles Philips as Program Manager and primary historian of the County Line projects at Brockington partnered with Cornerstone Surveying and Engineering of Summerville, South Carolina to provide historic research and surveying of South Carolina’s Lowcountry county lines. Awarded the bid from the South Carolina Geodetic Survey [SCGS]. \n\nMr. Philips has served as primary researcher for the historic county lines from Georgetown to Beaufort. His work has been to provide the surveyors with original locations of the lines as ordered by the State Legislature and how those lines worked out on the ground. Once Mr. Philips work is submitted to Cornerstone, they conduct a ground survey based on the best historic plats and markers. They prepare a plat and submit the plat to the SCGS. Then a public hearing is called to discuss the survey and answer questions from the interested parties.  Once the survey is approved by both counties, it is enacted into law and becomes the accepted county line. Work has included lines between Charleston, Berkeley, Dorchester, Beaufort, Jasper, Hampton, Allendale, Barnwell, and Orangeburg counties. The project is ongoing through HSL, LLC. \n\nThe map adjacent shows a 1943 US War Department map with the county line between Allendale and Barnwell counties that was researched and confirmed during this project.\n\n(Client: Cornerstone Surveying and Engineering, Inc. Summerville, SC)`
    const overflowLands = `\nIn 2019, Jane P. Collins and Catherine P. “Betsy” Fulford requested of Mr. Philips a review of several marsh parcels to which they had title. They wanted to determine if overflow lands in Nassau County, Florida they claim could be traced to a Spanish Period (1790-1821) land grant. The two sisters desired to know if marshlands purchased by their parents in the 1960s were their lands fee simple. In Florida, the state recognizes only fee simple ownership to tidal overflow wetlands if they can be traced to a Spanish Land Grant. The tract in question was some 90 acres of marshes along the west side of Amelia Island in the Amelia River tidelands. \n\nAlthough Mr. Philips could identify the highlands adjacent to the marshlands as belonging to an Eighteenth-century Spanish Land Grant, his research showed that the marshlands owned by the sisters were never granted by the Spanish but by the State of Florida to the railroad in 1867.  The research revealed that the sisters did not have fee simple title to their marshlands. As a matter of course the State does not disturb claims of ownership of marshlands without King’s Grants, but also does not recognize them as fee simple. \n\nThe photo shows some of the overflow lands to which Jane Collins and Catherine Fulford claim title. \n\n(Client: Philips Enterprises, Fernandina Beach, Florida)`
    return (
        <>
            <Head>
                <title>Specialty Research | Historic Studies Limited</title>
                <meta property="og:title" content="Specialty Research | Historic Studies Limited"/>
                <meta property="og:type" content="website"/>
                <meta name="description" content="Historic Studies Limited is operated by Charles Philips, a freelance historian who seeks to provide the best research and analysis on historical sites and landmarks, King's grants, and cemetaries. He also develops oral history projects and home and land history studies." />
            </Head>
            <section className={styles.full_env}>
                <div className={styles.d_encompass}>
                    <div className={styles.d_header}>
                        <Header />
                    </div>
                    <div className={styles.d_title}>
                        <h1 className={styles.title}>Specialty Research Services</h1>
                    </div>
                    <div className={styles.d_dropcard} style={{borderTop: "2px solid black"}}>
                        <Imagecard_l imageurl={"/static/images/specialty_research/new_gaillard_graves.png"} imagealt={`new gaillard gravesite`} width={586} height={440} title={`Gaillard Graves Project`} text={gaillardGraves}/>
                    </div>
                    <div className={styles.d_dropcard} style={{borderTop: "2px solid black"}}>
                        <Imagecard_r imageurl={"/static/images/specialty_research/war_department_map.png"} imagealt={"war department map"} width={400} height={400} title={`South Carolina Geodetic Survey County Line Project`} text={countyLineProject} />
                    </div>
                    <div className={styles.d_dropcard} style={{borderTop: "2px solid black"}}>
                        <Imagecard_l imageurl={"/static/images/specialty_research/overflow_lands.png"} imagealt={"overflow lands"} width={623} height={434} title={`Collins-Fulford Marsh Grant Investigation`} text={overflowLands} />
                    </div>
                    <div className={`${styles.d_footer}`}>
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SpecResearch;