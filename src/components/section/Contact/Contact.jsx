import styles from './Contact.module.scss';
import styleModal from '../../Modal/Modal.module.scss'
import classNames from 'classnames';
import { Container } from '../../Container';

import icons from '../../../assets/icons.svg';
import imgWebp1x from '../../../assets/home/contact.webp';
import imgWebp2x from '../../../assets/home/contact@2x.webp';
import imgJpg1x from '../../../assets/home/contact.jpg';
import imgJpg2x from '../../../assets/home/contact@2x.jpg';
import { useState } from 'react';
import { Modal } from '../../Modal/Modal';

const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    // const toggleModal = () => {
    // setShowModal(!showModal);
    // };
    
    const openModal = () => {
    setShowModal(true);
    };

    const closeModal = () => {
    setShowModal(false);
    };

function isValidEmail(email) { 
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email); 
} 

    function onFormSubmit(event) {
        event.preventDefault();
        const worning = document.querySelector('.worning');
        const textWorning = document.querySelector('.text-worning')

        if (event.currentTarget.elements.email.value === '') {
            textWorning.textContent = 'This is required field';
            worning.classList.remove('visually-hidden');

        } else {
            
        const { email: { value: email } } = event.currentTarget.elements;

        if (!isValidEmail(email)) {
            textWorning.textContent = `Your email ${email}  invalid, it must contain @`;
            worning.classList.remove('visually-hidden');
        } else {
            openModal();
            worning.classList.add('visually-hidden');
            event.currentTarget.reset();
        }
    }   
}

    return (
    <>
        {showModal && (
            <Modal toggleModal={closeModal}>
                {/* <div className={styleModal.modal}> */}
                    <h2 className={styleModal.modalTitle}>Thank You!</h2>
                    <p className={styleModal.modalText}>I would be happy to work with you🙂</p>
                    <button onClick={closeModal} className={styleModal.closeModal}>
                    Back to our site
                    </button>
                {/* </div> */}
            </Modal>
        )}
        <section className={styles.contact} id="contact">
            <Container className={styles.contactContainer}>
                <picture className="pic">
                        <source srcSet={`${imgWebp1x} 1x, ${imgWebp2x} 2x`} />
                        <source srcSet={`${imgJpg1x} 1x, ${imgJpg2x} 2x`}/>
                    <img className={styles.contactImg} src={imgJpg1x} alt="man" />
                </picture>
                <div className={styles.contactDescription}>
                    <h2 className={styles.contactTitle}>Request Callback</h2>
                    <form onSubmit={onFormSubmit} className={classNames(styles.form, 'action')}>
                        <div className={styles.formItem}>
                            <input className={styles.formInput} placeholder=" " name="name" type="text" id="user-name" />
                            <label className={styles.formLabel} htmlFor="user-name">Enter your name</label>
                        </div>
                        <div className={styles.formItem}>
                            <input className={classNames(styles.formInput, styles.inputEmail)} placeholder=" " name="email" type="text" id="user-email" />
                            <label className={styles.formLabel} htmlFor="user-email">Enter email*</label>
                            <p className={classNames(styles.worning, 'worning', 'visually-hidden')}>
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
    </>
    )
}

export default Contact;