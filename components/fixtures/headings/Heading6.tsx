import { HeadingProps } from '@/types/fixtures';
import styles from './Heading.module.css';

export default function Heading6({ heading }: HeadingProps) {
	return <h6 className={styles.Heading}>{heading}</h6>;
}
