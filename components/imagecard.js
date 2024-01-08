import Link from 'next/link';
import Image from 'next/image';
import styles from '../components/component_styles.module.css';

//Image card with image on left and description on right
export const Imagecard_l = ({imageurl, imagealt, width, height, title, text}) => {
    return (
        <>
        <div className={styles.d_imagecard}>
            <div className={styles.d_imgcard_img}>
                <Image 
                src={imageurl} 
                className={styles.d_imgbackground} 
                width={0} 
                height={0} 
                quality={25}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    filter: "blur(40px)",
                    backgroundImage: imageurl,
                    backgroundSize: "cover",
                    zIndex: "0",
                }}>
                </Image>
                <Image 
                    src={imageurl} 
                    alt={imagealt} 
                    width={width} 
                    height={height} 
                    className={styles.imgcardimg}>
                </Image>
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

//Image card with two images and text between
export const Imagecard_m = ({imageProps, title, text}) => {
    const ETimages = {
        IMAGE1URL : 0,
        IMAGE1ALT : 1,
        IMAGE1WIDTH : 2,
        IMAGE1HEIGHT : 3,
        IMAGE2URL : 4,
        IMAGE2ALT : 5,
        IMAGE2WIDTH : 6,
        IMAGE2HEIGHT : 7,
    };
    return (
        <>
        <div className={styles.d_imagecard}>
            <div className={styles.d_imgcard_img}>
                <Image 
                src={imageProps[ETimages.IMAGE1URL]} 
                className={styles.d_imgbackground} 
                width={imageProps[ETimages.IMAGE1WIDTH]} 
                height={imageProps[ETimages.IMAGE1HEIGHT]} 
                quality={25}
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    filter: "blur(40px)",
                    backgroundImage: imageProps[ETimages.IMAGE1URL],
                    backgroundSize: "cover",
                    zIndex: "0",
                }}>
                </Image>
                <Image 
                    src={imageProps[ETimages.IMAGE1URL]} 
                    alt={imageProps[ETimages.IMAGE1ALT]} 
                    width={imageProps[ETimages.IMAGE1WIDTH]} 
                    height={imageProps[ETimages.IMAGE1HEIGHT]} 
                    className={styles.imgcardimg}>
                </Image>
            </div>
            <div className={styles.d_imgcard_body}>
                <div className={styles.d_imgcard_title}>
                    <h1 className={styles.imgcard_title}>{title}</h1>
                </div>
                <div className={styles.d_imgcard_text}>
                    <p dangerouslySetInnerHTML={{ __html: text}} className={styles.imgcard_text} />
                </div>
            </div>
            <div className={styles.d_imgcard_img}>
            <Image 
            src={imageProps[ETimages.IMAGE2URL]} 
            className={styles.d_imgbackground} 
            width={imageProps[ETimages.IMAGE2WIDTH]} 
            height={imageProps[ETimages.IMAGE2HEIGHT]} 
            quality={25}
            style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    filter: "blur(40px)",
                    backgroundImage: imageProps[ETimages.IMAGE2URL],
                    backgroundSize: "cover",
                    zIndex: "0",
                }}>
            </Image>
            <Image 
                src={imageProps[ETimages.IMAGE2URL]} 
                alt={imageProps[ETimages.IMAGE2ALT]} 
                width={imageProps[ETimages.IMAGE2WIDTH]} 
                height={imageProps[ETimages.IMAGE2HEIGHT]} 
                className={styles.imgcardimg}>
            </Image>
            </div>
        </div>
        </>
    );
}

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
            <Image 
            src={imageurl} 
            className={styles.d_imgbackground} 
            width={width} height={height} 
            quality={25}
            style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    filter: "blur(40px)",
                    backgroundImage: imageurl,
                    backgroundSize: "cover",
                    zIndex: "0",
                }}>
            </Image>
            <Image 
                src={imageurl} 
                alt={imagealt} 
                width={width} 
                height={height} 
                className={styles.imgcardimg}>
            </Image>
            </div>
        </div>
        </>
    );
};

//Image card with textbox above two images (double bottom)
export const Imagecard_db = ({imageProps, title, text}) => {
    const ETimages = {
        IMAGE1URL : 0,
        IMAGE1ALT : 1,
        IMAGE1WIDTH : 2,
        IMAGE1HEIGHT : 3,
        IMAGE2URL : 4,
        IMAGE2ALT : 5,
        IMAGE2WIDTH : 6,
        IMAGE2HEIGHT : 7,
    };

    return (
        <>
        <div className={styles.d_imagecard_db}>
            <div className={styles.d_imgcard_body}>
                <div className={styles.d_imgcard_title}>
                    <h1 className={styles.imgcard_title}>{title}</h1>
                </div>
                <div className={styles.d_imgcard_text}>
                    <p dangerouslySetInnerHTML={{ __html: text}} className={styles.imgcard_text} />
                </div>
            </div>
            <div className={styles.d_images_db}>
                <div className={styles.d_imgcard_img}>
                    <Image src={imageProps[ETimages.IMAGE1URL]} 
                    className={styles.d_imgbackground} 
                    width={imageProps[ETimages.IMAGE1WIDTH]} 
                    height={imageProps[ETimages.IMAGE1HEIGHT]} 
                    quality={25}
                    style={{
                        position: "absolute",
                        maxWidth: "100%",
                        height: "auto",
                        filter: "blur(40px)",
                        backgroundImage: imageProps[ETimages.IMAGE1URL],
                        backgroundSize: "cover",
                        zIndex: "0",
                    }}>
                    </Image>
                    <Image 
                        src={imageProps[ETimages.IMAGE1URL]} 
                        alt={imageProps[ETimages.IMAGE1ALT]} 
                        width={imageProps[ETimages.IMAGE1WIDTH]} 
                        height={imageProps[ETimages.IMAGE1HEIGHT]} 
                        className={styles.imgcardimg}
                        style=
                        {{
                            maxWidth: "100%",
                            height: "auto"
                        }}
                        >              
                    </Image>
                </div>
                <div className={styles.d_imgcard_img}>
                    <Image src={imageProps[ETimages.IMAGE2URL]} 
                    className={styles.d_imgbackground} 
                    width={imageProps[ETimages.IMAGE2WIDTH]} 
                    height={imageProps[ETimages.IMAGE2HEIGHT]} 
                    quality={25}
                    style={{
                        position: "absolute",
                        maxWidth: "100%",
                        height: "auto",
                        filter: "blur(40px)",
                        backgroundImage: imageProps[ETimages.IMAGE2URL],
                        backgroundSize: "cover",
                        zIndex: "0",
                    }}>
                    </Image>
                    <Image 
                        src={imageProps[ETimages.IMAGE2URL]} 
                        alt={imageProps[ETimages.IMAGE2ALT]} 
                        width={imageProps[ETimages.IMAGE2WIDTH]} 
                        height={imageProps[ETimages.IMAGE2HEIGHT]} 
                        className={styles.imgcardimg}
                        style=
                        {{
                            maxWidth: "100%",
                            height: "auto",
                        }}
                        >
                    </Image>
                </div>
                </div>
        </div>
        </>
    );
};
