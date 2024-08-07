import React, { ChangeEvent, ReactElement, ReactNode, useState } from 'react';
import styles from './CustomSelect.module.css';

type OptionElement = ReactElement<{ value: string; children: ReactNode }>;

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

function getDisplayedValue(value: string, children: ReactNode) {
	const childArray = React.Children.toArray(children);

	const selectedChild = childArray.find(
		(child): child is OptionElement =>
			React.isValidElement(child) && child.props.value === value
	);

	if (!selectedChild) return null;

	return selectedChild.props.children;
}
