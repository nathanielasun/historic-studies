//Cultural Resource services page
import Header from '../../components/header';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Footer from '../../components/footer';
import { Imagecard_db } from '../../components/imagecard';
import styles from "../../styles/services.module.css";

const CulturalResources = () => {
    const indigoVats = `Brockington and Associates, Charleston, SC [2009]. \n\nIn 2008, Brockington and Associates was authorized by James Kerr to conduct a cultural resources investigation of his land along Maybank Road on Johns Island, South Carolina. Charles Philips was assigned as Senior Historian for the project. In the process of the survey, Mr. Philips was requested by the Project Manager and the South Carolina State Historic Preservation Office [SC SHPO] to investigate a Colonial brick ruin on the property. They proposed that the structure was either some early cattle trough or a foundation for a house. \n\nMr. Philips investigated the site and identified the four chambered structure as a set of inline indigo vats developed by the Fenwick family in the 1740s. It is the only set of indigo vats known to exist that match the ones described by Eliza Luca Pinckney in her 1744 discussion of her indigo experimentations. Apparently, the Fenwick’s, who lived only a few miles from where she was doing her work, developed their vats at the same time and likely coordinated their efforts with hers. The site was determined eligible for the National Register of Historic Places. They have been featured in the local news media and in a 2020 article in the Smithsonian Magazine. \n\nThe drawing shows an artist’s conception of the vats on the Kerr Tract as they appeared when constructed. The photograph shows the interior of one of the vats today.\n\n(Client: James Kerr, Johns Island, South Carolina)`
    const eastEdisto = `\nHistoric Overview and Strategic Plan for East Edisto. East Edisto Manuscript Series I. [2008] \n\nIn 2007, Brockington and Associates was asked to join the Mead Westvaco Planning Team for the 72,000-acre East Edisto Development Project. East Edisto is a large 200,000 acre region of timberland and farms where Mead Westvaco was the primary landowner and had been for nearly 70 years. The land lay within Charleston and Dorchester county plans for development. It was also a historic area with many possible cultural resources dating to the seventeenth century. Charles Philips was given the task of Project Historian and compiled an overview of the history of the massive region between the Edisto and the Ashley River. The area included dozens of former plantations, farms, tar pits, rice fields, settlement sites, fortifications, houses, and numerous other structures as part of the three-centuries of Euro-African settlement. It was particularly rich in African American Antebellum and Postbellum sites. Mr. Philips consulted and consolidated archives from numerous locations that included public and private papers, public meetings, oral histories, plats, and maps to prepare the historic overview. The East Edisto project is ongoing, and he has remained an integral part of the cultural resources work there. \n\nThe map below shows the East Edisto region in brown. The photograph shows Charles Philips and Ralph Bailey gathering information from long time residents of the area at one of the many public meetings.\n\n(Client: MeadWestvaco Development Company [MWV])`
    const stJohnStudy = `\nIn 2012-2013, Brockington and Associates were authorized by St. Johns County, Florida to prepare a historic study and architectural review of Northwest St. Johns County. The project involved a history of the region including identification of potential archaeological sites and architecturally significant structures. The work centered around Florida Highway 13, also known as the William Bartram Scenic and Historic Roadway. Charles Philips was Project Manager for the work. It involved archival research, oral history interviews, location of historic maps and plats, and architectural assessment of 50+ year old buildings in the area. The area was first settled by the Spanish in the 16th century and included information on former fortifications, missions, British and Second Spanish Period Plantations, American Antebellum settlements, Civil War engagements, turpentine sites, and Post Bellum river settlements such as Fruit Cove and Switzerland, historic roadways, as well as subdivision of the region for river houses as early as the 1920s.  The work along with the oral histories, radio program topics, and Secondary School lesson plans won a Florida Trust for Historic Preservation Award. \n\nThe drawing below shows two US Gunboats, the “Maple Leaf” and the “General Hunter,” sunk by Confederates off Northwest St. Johns County during the Civil War. The photograph below shows a family picnic along the river in the 1930s used in the Lesson Plans.\n\n(Client: St. Johns County, Florida and William Bartram Scenic and Historic Highway)`

    return (
        <>
            <Head>
                <title>Cultural Resources | Historic Studies Limited</title>
                <meta property="og:title" content="Cultural Resources | Historic Studies Limited"/>
                <meta property="og:type" content="website"/>
                <meta name="description" content="Historic Studies Limited is operated by Charles Philips, a freelance historian who seeks to provide the best research and analysis on historical sites and landmarks, King's grants, and cemetaries. He also develops oral history projects and home and land history studies." />
            </Head>
            <section className={styles.full_env}>
                <div className={styles.d_encompass}>
                    <div className={styles.d_header}>
                        <Header />
                    </div>
                    <div className={styles.d_title}>
                        <h1 className={styles.title}>Cultural Resource Services</h1>
                    </div>
                    <div className={styles.d_dropcard}
                        style=
                        {{
                            borderTop: "2px solid black",
                            borderBottom: "2px solid black",
                        }}
                    >
                       <Imagecard_db
                            title={`Cultural Resources Survey of the Kerr Tract [location of Fenwick Indigo Vats (38CH1292)]`}
                            text={indigoVats}
                            imageProps=
                            {[
                                "/static/images/cultural_resources/indigo_vat.png",
                                "Indigo vat blueprints",
                                636,
                                424,
                                "/static/images/cultural_resources/indigo_vat_open.png",
                                "Indigo vat current picture",
                                622,
                                424
                            ]}
                       />
                    </div>
                    <div className={styles.d_dropcard}
                        style=
                        {{
                            borderBottom: "2px solid black"
                        }}
                    >
                        <Imagecard_db
                            title={`Historic Overview and Strategic Plan for East Edisto. East Edisto Manuscript Series I. [2008]`}
                            text={eastEdisto}
                            imageProps=
                            {[
                                "/static/images/cultural_resources/east_edisto.png",
                                "East Edisto Map",
                                636,
                                424,
                                "/static/images/cultural_resources/philips_gathering_info.png",
                                "Mr. Philips gathering information from residents",
                                715,
                                488,
                            ]}
                       />
                    </div>
                    <div className={styles.d_dropcard}>
                        <Imagecard_db
                            title={`Northwest St. Johns County Historic Study`}
                            text={stJohnStudy}
                            imageProps=
                            {[
                                "/static/images/cultural_resources/gunboats.png",
                                "Maple leaf and General Hunter",
                                636,
                                424,
                                "/static/images/cultural_resources/1930s_family_picnic.png",
                                "A 1930s family picnic on the River",
                                572,
                                390,
                            ]}
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

export default CulturalResources;