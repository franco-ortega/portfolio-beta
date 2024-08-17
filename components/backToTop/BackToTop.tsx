import styles from './BackToTop.module.css';

type Props = {
	jumpLink: string;
};

export default function BackToTop({ jumpLink }: Props) {
	return (
		<div className={styles.BackToTop}>
			<a href={`#${jumpLink}`}>Back to Top</a>
		</div>
	);
}
