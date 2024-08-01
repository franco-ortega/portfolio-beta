import { HeadingProps } from '@/types/fixtures';
import styles from './Heading.module.css';

export default function Heading1({ heading }: HeadingProps) {
	return <h1 className={styles.Heading}>{heading}</h1>;
}
