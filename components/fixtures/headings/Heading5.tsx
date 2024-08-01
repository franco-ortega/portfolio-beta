import { HeadingProps } from '@/types/fixtures';
import styles from './Heading.module.css';

export default function Heading5({ heading }: HeadingProps) {
	return <h5 className={styles.Heading}>{heading}</h5>;
}
