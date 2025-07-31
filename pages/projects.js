import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import {Imagecard_l, Imagecard_m, Imagecard_r} from '../components/imagecard';
import Image from 'next/image';
import {DropCard_l, DropCard_r} from '../components/dropdowncard';
import styles from '../styles/projects.module.css';

const Projects = () => {
    const gaillardGraves = `\nIn 2013, the City of Charleston called upon Brockington and Associates to determine the origin and background and excavate 36 graves located at the construction site of the new Gaillard Center on Calhoun Street in Charleston. Charles Philips was the historian on a team of individuals authorized to determine who were the individuals buried there. Through archaeology, anthropology, and historic background work, the team identified them as African Americans, most likely slaves, who died about the time of the Revolutionary War. \n\nThe project gained national attention through the Lowcountry Gullah Society and the National Geographic Society. The site was close in proximity to Gadsden’s Wharf, one of the largest slave import landing locations in the South until 1808. Mr. Philips conducted a careful study of the land ownership and combined his research with that of the archaeologist and anthropologist in determining ethnicity and approximate burial time. \nThe photo adjacent shows the grave sites on the grounds of the new Gaillard Center.\n\n(Client: City of Charleston, South Carolina)`
    const aerialEdisto = `\nMr. Philips uses his understanding of archival records to identify owners' claims to marshlands via a King's Grant. In this project, Mr. Philips had to provide archival support for the owner's claim to a tract of marshlands on Little Edisto island, South Carolina. He had to demonstrate an understanding of genealogy, historic development, and family records as well as existing records to establish a chain of title from the 1786 grant of marshlands to the current owner. \n\nHe had to surmount issues such as missing deeds and destroyed records. He was able to complete the record to the satisfaction of the South Carolina Attorney General's office. He participated with a team in presenting the owner's claims to the marshlands. The photograph shows the original grant and the location of the marshlands on a current aerial photograph of Little Edisto Island. \n\n(Client: Stream and Wetlands Foundation, Lancaster, Ohio)`;
    const deanHall = `\nMr. Philips was the senior researcher and historian for the Dean Hall plantation site project. The project involved county, state, and federal archives, and also involved oral history interviews, geneological studies, and family papers of previous owners to help formulate the story of the Dean Hall slave row. This project gained national attention because of the story of the enslaved people on Dean Hall, dating to the early Eighteenth-Century. Artifacts and the history are currently in the national museum of African-American history and culture in Washington, DC. The photograph of the man illustrates an excavation of one of the enslaved people's cabins. The photographs below are of a Nineteenth-Century plat of Dean Hall and the report cover.\n\n(Client: E. I. Dupont Nemours, Moncks Corner, South Carolina)`
    return (
        <>
        <Head>
            <title>Projects | Historic Studies Limited</title>
        </Head>
        <section className={`${styles.full_env}`}>
            <div className={`${styles.d_encompass}`}>
                <div className={`${styles.d_header}`}>
                    <Header />
                </div>
                <div>

                </div>
                <div className={styles.d_cards}>
                    <div className={styles.d_title}>
                        <h1 className={styles.projects}>Example Projects</h1>
                    </div>
                    <div className={`${styles.d_imagecard}`}>
                        <Imagecard_r className={`${styles.card}`} imagealt={"Little Edisto Aerial Map"} width="333" height="480" imageurl={"/static/images/specialty_research/aerial_edisto_map.png"} title={"Little Edisto Marsh Grant"} text={aerialEdisto} />
                    </div>
                    <div className={`${styles.d_imagecard}`}>
                        <Imagecard_l className={`${styles.card}`} imagealt={"Dean Hall Work"} width="426" height="320" imageurl={"/static/images/cultural_resources/Colonaware_at Dean_Hall.jpg"} title={"Dean Hall Plantation Slave Row (38BK2132)"} text={deanHall} />
                    </div>
                    <div className={styles.d_project_images} style={{borderTop: "2px solid black"}}>
                        <Image className={styles.project_image} width={800/2} height={627/2} src="/static/images/cultural_resources/dean_hall_plantation.png"/>
                        <Image className={styles.project_image} width={496/2} height={640/2} src="/static/images/cultural_resources/dean_hall_vol_1.png" />
                    </div>
                    <div className={styles.d_dropcard} style={{borderTop: "2px solid black"}}>
                        <Imagecard_l imageurl={"/static/images/specialty_research/new_gaillard_graves.png"} imagealt={`new gaillard gravesite`} width={586} height={440} title={`Gaillard Graves Project`} text={gaillardGraves}/>
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

export default Projects;
