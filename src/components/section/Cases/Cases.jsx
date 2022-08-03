import { Container } from '../../Container';
import styles from './Cases.module.scss';
import classNames from 'classnames';


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

    const handleClick = (event) => {
        event.preventdefault()
        console.log(event)
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
                    <a key={index} onClick={handleClick} href={imagePath2x(index+1, 'jpg')} data-lightbox="cases" data-title={title} className={styles.casesItem}>
                        <picture>
                            <source srcSet={`${imagePath(index+1, 'webp')} 1x, ${imagePath2x(index+1, 'webp')} 2x`} type="image/webp"/>
                            <source srcSet={`${imagePath(index+1, 'jpg')} 1x, ${imagePath2x(index+1, 'jpg')} 2x`} type="image/jpg"/>
                            <img className={styles.casesImg} src={imagePath(index+1, 'jpg')} alt={title} />
                        </picture>
                    </a>
                ))}
            </div>
        </Container>
    </section>

    )
}

export default Cases;