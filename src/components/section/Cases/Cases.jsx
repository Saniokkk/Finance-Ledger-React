import { Container } from '../../Container';
import styles from './Cases.module.scss';
import classNames from 'classnames';

const Cases = () => {
    
    return (
    <section classNameName={styles.cases} id="cases">
        <Container className="test">
            <div>
                <p className={styles.casesSubtitle}>This is what we do</p>
                <h2 className={styles.casesTitle}>Business Cases</h2>
                <p className={styles.casesText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
            </div>
            <div className={classNames(styles.casesList, 'offds', 'lb-outerContainer')}>
                
                <a href="./assets/cases/cases2@2x.jpg" data-lightbox="cases" data-title="Excellent work" className={styles.casesItem}>
                    <picture>
                        <source srcset="../../../assets/cases/cases2.webp 1x, ../../../assets/cases/cases2@2x.webp 2x" />
                        <source srcset="../../../assets/cases/cases2.jpg 1x, ../../../assets/cases/cases2@2x.jpg 2x" />
                        <img className={styles.casesImg} src="../../../assets/cases/cases2.jpg" alt="Excellent work" />
                    </picture>
                </a>
                {/* <a href="./images/cases/cases1@2x.jpg" data-lightbox="cases" data-title="Meeting" className="cases__item">
                    <picture>
                    <source srcset="./images/cases/cases1.webp 1x, ./images/cases/cases1@2x.webp 2x" />
                    <source srcset="./images/cases/cases1.jpg 1x, ./images/cases/cases1@2x.jpg 2x" />
                    <img className="cases__img" src="./images/cases/cases1.jpg" alt="Meeting" />
                    </picture>
                </a> */}
                {/* <a href="./images/cases/cases2@2x.jpg" data-lightbox="cases" data-title="Excellent work" className="cases__item">
                    <picture>
                    <source srcset="./images/cases/cases2.webp 1x, ./images/cases/cases2@2x.webp 2x" />
                    <source srcset="./images/cases/cases2.jpg 1x, ./images/cases/cases2@2x.jpg 2x" />
                    <img className="cases__img" src="./images/cases/cases2.jpg" alt="Excellent work" />
                    </picture>
                </a> */}
                {/* <a href="./images/cases/cases3@2x.jpg" data-lightbox="cases" data-title="Interesting work" className="cases__item">
                    <picture>
                    <source srcset="./images/cases/cases3.webp 1x, ./images/cases/cases3@2x.webp 2x" />
                    <source srcset="./images/cases/cases3.jpg 1x, ./images/cases/cases3@2x.jpg 2x" />
                    <img className="cases__img" src="./images/cases/cases3.jpg" alt="Interesting work" />
                    </picture>
                </a> */}
                {/* <a href="./images/cases/cases4@2x.jpg" data-lightbox="cases" data-title="Building" className="cases__item">
                    <picture>
                    <source srcset="./images/cases/cases4.webp 1x, ./images/cases/cases4@2x.webp 2x" />
                    <source srcset="./images/cases/cases4.jpg 1x, ./images/cases/cases4@2x.jpg 2x" />
                    <img className="cases__img" src="./images/cases/cases4.jpg" alt="Tall building" />
                    </picture>
                </a> */}
                {/* <a href="./images/cases/cases5@2x.jpg" data-lightbox="cases" data-title="Agreement" className="cases__item">
                    <picture>
                    <source srcset="./images/cases/cases5.webp 1x, ./images/cases/cases5@2x.webp 2x" />
                    <source srcset="./images/cases/cases5.jpg 1x, ./images/cases/cases5@2x.jpg 2x" />
                    <img className="cases__img" src="./images/cases/cases5.jpg" alt="Agreement" />
                    </picture>
                </a> */}
                {/* <a href="./images/cases/cases6@2x.jpg" data-lightbox="cases" data-title="Great working atmosphere" className="cases__item">
                    <picture>
                    <source srcset="./images/cases/cases6.webp 1x, ./images/cases/cases6@2x.webp 2x" />
                    <source srcset="./images/cases/cases6.jpg 1x, ./images/cases/cases6@2x.jpg 2x" />
                    <img className="cases__img" src="./images/cases/cases6.jpg" alt="Great working atmosphere" />
                    </picture>
                </a> */}
            </div>
        </Container>
    </section>

    )
}

export default Cases;