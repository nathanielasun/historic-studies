import Link from 'next/link';
import Image from 'next/image';
import styles from './component_styles.module.css';
import Head from 'next/head';
import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
//d prefix convention used for div
//m suffix convention used for mobile

const Header = () => {
    const [menuClicked, setMenuClicked] = useState(false);
    //routine for handling menu button clicking
    const toggleMenu = () => {
        setMenuClicked(!menuClicked);
    }

    return (
        <>
        <Head>
            <link rel="icon" href="./static/images/favicon.png" sizes="any" />
        </Head>
        <div className={`${styles.d_header}`}>
            <div className={`${styles.d_header_top}`}>
                <div className={`${styles.d_header_logo}`}>
                    <Link className={`${styles.logo_home_link}`} href="./"><Image width={313} height={195} src="/static/images/hsl_logo.jpg"/></Link>
                </div>
                <div className={`${styles.d_media_handles}`}>
                    <div className={`${styles.d_insta}`}>
                        <Image/>
                    </div>
                    <div className={`${styles.d_twitter}`}>
                        <Image/>
                    </div>
                    <div className={`${styles.d_facebook}`}>
                        <Image/>
                    </div>
                </div>
            </div>
            
            <div className={`${styles.d_header_bottom}`}>
                <div className={`${styles.d_header_list}`}>
                    <ul className={`${styles.header_list}`}>
                        <li className={`${styles.header_list_item}`}><Link className={`${styles.header_link}`} href="../">HOME</Link></li>
                        <li className={`${styles.header_list_item}`}><Link className={`${styles.header_link}`} href="../about">ABOUT</Link></li>
                        <li className={`${styles.header_list_item}`}>
                            <div className={`${styles.header_link}`}>SERVICES
                            <ul className={`${styles.services_list}`}>
                                <li className={`${styles.service_item}`}><Link className={`${styles.service_item_link}`} href="../services/specialty-research" >Specialty Research</Link></li>
                                <li className={`${styles.service_item}`}><Link className={`${styles.service_item_link}`} href="" >Oral History Projects</Link></li>
                                <li className={`${styles.service_item}`}><Link className={`${styles.service_item_link}`} href="" >Published Works</Link></li>
                                <li className={`${styles.service_item}`}><Link className={`${styles.service_item_link}`} href="" >Cultural Resources</Link></li>
                            </ul>
                            </div>
                        </li>
                        <li className={`${styles.header_list_item}`}><Link className={`${styles.header_link}`} href="../projects">PROJECTS</Link></li>
                        <li className={`${styles.header_list_item}`}><Link className={`${styles.header_link}`} href="../contact">CONTACT</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.d_header_m}>
            <div className={styles.d_logo_m}>
                <Image className={styles.logo_m} src="/static/images/hsl_logo.jpg" width={104} height={65} />
            </div>
            <div className={styles.d_menu_m} onClick={toggleMenu}>
                <div className={styles.d_burger_m}>
                    <div className={styles.d_top_bun}
                        style={{
                            transition: 'all 0.25s cubic-bezier(.2,.6,.3,1)',
                            transform: menuClicked ? 'rotate(-135deg) translateY(-8.5px) translateX(-8.5px)' : 'rotate(0deg)',
                        }}
                    ></div>
                    <div className={styles.d_middle_patty}
                        style={{
                            transition: 'all 0.125s cubic-bezier(.2,.6,.3,1)',
                            transform: menuClicked ? 'rotateY(90deg)' : 'rotateZ(0deg)',
                        }}
                    ></div>
                    <div className={styles.d_bottom_bun}
                        style={{
                            transition: 'all 0.25s cubic-bezier(.2,.6,.3,1)',
                            transform: menuClicked ? 'rotate(135deg) translateY(8.5px) translateX(-8.5px)' : 'rotate(0deg)',
                        }}
                    ></div>
                </div>
            </div>
            <div 
                className={styles.d_pagelist_m}
                style={{
                    display: menuClicked ? 'block' : 'none',
                }}
            >
                <ul className={styles.pagelist_m}>
                    <li className={styles.pagelist_item_m}><Link className={styles.pagelist_link_m} href="../">HOME</Link></li>
                    <li className={styles.pagelist_item_m}><Link className={styles.pagelist_link_m} href="../about">ABOUT</Link></li>
                    <li className={styles.pagelist_item_m}>
                        <div className={styles.pagelist_link_m}>SERVICES
                            <ul className={styles.services_list_m}>
                                <li className={styles.service_item_m}><Link className={styles.service_item_link_m} href="../services/specialty-research">Specialty Research</Link></li>
                                <li className={styles.service_item_m}><Link className={styles.service_item_link_m} href="../services/oral-history.js">Oral History Projects</Link></li>
                                <li className={styles.service_item_m}><Link className={styles.service_item_link_m} href="../services/published-works.js">Published Works</Link></li>
                                <li className={styles.service_item_m}><Link className={styles.service_item_link_m} href="../services/cultural-resources.js">Cultural Resources</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.pagelist_item_m}><Link className={styles.pagelist_link_m} href="../projects">PROJECTS</Link></li>
                    <li className={styles.pagelist_item_m}><Link className={styles.pagelist_link_m} href="../contact">CONTACT</Link></li>
                </ul>
            </div>
            <Analytics />
            <SpeedInsights />
        </div>
        </>
    )
}

export default Header;