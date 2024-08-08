import React, { ChangeEvent, ReactNode } from 'react';
import { getDisplayedValue } from '@/utils/getDisplayedValue';
import styles from './CustomSelect.module.css';

type Props = {
	id: string;
	value: string;
	onSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
	children: ReactNode;
};

export default function CustomSelect({
	id,
	value,
	onSelectChange,
	children,
}: Props) {
	const displayedValue = getDisplayedValue(value, children);

	const iconWrapperStyles: Record<string, string> = {
		'--size': `${24 / 16}rem`,
	};

	return (
		<div className={styles.CustomSelect}>
			<select id={id} value={value} onChange={onSelectChange}>
				{children}
			</select>
			<div>
				{displayedValue}
				<div style={iconWrapperStyles}>
					<span> {'>'} </span>
				</div>
			</div>
		</div>
	);
}
