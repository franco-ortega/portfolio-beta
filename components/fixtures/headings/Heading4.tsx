import { HeadingProps } from '@/types/fixtures';
import styles from './Heading.module.css';

export default function Heading4({ heading }: HeadingProps) {
	return <h4 className={styles.Heading}>{heading}</h4>;
}
