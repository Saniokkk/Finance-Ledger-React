import styles from './Contact.module.scss';
import classNames from 'classnames';
import { Container } from '../../Container';

import icons from '../../../assets/icons.svg';
import imgWebp1x from '../../../assets/home/contact.webp';
import imgWebp2x from '../../../assets/home/contact@2x.webp';
import imgJpg1x from '../../../assets/home/contact.jpg';
import imgJpg2x from '../../../assets/home/contact@2x.jpg';

const Contact = () => {
    
return (
    <section className={styles.contact} id="contact">
        <Container className={styles.contactContainer}>
            <picture className="pic">
                    <source srcSet={`${imgWebp1x} 1x, ${imgWebp2x} 2x`} />
                    <source srcSet={`${imgJpg1x} 1x, ${imgJpg2x} 2x`}/>
                <img className={styles.contactImg} src={imgJpg1x} alt="man" />
            </picture>
            <div className={styles.contactDescription}>
                <h2 className={styles.contactTitle}>Request Callback</h2>
                <form className={classNames(styles.form, 'action')}>
                    <div className={styles.formItem}>
                        <input className={styles.formInput} placeholder=" " name="name" type="text" id="user-name" />
                        <label className={styles.formLabel} for="user-name">Enter your name</label>
                    </div>
                    <div className={styles.formItem}>
                        <input className={classNames(styles.formInput, styles.inputEmail)} placeholder=" " name="email" type="text" id="user-email" />
                        <label className={styles.formLabel} for="user-email">Enter email*</label>
                        <p className={classNames(styles.worning, 'visually-hidden')}>
                            <svg className={styles.iconWorning} width="7" height="10">
                                <use href={`${icons}#icon-worning`} />
                            </svg>
                            <span className="text-worning">This is required field</span>
                        </p>
                    </div>
                    <button type="submit" className={styles.formSubmitBtn}>Send</button>
                </form>
            </div>
        </Container>
    </section>
    )
}

export default Contact;