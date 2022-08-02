import {SocialLink} from './SocialLink';
import styles from './SocialLink.module.scss';
const namesLinks = ['facebook', 'twitter', 'youtube', 'linkedin'];

const ListSocialLinks = ({className}) => {
    return (
        <ul className={styles.socialList}>
            {namesLinks.map((item) => {
                return <SocialLink key={item} name={item} className={className} />
            })}
        </ul>
    )
}

export default ListSocialLinks;