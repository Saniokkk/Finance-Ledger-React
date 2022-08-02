import { Container } from "../../Container";
import styles from './Hero.module.scss';

const Hero = () => {
    
    return(
    <section className={styles.hero}>
    <Container>
        <h1 className={styles.heroTitle}>The Sky Is The Limit</h1>
        <p className={styles.heroText}>We provide world className financial assistance</p>
        <button type="button" className={styles.heroButton}>
            <svg className="hero__icon-btn" width="7" height="10">
                <use href="../../../assets/icons.svg#icon-arrow-right"></use>
            </svg>
            Read More
        </button>
    </Container>
    </section>
    )
}

export default Hero;