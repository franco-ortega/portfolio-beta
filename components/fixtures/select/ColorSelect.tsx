'use client';

import { Dispatch, SetStateAction } from 'react';
import data from '../../../data/fixtures.json';
import Select from './Select';
import styles from './ColorSelect.module.css';

type Props = {
	handler: Dispatch<SetStateAction<string>>;
	color: string;
};

export default function ColorSelect({ handler, color }: Props) {
	function onColorSelect(e: React.ChangeEvent<HTMLSelectElement>) {
		handler(e.target.value);
	}

	return (
		<div className={styles.ColorSelect}>
			<Select
				handler={handler}
				state={color}
				options={data.colors}
				name={'select'}
				id={'color-picker'}
				title={'Pick Color'}
			/>
		</div>
	);
}
