import { Container } from '../../Container';
import styles from './Cases.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';


const Cases = () => {
    const imageTitle = ['Meeting', 'Excellent work', 'Interesting work', 'Building', 'Agreement', 'Great working atmosphere'];

    const imagePath = (num, ext) => {
        const path = require(`../../../assets/cases/cases${num}.${ext}`);
        return path;
    }

    const imagePath2x = (num, ext) => {
        const path = require(`../../../assets/cases/cases${num}@2x.${ext}`);
        return path;
    }

    const [lightboxController, setLightboxController] = useState({ toggler: false, slide: 1 });
    
    const images = imageTitle.map((item, index) => {
        return imagePath2x(index + 1, 'jpg');
    })
    
    function openLightboxOnSlide(number) {
        setLightboxController({
        toggler: !lightboxController.toggler,
        slide: number
        });
    }
    
    return (
    <section className={styles.cases} id="cases">
        <Container className={styles.casesContainer}>
            <div>
                <p className={styles.casesSubtitle}>This is what we do</p>
                <h2 className={styles.casesTitle}>Business Cases</h2>
                <p className={styles.casesText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            </div>
            <div className={classNames(styles.casesList, 'offds', 'lb-outerContainer')}>
                {imageTitle.map((title, index) => (
                    <a key={index} onClick={(e) => {
                            e.preventDefault()
                            openLightboxOnSlide(index + 1)
                        }}
                            href={imagePath2x(index + 1, 'jpg')} className={styles.casesItem}>
                        <picture>
                            <source srcSet={`${imagePath(index+1, 'webp')} 1x, ${imagePath2x(index+1, 'webp')} 2x`} type="image/webp"/>
                            <source srcSet={`${imagePath(index+1, 'jpg')} 1x, ${imagePath2x(index+1, 'jpg')} 2x`} type="image/jpg"/>
                            <img className={styles.casesImg} src={imagePath(index+1, 'jpg')} alt={title} />
                        </picture>
                    </a>
                ))}
            </div>
        </Container>
        <FsLightbox
            toggler={lightboxController.toggler}
            sources={[
            ...images
            ]}
            slide={lightboxController.slide}
        />
    </section>

    )
}

export default Cases;