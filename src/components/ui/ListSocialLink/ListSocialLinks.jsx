import {SocialLink} from './SocialLink';
import styles from './SocialLink.module.scss';
const namesLinks = ['facebook', 'twitter', 'youtube', 'linkedin'];

const ListSocialLinks = ({className}) => {
    namesLinks.map((item => {
        console.log(item)
    }))
    return (
        <ul className={styles.socialList}>
            {namesLinks.map((item) => {
                return <SocialLink key={item} name={item} className={className} />
            })}
        </ul>
        // <div>Hello</div>
    )
}

export default ListSocialLinks;