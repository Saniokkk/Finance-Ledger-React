import { Container } from "../../Container";
import styles from './Hero.module.scss';
import icon from '../../../assets/icons.svg';

const Hero = () => {
    
    return(
    <section className={styles.hero}>
    <Container className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>The Sky Is The Limit</h1>
        <p className={styles.heroText}>We provide world class financial assistance</p>
        <button type="button" className={styles.heroButton}>
            <svg className={styles.iconBtn} width="9" height="18">
                <use href={`${icon}#icon-arrow-right`}></use>
            </svg>
            Read More
        </button>
    </Container>
    </section>
    )
}

export default Hero;