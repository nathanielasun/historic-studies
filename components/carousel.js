//carousel image component

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../components/component_styles.module.css'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        fade: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={styles.d_slider}>
        <Slider {...settings}>
            <div className={styles.d_slide}>
                <div className={styles.d_images}>
                    <Image className={styles.slide} style={{margin: '0px', border: 'none'}} src="/static/images/specialty_research/crypt.png" width={450} height={320} loading="eager" />
                    <Image className={styles.slide} style={{margin: '0px'}} src="/static/images/specialty_research/specialty_research_slide.png" alt="image" width={677} height={320} loading="eager"/>
                    <Image className={styles.slide} style={{margin: '0px', border: 'none'}} src="/static/images/specialty_research/goss_reunion.png" width={280} height={320} loading="eager"/>
                </div>
                <div className={styles.d_slide_text}>
                    <p className={styles.slide_text}>Specialty Research</p>
                </div>
            </div>
            <div className={styles.d_slide}>
                <div className={styles.d_images}>
                <Image className={styles.slide} src="/static/images/oral_history/client_interview_2.png" alt="image" width={584} height={320} loading="eager"/>
                <Image className={styles.slide} src="/static/images/oral_history/Stetson_kennedy.jpg" width={240} height={320} loading="eager"/>
                <Image className={styles.slide} src="/static/images/oral_history/Glover_Perry_2.jpg" width={569} height={320} loading="eager"/>
                </div>
                <div className={styles.d_slide_text}>
                    <p className={styles.slide_text}>Oral History Projects</p>
                </div>
            </div>
            <div className={styles.d_slide}>
                <div className={styles.d_images}>
                <Image className={styles.slide} src="/static/images/published_works/bor_water_control_structure.png" width={248} height={320} loading="eager" />
                <Image className={styles.slide} src="/static/images/published_works/as_mobile_goes.png" width={248} height={320} loading="eager" />
                <Image className={styles.slide} src="/static/images/published_works/william_bartrams_travels.png" width={248} height={320} loading="eager" />
                <Image className={styles.slide} src="/static/images/published_works/red_book_cover.png" width={248} height={320} loading="eager"/>
                </div>
                <div className={styles.d_slide_text}>
                    <p className={styles.slide_text}>Published Works</p>
                </div>
            </div>
            <div className={styles.d_slide}>
                <div className={styles.d_images}>
                    <Image className={styles.slide} style={{margin: "0px"}} src="/static/images/cultural_resources/Colonaware_at Dean_Hall.jpg" width={426} height={320} loading="eager"/>
                    <Image className={styles.slide} style={{margin: "0px"}} src="/static/images/cultural_resources/dean_hall_vol_1.png" width={248} height={320} loading="eager"/>
                    <Image className={styles.slide} style={{margin: "0px"}} src="/static/images/cultural_resources/dr_site_cain_holy.jpg" width={427} height={320} loading="eager"/>
                </div>
                <div className={styles.d_slide_text}>
                    <p className={styles.slide_text}>{"Cultural Resources (formal reports)"}</p>
                </div>
            </div>
        </Slider>
        </div>
    );
};

export default Carousel;