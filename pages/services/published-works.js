//Published Works services page
import Header from '../../components/header';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '../../components/footer';
import { Imagecard_l, Imagecard_r, Imagecard_db } from '../../components/imagecard';
import styles from "../../styles/services.module.css";

const PubWorks = () => {
    const mobile_goes_title = <Link style={{'textDecoration':'none', 'color':'black'}} text="yo" target='_blank' href='https://commons.wikimedia.org/wiki/File:As_Mobile_goes,_so_goes_the_Corps-_A_look_at_change_inside_a_government_agency_-_USACE-p16021coll4-135.pdf'>As Mobile Goes, So Goes the Corps</Link>;
    const mobile_goes_def = "\nIn 2006, Ralph Bailey, Jr. and Charles F. Philips, Jr. documented the Mobile District, US Army Corps of Engineers' cultural shift from a hierarchical \"stovepipe\" structure to a collaborative \"Lifecycle/Project Management\" approach between 1985-2003. This change, prompted by expanding roles in environmental protection and emergency management, marked a departure from traditional priorities like military construction. Civilian and military personnel both adapted to these changes, with oral histories from 51 participants forming the foundation of the narrative. Bailey oversaw the project, while Philips conducted the research and writing.";
    const inland_rice_title = "South Carolina Inland Rice Context";
    const inland_rice_def = "\nBetween 2009 and 2011, Andrew Agha and Charles Philips of Brockington and Associates conducted an intensive study of over 20 inland rice field complexes in the Greater Charleston area. The project, tied to mitigation efforts for the Palmetto Commerce Parkway, focused on mapping and evaluating 11 sites to create an Inland Rice Contextual Study for the South Carolina State Historic Preservation Office. This study established criteria for identifying and assessing key components of inland rice fields, influencing the SHPO’s 2011 Rice Fields and Section 106 guidelines.\n\nThe eighteenth century plat adjacent shows the Hays Ingleside rice plantation in Charleston County, SC.";
    const us_water_title = <Link target='_blank' style={{'textDecoration':'none','color':'black'}} href='https://history.idaho.gov/wp-content/uploads/5865-BOR-Wtr-Control-Structures-Context-SEPTFINAL.pdf'>U.S. Bureau of Reclamation Water Conveyance Systems in the West Context and Evaluation Guidance</Link>
    const us_water_def = "\nIn 2021, NDN Company and Brockington, commissioned by the U.S. Bureau of Reclamation, conducted a study of historic water conveyance systems across 180 projects in 17 states in the American West. Excluding dams and reservoirs, the research focused on features like canals, headgates, flumes, and measuring devices, analyzing their construction materials and historical use periods. Despite pandemic-related challenges requiring all research to be conducted online, Charles Philips led the study portion, while Ms. Stallings authored the evaluation section.";
    return (
        <>
            <Head>
                <title>Published Works | Historic Studies Limited</title>
                <meta property="og:title" content="Published Works | Historic Studies Limited"/>
                <meta property="og:type" content="website"/>
                <meta name="description" content="Historic Studies Limited is operated by Charles Philips, a freelance historian who seeks to provide the best research and analysis on historical sites and landmarks, King's grants, and cemetaries. He also develops oral history projects and home and land history studies." />
            </Head>
            <section className={styles.full_env}>
                <div className={styles.d_encompass}>
                    <div className={styles.d_header}>
                        <Header />
                    </div>
                    <div className={styles.d_title}>
                        <h1 className={styles.title}>Published Works</h1>
                    </div>
                    <div className={styles.d_dropcard} style={{borderTop: "2px solid black"}}>
                            <Imagecard_l
                                imageurl={"/static/images/published_works/as_mobile_goes.png"}
                                imagealt={"Photo of As Mobile Goes cover"}
                                width={669/2}
                                height={865/2}
                                title={mobile_goes_title}
                                text={mobile_goes_def}
                            />
                    </div>
                    <div className={styles.d_dropcard} style={{borderTop: "2px solid black"}}>
                            <Imagecard_r
                                imageurl={"/static/images/published_works/hays_ingleside_plantation.png"}
                                imagealt={"Photo of Hays Ingleside plantation"}
                                width={400}
                                height={550}
                                title={inland_rice_title}
                                text={inland_rice_def}
                            />
                    </div>
                    <div className={styles.d_dropcard} style={{borderTop: "2px solid black"}}>
                            <Imagecard_l
                                imageurl={"/static/images/published_works/bor_water_control_structure.png"}
                                imagealt={"Photo of Bor water control structure"}
                                width={429}
                                height={543}
                                title={us_water_title}
                                text={us_water_def}
                            />
                    </div>
                    <div className={`${styles.d_footer}`}>
                        <Footer />
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default PubWorks;