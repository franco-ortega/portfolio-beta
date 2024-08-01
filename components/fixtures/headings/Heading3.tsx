import { HeadingProps } from '@/types/fixtures';
import styles from './Heading.module.css';

export default function Heading3({ heading }: HeadingProps) {
	return <h3 className={styles.Heading}>{heading}</h3>;
}
