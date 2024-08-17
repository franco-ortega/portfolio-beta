import JumpLink from '../links/jumpLink/JumpLink';
import styles from './BackToTop.module.css';

export default function BackToTop() {
	return (
		<div className={styles.BackToTop}>
			<JumpLink link='top' linkText='Back to Top' />
		</div>
	);
}
