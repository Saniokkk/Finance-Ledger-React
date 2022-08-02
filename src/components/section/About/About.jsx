import { Container } from '../../Container';
import styles from './About.module.scss';
import imgWebp1x from '../../../assets/home/people.webp';
import imgWebp2x from '../../../assets/home/people@2x.webp';
import imgJpg1x from '../../../assets/home/people.jpg';
import imgJpg2x from '../../../assets/home/people@2x.jpg';

const About = () => {
    

    return (
    <section className={styles.about} id="about">
        <Container className={styles.aboutContainer}>
            <picture>
                <source srcSet={`${imgWebp1x} 1x, ${imgWebp2x} 2x`} />
                <source srcSet={`${imgJpg1x} 1x, ${imgJpg2x} 2x`}/>
                <img className={styles.aboutImg} src={imgJpg1x} alt="people" />
            </picture>
            <div className={styles.aboutDescription}>
                <p className={styles.aboutSubtitle}>What you are looking for</p>
                <h2 className={styles.aboutTitle}>We provide bespoke solutions</h2>
                <p className={styles.aboutText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam
                aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                <button type="button" className={styles.aboutBtn}>Read More</button>
            </div>
        </Container>
    </section>
    )
}

export default About;