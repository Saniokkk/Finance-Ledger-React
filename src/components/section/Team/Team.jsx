import ListSocialLinks from "../../ui/ListSocialLink/ListSocialLinks";
import styles from './Team.module.scss';
import styleSocial from '../../ui/ListSocialLink/SocialLink.module.scss';
import { Container } from "../../Container";
import classNames from "classnames";

const Team = () => {
    const person = [{ name: 'John Doe', position: 'President' }, { name: 'Jane Doe', position: 'Vice President'}, {name: 'Steve Smith', position: 'Marketing Head'}];

    const imagePath = (num, ext) => {
        const path = require(`../../../assets/team/person${num}.${ext}`);
        return path;
    }

    const imagePath2x = (num, ext) => {
        const path = require(`../../../assets/team/person${num}@2x.${ext}`);
        return path;
    }

    return (
<section className={styles.team} id="team">
    <Container className={styles.rest}>
        <div>
            <p className={styles.teamSubtitle}>Who we are</p>
            <h2 className={styles.teamTitle}>Our Professional Team</h2>
            <p className={styles.teamText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
        </div>
        <ul className={styles.teamList}>
            {person.map((item, index) => (
            <li key={item.name} className={styles.teamItem}>
                <div className={styles.teamWrapper} tabIndex="0">
                    <picture>
                        <source srcSet={`${imagePath(index+1, 'webp')} 1x, ${imagePath2x(index+1, 'webp')} 2x`} type="image/webp" />
                        <source srcSet={`${imagePath(index+1, 'jpg')} 1x, ${imagePath2x(index+1, 'jpg')} 2x`} type="image/jpg" />
                        <img className={styles.teamImg} src={imagePath(index+1, 'jpg')} alt={item.position} />
                    </picture>
                    <div className={styles.cardOverlay}>
                        <ul className={classNames(styles.socialList, 'offds')}>
                            <ListSocialLinks className={styleSocial.teamLink}/>
                        </ul>
                    </div>
                </div>
                <div className={styles.description}>
                        <h3 className={styles.name}>{item.name}</h3>
                        <p className={styles.position}>{item.position}</p>
                </div>
            </li>
            ))}
        </ul>
    </Container>
</section>
    )
}

export default Team;