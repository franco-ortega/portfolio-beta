import JumpLink from '../jumpLink/JumpLink';
import styles from './SectionLink.module.css';

type Props = {
	link: string;
	linkText: string;
};

export default function SectionLink({ link, linkText }: Props) {
	return (
		<li className={styles.SectionLink}>
			<JumpLink link={link} linkText={linkText} />
		</li>
	);
}
