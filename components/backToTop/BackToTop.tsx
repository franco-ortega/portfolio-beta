import JumpLink from '../links/jumpLink/JumpLink';
import styles from './BackToTop.module.css';

const JUMP_LINK = {
	link: 'top',
	linkText: 'Back to Top',
};

export default function BackToTop() {
	return (
		<div className={styles.BackToTop}>
			<JumpLink link={JUMP_LINK.link} linkText={JUMP_LINK.linkText} />
		</div>
	);
}
