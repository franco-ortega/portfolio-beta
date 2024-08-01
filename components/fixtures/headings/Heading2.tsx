import { HeadingProps } from '@/types/fixtures';
import styles from './Heading.module.css';

export default function Heading2({ heading }: HeadingProps) {
	return <h2 className={styles.Heading}>{heading}</h2>;
}
