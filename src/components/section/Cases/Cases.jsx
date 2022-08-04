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

    // const checkBtn = (e) => {

    // }

    // const handlePreBtn = (e) => {
    //     // console.log(lightboxController.slide)
    //     const numbers = document.querySelector('.fslightbox-slash');
    //     const currentImg = numbers.previousElementSibling.textContent;
    //     console.log(currentImg - 1)
    //     const totalImg = numbers.nextElementSibling.textContent;
    //     const preBtn = document.querySelector('div[title="Previous slide"]');
    //     const nextBtn = document.querySelector('div[title="Next slide"]');
    //     if (Number(currentImg) === 1) {
    //         preBtn.style.display = 'none';
    //     }
    //     if(Number(currentImg) - 1 >= 1){
    //         preBtn.style.display = 'flex';
    //     }
    //     if (totalImg - currentImg === 1) {
    //         nextBtn.style.display = 'none';
    //     }
    //     if(totalImg - currentImg > 1){
    //         nextBtn.style.display = 'flex';
    //     }
    // }

    // const handleNextBtn = (e) => {
    //     // console.log(lightboxController.slide)
    //     const numbers = document.querySelector('.fslightbox-slash');
    //     const currentImg = numbers.previousElementSibling.textContent;
    //     // console.log(currentImg)
    //     const totalImg = numbers.nextElementSibling.textContent;
    //     const preBtn = document.querySelector('div[title="Previous slide"]');
    //     const nextBtn = document.querySelector('div[title="Next slide"]');
    //     console.log(currentImg)
    //     if (Number(currentImg) === 1) {
    //         preBtn.style.display = 'none';
    //     }
    //     if(Number(currentImg) > 1){
    //         preBtn.style.display = 'flex';
    //     }
    //     if (totalImg - currentImg === 1) {
    //         nextBtn.style.display = 'none';
    //     }
    //     if(totalImg - currentImg > 1){
    //         nextBtn.style.display = 'flex';
    //     }
    // }

    // const handleOpen = (e) => {
    //     const numbers = document.querySelector('.fslightbox-slash');
    //     const currentImg = numbers.previousElementSibling.textContent;
    //     const totalImg = numbers.nextElementSibling.textContent;
    //     const preBtn = document.querySelector('div[title="Previous slide"]');
    //     const nextBtn = document.querySelector('div[title="Next slide"]');
    //     preBtn.addEventListener('click', handlePreBtn);
    //     nextBtn.addEventListener('click', handleNextBtn);
    //     if (currentImg <= 1) {
    //         preBtn.style.display = 'none';
    //     }
    //     if (totalImg - currentImg === 0) {
    //         nextBtn.style.display = 'none';
    //     }

    // }

    // const handleClose = (e) => {
    //     const preBtn = document.querySelector('div[title="Previous slide"]');
    //     const nextBtn = document.querySelector('div[title="Next slide"]');
    //     preBtn.removeEventListener('click', handlePreBtn);
    //     nextBtn.removeEventListener('click', handleNextBtn);
    // }
    
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
            // onOpen={() => handleOpen()}
            // onClose={() => handleClose()}
        />
    </section>

    )
}

export default Cases;