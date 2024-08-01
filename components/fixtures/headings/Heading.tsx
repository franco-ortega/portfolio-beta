import styles from './Heading.module.css';

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Props = {
	content: string;
	heading: Heading;
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
