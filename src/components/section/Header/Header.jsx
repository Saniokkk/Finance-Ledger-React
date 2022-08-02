import { Container } from '../../Container';
import styles from './Header.module.scss';
import classNames from 'classnames';
import icons from '../../../assets/icons.svg';

const Header = () => {
    const navItems = ['Home', 'About', 'Cases', 'Blog', 'Contact'];
    
    return (        
    <header className={styles.header}>
        <Container className={classNames(styles.headerContainer)}>
            <a href="/" className={classNames(styles.headerLogo, 'offds')}>
                <svg className={styles.logoSvg} width="40" height="35">
                    <use href={`${icons}#icon-logo-book`} />
                </svg>
                Finance <span className={styles.logoText}>Ledger</span>
            </a>
            <nav className="header-nav">
                <ul className={classNames(styles.navList, 'offds')}>
                    {navItems.map((item, index) => (
                        <li key={index} className={styles.navItem}><button type="button" className={classNames(styles.navLink, 'offds')} name={item.toLocaleLowerCase()}>{item}</button></li>
                    ))}
                </ul>
            </nav>
        </Container>
    </header>
    )
}

export default Header;