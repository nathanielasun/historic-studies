import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';
import Carousel from '../components/carousel'
import ImageCard from '../components/ui/ImageCard/ImageCard';
import homestyle from '../styles/home.module.css';
import Image from 'next/image';
import { getHomepageContent } from '../lib/content';

export async function getStaticProps() {
    const content = getHomepageContent();
    return {
        props: {
            content
        }
    };
}

const Home = ({ content }) => {
    return (
        <>
<Head >
    <title>{content.meta.title}</title>
    <meta property="og:title" content={content.meta.ogTitle}/>
    <meta property="og:type" content={content.meta.ogType}/>
    <meta name="description" content={content.meta.description} />
</Head>
<section className={`${homestyle.full_env}`} >
    <div className={`${homestyle.d_encompass}`}>
        <div className={`${homestyle.d_header}`}>
            <Header />
        </div>
        <div className={homestyle.d_byline}>
                <Image
                    className={homestyle.byline}
                    src={content.hero.image.src}
                    alt={content.hero.image.alt}
                    width={content.hero.image.width}
                    height={content.hero.image.height}
                />
            </div>
        <div className={`${homestyle.d_carousel}`}>
            <Carousel />
        </div>
        <div className={`${homestyle.d_cards}`}>
            {content.sections.map((section) => (
                <div key={section.id} className={`${homestyle.d_card}`}>
                    <ImageCard
                        className={`${homestyle.card}`}
                        variant="image-left"
                        image={{
                            src: section.image.src,
                            alt: section.image.alt,
                            width: section.image.width,
                            height: section.image.height
                        }}
                        title={section.title}
                        text={section.content}
                    />
                </div>
            ))}
        </div>
        <div className={`${homestyle.d_footer}`}>
            <Footer />
        </div>
    </div>
</section>
</>
    )
}

export default Home;
