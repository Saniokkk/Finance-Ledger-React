import { Container } from "../../Container";
import ListSocialLinks from "../../ui/ListSocialLink/ListSocialLinks";
import styles from './Footer.module.scss';
import style from '../../ui/ListSocialLink/SocialLink.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.footerContainer}>
                <ListSocialLinks className={style.footerLink} />
            </Container>
        </footer>
    )
}

export default Footer;