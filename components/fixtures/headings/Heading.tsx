import { Heading as HeadingItem } from '@/types/fixtures';
import styles from './Heading.module.css';

type Props = {
	content: string;
	heading: HeadingItem;
	headingStyles?: Record<string, string>;
};

export default function Heading({ content, heading, headingStyles }: Props) {
	return (
		<>
			{heading === 'h1' ? (
				<h1 className={styles.Heading} style={headingStyles}>
					{content}
				</h1>
			) : heading === 'h2' ? (
				<h2 className={styles.Heading} style={headingStyles}>
					{content}
				</h2>
			) : heading === 'h3' ? (
				<h3 className={styles.Heading} style={headingStyles}>
					{content}
				</h3>
			) : heading === 'h4' ? (
				<h4 className={styles.Heading} style={headingStyles}>
					{content}
				</h4>
			) : heading === 'h5' ? (
				<h5 className={styles.Heading} style={headingStyles}>
					{content}
				</h5>
			) : heading === 'h6' ? (
				<h6 className={styles.Heading} style={headingStyles}>
					{content}
				</h6>
			) : null}
		</>
	);
}
