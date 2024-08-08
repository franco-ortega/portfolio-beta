import React, { ReactElement, ReactNode } from 'react';

type OptionElement = ReactElement<{ value: string; children: ReactNode }>;

export function getDisplayedValue(value: string, children: ReactNode) {
	const childArray = React.Children.toArray(children);

	const selectedChild = childArray.find(
		(child): child is OptionElement =>
			React.isValidElement(child) && child.props.value === value
	);

	if (!selectedChild) return null;

	return selectedChild.props.children;
}
