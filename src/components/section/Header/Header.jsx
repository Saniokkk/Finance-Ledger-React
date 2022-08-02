import { Container } from '../../Container';
import styles from './Header.module.scss';
const classNames = require('classnames');


const Header = () => {
    const navItems = ['Home', 'About', 'Cases', 'Blog', 'Contact'];
    return (        
    <header className={styles.header}>
        <Container className={classNames(styles.containerBox, styles.headerContainer)}>
            <a href="/" className={classNames(styles.headerLogo, 'offds')}>
                <svg className={styles.logoSvg} width="40" height="35">
                    {/* <use href="./images/icons.svg#icon-logo-book"></use> */}
                </svg>
                Finance <span className={styles.logoText}>Ledger</span>
            </a>
            <nav className="header-nav">
                <ul className={classNames(styles.navList, 'offds')}>
                    {navItems.map((item) => (
                        <li className={styles.navItem}><button type="button" className={classNames(styles.navLink, 'offds')} name={item.toLocaleLowerCase}>{item}</button></li>
                    ))}
                </ul>
            </nav>
        </Container>
    </header>
    )
}

export default Header;