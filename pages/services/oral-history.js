//oral history services page
import Header from '../../components/header';
import Head from 'next/head';
import Footer from '../../components/footer';
import {DropCard_l, DropCard_r} from '../../components/dropdowncard';
import { Imagecard_l, Imagecard_r, Imagecard_db } from '../../components/imagecard';
import styles from "../../styles/services.module.css";

const OralHistory = () => {

    const historicHighway = `\nIn 2008, Brockington and Associates was awarded an oral history project involving the collection of 34 oral histories of long-term residents who have lived in Northwest St. Johns County along the William Bartram Scenic and Historic Highway, a Florida Scenic Highway. Charles Philips served as the Project Manager and Oral Historian. The oral histories involved preparation, interview questionnaire, conducting the interview (eight were videotaped), transcribing the interviews, editing, and printing hard copies. The hard copies and the electronic copies of the interviews were donated to the St. Johns County Library and the St. Augustine Historical Society. Copies were also supplied to the individual narrators. \n\nThe interviews covered topics such as farming, timbering, cattle raising, and life in west St. Johns County along the William Bartram Highway (Florida Route 13) from the 1920s to the 1970s. The interviews included a nationally recognized writer, at least two nationally recognized environmental advocates, local school leaders, political leaders, business leaders, as well as farmers, cattlemen and cattlewomen, turpentiners, moonshiners, and others.  The project was part of a larger National Scenic Byways Grant that included a background history, webpages, Florida Frontiers radio program briefs, and St. Johns County Schools Lesson Plans. Brockington and Associates and Mr. Philips as Project Manager were awarded a Florida Trust for Historic Preservation Education Media Award in 2016. \n\nThe photograph adjacent shows interviewee Earl Weedman showing the Oral Historian how to throw a cast net. Mr. Weedman grew up along the William Bartram Scenic and Historic Highway fishing for a living in the St. Johns River.\n\n(Client: St. Johns County, Florida and William Bartram Scenic and Historic Highway Commission)`
    const ellisSquare = `\nIn 2008, Brockington and Associates were awarded the Ellis Square Oral History Project. Charles Philips served as Project Oral Historian for the project.  The Ellis Square Oral History Project was a component of the Ellis Square history project. Until the 1950s, the square had been the location of the “City Market” since the eighteenth century. The City Market building a post-Civil War structure on the square was removed for a parking garage in the 1950s. The interviews centered on the removal of the parking garage and rededication of the square area as a public space. The project was unique as the parking garage was removed into an underground parking garage below the square. The interviews included 20 members of the local community including the Mayor of Savannah, Project Manager, Construction Manager, and others involved with the conversion of Ellis Square. It included twelve local residents who remembered the City Market Building that was destroyed in the 1950s. All the interviews were videotaped and transcribed.\n\nThe photograph adjacent shows Mr. Philips interviewing Retired Police Detective John White for the Ellis Square Oral History Project in 2008.\n\n(Client: City of Savannah, Georgia Department of Tourism and Film Services)`
    const lamarWallace =  `\nCharles Philips, in his capacity as Oral Historian, has conducted a number of private individual interviews for families. These usually consist of recollections and memories of the early years of the narrator’s life. They are compiled to aid in genealogical pursuits and preserve family memories. In 2011, Mr. Philips conducted a private oral history interview with Lamar E. Wallace of Tyrone, Georgia. Mr. Wallace grew up in Gotebo, southwestern Oklahoma in the 1910s and 1920s. His memory went back to the time of World War I in Oklahoma. After growing up in Oklahoma he served in both the European and Pacific Theatres in World War II. His memoir deals with his youth including such national events as the 1922 Business downturn, the Dust Bowl years, the Great Depression, cotton growing, cattle ranching and World War II. Two interviews were conducted, transcribed, edited, and printed. Mr. Wallace’s unique lifespan was more than 107 years. Upon his death, the interview and hard copies were turned over to his family.\n\nThe photos adjacent show Lamar Wallace, then a Lieutenant in the US Army, in 1943 and at the time of the interview in 2011.\n\n(Client: Family of Lamar Ernest Wallace, Tyrone, Georgia)\n\n`

    return (
        <>
            <Head>
                <title>Oral History | Historic Studies Limited</title>
                <meta property="og:title" content="Cemetary Research | Historic Studies Limited"/>
                <meta property="og:type" content="website"/>
                <meta name="description" content="Historic Studies Limited is operated by Charles Philips, a freelance historian who seeks to provide the best research and analysis on historical sites and landmarks, King's grants, and cemetaries. He also develops oral history projects and home and land history studies." />
            </Head>
            <section className={styles.full_env}>
                <div className={styles.d_encompass}>
                    <div className={styles.d_header}>
                        <Header />
                    </div>
                    <div className={styles.d_title}>
                        <h1 className={styles.title}>Oral History Projects and Service Examples</h1>
                    </div>
                    <div className={styles.d_dropcard} style={{borderTop: "2px solid black"}}>
                        <Imagecard_l 
                        imageurl={"/static/images/oral_history/earl_weedman.png"}
                        imagealt={"Earl weedman casting net"}
                        width={429}
                        height={543}
                        title={`William Bartram Scenic and Historic Highway Oral History Project`}
                        text={historicHighway}
                        />
                    </div>
                    <div className={styles.d_dropcard} style={{borderTop: "2px solid black"}}>
                        <Imagecard_r 
                        imageurl={"/static/images/oral_history/police_interview.png"}
                        imagealt={"Police Interview"}
                        width={420}
                        height={276}
                        title={`City of Savannah Ellis Square Oral History Project`}
                        text={ellisSquare}
                        />
                    </div>
                    <div className={styles.d_dropcard} style={{borderTop: "2px solid black"}}>
                        <Imagecard_db
                        imageProps={
                            [
                                "/static/images/oral_history/lamar_portrait.png",
                                "Portrait of Lamar Wallace",
                                356,
                                433,
                                "/static/images/oral_history/lamar_army.png",
                                "Wallace in front of army vehicle",
                                570,
                                433
                            ]
                        }
                        title={"The Memoir of Captain Lamar Ernest Wallace, 1911-1946"}
                        text={lamarWallace}
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

export default OralHistory;