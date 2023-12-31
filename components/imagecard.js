import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/component_styles.module.css';

//Image card with image on left and description on right
export const Imagecard_l = ({imageurl, imagealt, width, height, title, text}) => {
    return (
        <>
        <div className={styles.d_imagecard}>
            <div className={styles.d_imgcard_img}>
                <Image src={imageurl} className={styles.d_imgbackground} width={0} height={0} style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    filter: "blur(40px)",
                    backgroundImage: imageurl,
                    backgroundSize: "cover",
                    zIndex: "0",
                }}></Image>
                <Image src={imageurl} alt={imagealt} width={width} height={height} className={styles.imgcardimg}></Image>
            </div>
            <div className={styles.d_imgcard_body}>
                <div className={styles.d_imgcard_title}>
                    <h1 className={styles.imgcard_title}>{title}</h1>
                </div>
                <div className={styles.d_imgcard_text}>
                    <p dangerouslySetInnerHTML={{ __html: text }} className={styles.imgcard_text} />
                </div>
            </div>
        </div>
        </>
    );
};

//Image card with image on right and description on left
export const Imagecard_r = ({imageurl, imagealt, width, height, title, text}) => {
    return (
        <>
        <div className={styles.d_imagecard}>
            <div className={styles.d_imgcard_body}>
                <div className={styles.d_imgcard_title}>
                    <h1 className={styles.imgcard_title}>{title}</h1>
                </div>
                <div className={styles.d_imgcard_text}>
                    <p dangerouslySetInnerHTML={{ __html: text}} className={styles.imgcard_text} />
                </div>
            </div>
            <div className={styles.d_imgcard_img}>
            <Image src={imageurl} className={styles.d_imgbackground} width={width} height={height} layout="cover" style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    filter: "blur(40px)",
                    backgroundImage: imageurl,
                    backgroundSize: "cover",
                    zIndex: "0",
                }}></Image>
                <Image src={imageurl} alt={imagealt} width={width} height={height} className={styles.imgcardimg}></Image>
            </div>
        </div>
        </>
    );
};


