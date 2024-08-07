import React, { ChangeEvent, ReactNode, useState } from 'react';
import styles from './CustomSelect.module.css';

type Props = {
	children: ReactNode;
	value: string;
	onSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export default function CustomSelect({
	value,
	children,
	onSelectChange,
	choice,
}: Props) {
	const displayedValue = getDisplayedValue(value, children);

	const iconWrapperStyles: Record<string, string> = {
		'--size': `${24 / 16}rem`,
	};

	return (
		<div className={styles.CustomSelect}>
			<select value={choice} onChange={onSelectChange}>
				{children}
			</select>
			<div>
				{displayedValue}
				{choice}
				<div style={iconWrapperStyles}>
					<span> {'>'} </span>
				</div>
			</div>
		</div>
	);
}

function getDisplayedValue(value: any, children: any) {
	const childArray = React.Children.toArray(children);
	console.log(childArray[0].props.children);

	const selectedChild = childArray.find((child) => child.props.value === value);

	console.log(selectedChild.props);

	return selectedChild;
}
