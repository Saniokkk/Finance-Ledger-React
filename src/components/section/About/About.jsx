import { Container } from '../../Container';
import styles from './About.module.scss';

const About = () => {
    

    return (
    <section class={styles.about} id="about">
        <Container class={styles.aboutContainer}>
            <picture>
                <source srcset="../../../assets/home/people.webp 1x, ../../../assets/home/people@2x.webp 2x"/>
                <source srcset="../../../assets/home/people.jpg 1x, ../../../assets/home/people@2x.jpg 2x"/>
                <img class={styles.aboutImg} src="../../../assets/home/people.jpg" alt="people" />
            </picture>
            <div class={styles.aboutDescription}>
                <p class={styles.aboutSubtitle}>What you are looking for</p>
                <h2 class={styles.aboutTitle}>We provide bespoke solutions</h2>
                <p class={styles.aboutText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam
                aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
                <button type="button" class={styles.aboutBtn}>Read More</button>
            </div>
        </Container>
    </section>
    )
}

export default About;