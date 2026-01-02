//component for drop down image card. "+recent projects" and such
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from '../components/component_styles.module.css';
/*
  imageurl - url to image to display on card
  imagealt - alt text for image
  width - width of image
  height - height of image
  title - title text of card
  text - main body text of card
  droptext - text to display on dropdown panel (before expanding)
  links - array of links to display under panel | array of type [['link', 'link label'], ['link', 'link label']]
*/

export const DropCard_l = ({ imageurl, imagealt, width, height, title, text, droptext, links }) => {
    const [isExpanded, setIsExpanded] = useState(false); //state of expansion for dropdown
    const [isAnimating, setIsAnimating] = useState(false); //state of animation for dropdown
    //routine for dropdown animation
    const togglePanel = () => {
        setIsAnimating(true);
        setIsExpanded(!isExpanded);
      };
    
    return (
        <>
        <div className={styles.d_dropcard}>
            <div className={styles.d_dropcard_l}>
                <div className={styles.d_dropimage}>
                    <Image className={styles.dropimage} src={imageurl} alt={imagealt} height={height} width={width} />
                </div>
                <div className={styles.d_panel}>
                    <div 
                        onClick={togglePanel}
                        style={{          
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            backgroundColor: isExpanded ? '#508190' : 'inherit', // Highlight during animation
                            color: isExpanded ? '#F5FAF1' : 'black',
                        }}
                        
                        className={styles.d_paneltoggle}
                    >
                        <h1 className={styles.panellabel}>{isExpanded ? "- " + droptext: "+ " + droptext}</h1>
                    </div>
                    <div
                        style={{
                            overflow: 'hidden',
                            transition: 'height 0.3s ease',
                            height: isExpanded ? `${40*links.length}px` : 0,
                            'border-top': isExpanded? '2px solid black' : 'none',
                        }}
                        className={styles.d_panellinks}
                    >
                        <ul className={styles.linklist}>
                            {links.map((link, index) => (
                                <li className={styles.li_droplink} key={index}>
                                    <Link className={styles.droplink} href={link[0]} target={'_blank'}>{link[1]}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className={styles.d_dropdown_r}>
                <div className={styles.d_dropdown_text}>
                    <div className={styles.d_droptitle}>
                        <h1 className={styles.droptitle}>{title}</h1>
                    </div>
                    <div className={styles.d_droptext}>
                        <p className={styles.droptext}>{text}</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


//copied code for right dropdown panel component
export const DropCard_r = ({ imageurl, imagealt, width, height, title, text, droptext, links }) => {
    const [isExpanded, setIsExpanded] = useState(false); //state of expansion for dropdown
    const [isAnimating, setIsAnimating] = useState(false); //state of animation for dropdown
    //routine for dropdown animation
    const togglePanel = () => {
        setIsAnimating(true);

          setIsExpanded(!isExpanded);
          setIsAnimating(false);
 // Adjust the delay duration (in milliseconds) as needed
      };
    //routine for handling dropdown animation
    
    return (
        <>
        <div className={styles.d_dropcard}>
            <div className={styles.d_dropdown_r}>
                <div className={styles.d_dropdown_text}>
                    <div className={styles.d_droptitle}>
                        <h1 className={styles.droptitle}>{title}</h1>
                    </div>
                    <div className={styles.d_droptext}>
                        <p className={styles.droptext}>{text}</p>
                    </div>
                </div>
            </div>
            <div className={styles.d_dropcard_l}>
                <div className={styles.d_dropimage}>
                    <Image className={styles.dropimage} src={imageurl} alt={imagealt} height={height} width={width} />
                </div>
                <div className={styles.d_panel}>
                    <div 
                        onClick={togglePanel}
                        style={{          
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            backgroundColor: isExpanded ? '#508190' : 'inherit', // Highlight during expansion
                            color: isExpanded ? '#F5FAF1' : 'black',
                        }}
                        className={styles.d_paneltoggle}
                    >
                        <h1 className={styles.panellabel}>{isExpanded ? "- " + droptext: "+ " + droptext}</h1>
                    </div>
                    <div
                        style={{
                            overflow: 'hidden',
                            transition: 'height 0.3s ease',
                            height: isExpanded ? `${40*links.length}px`: 0,
                            'border-top': isExpanded ? '2px solid black' : 'none',
                        }}
                        className={styles.d_panellinks}
                    >
                        <ul className={styles.linklist}>
                            {links.map((link, index) => (
                                <li className={styles.li_droplink} key={index}>
                                    <Link className={styles.droplink} href={link[0]} target={'_blank'}>{link[1]}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
