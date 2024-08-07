import { ReactNode } from 'react';
import styles from './CustomSelect.module.css';

type Props = {
	children: ReactNode;
};
export default function CustomSelect({ children }: Props) {
	const displayedValue = 'DISPLAY';

	return (
		<div className={styles.CustomSelect}>
			<select>
				{children}
				<option>Test 1</option>
				<option>Test 2</option>
				<option>Test 3</option>
			</select>
			<div className='presentational'>
				{displayedValue}
				<div>
					<span> {'>'} </span>
				</div>
			</div>
		</div>
	);
}
