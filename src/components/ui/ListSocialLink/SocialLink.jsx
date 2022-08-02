import styles from './SocialLink.module.scss';
import icons from '../../../assets/social-link.svg';
import classNames from 'classnames';

export const SocialLink = ({name, className}) => {
    
    return (
        <li className={classNames(styles.socialItem, 'offds')}>
            <a
                href={`https://${name}.com/`}
                className={classNames(className, 'offds')}
                target="_blank"
                rel="noopener  noreferrer"
                title={name}
            >
                <svg className={styles.socialIcon}>
                    <use href={`${icons}#icon-${name}`}></use>
                </svg>
            </a>
        </li>
    )
}

