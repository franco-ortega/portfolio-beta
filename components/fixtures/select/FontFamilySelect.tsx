'use client';

import { Dispatch, SetStateAction } from 'react';
import Select from './Select';
import styles from './FontFamilySelect.module.css';

type Props = {
	handler: Dispatch<SetStateAction<string>>;
	fontFamily: string;
};

const fonts = [
	'arial',
	'courier',
	'franklin',
	'gill',
	'lucida',
	'segoe',
	'times',
	'trebuchet',
	'cambria',
	'georgia',
	'impact',
	'verdana',
] as string[];

export default function FontFamilySelect({ handler, fontFamily }: Props) {
	function onFontFamilySelect(e: React.ChangeEvent<HTMLSelectElement>) {
		handler(e.target.value);
	}

	return (
		<div className={styles.FontFamilySelect}>
			<Select
				handler={handler}
				state={fontFamily}
				options={fonts}
				name={'select'}
				id={'font-picker'}
				title={'Pick Font'}
			/>
		</div>
	);
}
