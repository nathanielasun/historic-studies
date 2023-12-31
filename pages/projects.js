import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/header';
import Footer from '../components/footer';
import {Imagecard_l, Imagecard_r} from '../components/imagecard';
import Image from 'next/image';
import {DropCard_l, DropCard_r} from '../components/dropdowncard';
import styles from '../styles/projects.module.css';

const Projects = () => {
    const aerialEdisto = `\nMr. Philips uses his understanding of archival records to identify owners' claims to marshlands via a King's Grant. In this project, Mr. Philips had to provide archival support for the owner's claim to a tract of marshlands on Little Edisto island, South Carolina. He had to demonstrate an understanding of geneology, historic development, and family records as well as existing records to establish a chain of title from the 1786 grant of marshlands to the current owner. \n\nHe had to surmount issues such as missing deeds and destroyed records. He was able to complete the record to the satisfaction of the South Carolina Attorney General's office. He participated with a team in presenting the owner's claims to the marshlands. The photograph shows the original grant and the location of the marshlands on a current aerial photograph of Little Edisto Island.`;
    const deanHall = `\nMr. Philips was the senior researcher and historian for the Dean Hall plantation site project. The project involved county, state, and federal archives, and also involved oral history interviews, geneological studies, and family papers of previous owners to help formulate the story of the Dean Hall slave row. This project gained national attention because of the story of the enslaved people on Dean Hall, dating to the early Eighteenth-Century. Artifacts and the history are currently in the national museum of African-American history and culture in Washington, DC. The photograph of the man illustrates an excavation of one of the enslaved people's cabins. The photographs below are of a Nineteenth-Century plat of Dean Hall and the report cover.`
    const gossFamily = `\nIn 2020, Mr. Philips completed a year-long study of the Goss family of James Island, South Carolina. The family members were seeking information on their grandparents and great-grandparents. Mr. Philips determined that they were descendants of Isaac Goss of Shallot, North Carolina. Mr. Goss escaped slavery during the Civil War and enlisted in the United States Navy. Later he married Margaret Oliver of Georgetown. The couple made their home in Wadmalaw Island and later James Island. The current Goss family members descend from Isaac and Margaret Goss. Through research and application to the veterans administration, Mr. Philips was able to help them obtain a VA headstone Isaac Goss' service during the Civil War.`
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
                    <div className={styles.d_project_images}>
                        <Image className={styles.project_image} width={800} height={627} src="/static/images/cultural_resources/dean_hall_plantation.png"/>
                        <Image className={styles.project_image} width={496} height={640} src="/static/images/cultural_resources/dean_hall_vol_1.png" />
                    </div>
                    <div className={`${styles.d_imagecard}`}>
                        <Image className={styles.project_image} width={300} height={400} src="/static/images/specialty_research/goss_gravesite.jpeg" />
                        <Imagecard_r className={`${styles.card}`} imagealt={"Goss Family title and photos"} width="335" height="435" imageurl={"/static/images/specialty_research/goss_family_title.png"} title={"Goss Family Investigation - James Island, South Carolina"} text={gossFamily} />
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