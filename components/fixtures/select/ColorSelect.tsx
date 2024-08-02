'use client';

import { Dispatch, SetStateAction } from 'react';
import Select from './Select';
import styles from './ColorSelect.module.css';

type Props = {
	handler: Dispatch<SetStateAction<string>>;
	color: string;
};

const colors = [
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'indigo',
	'violet',
	'black',
	'gray',
	'white',
];

export default function ColorSelect({ handler, color }: Props) {
	function onColorSelect(e: React.ChangeEvent<HTMLSelectElement>) {
		handler(e.target.value);
	}

	return (
		<div className={styles.ColorSelect}>
			<Select
				handler={handler}
				state={color}
				options={colors}
				name={'select'}
				id={'color-picker'}
				title={'Pick Color'}
			/>
		</div>
	);
}
