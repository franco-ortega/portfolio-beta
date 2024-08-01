import { Dispatch, SetStateAction } from 'react';
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
		<label htmlFor='color-picker' className={styles.ColorSelect}>
			<span>Pick Color: </span>
			<select
				name='select'
				id='color-picker'
				onChange={onColorSelect}
				value={color}
			>
				<option value='' aria-hidden='true'></option>
				{colors.map((color) => (
					<option key={color} value={color}>
						{color}
					</option>
				))}
			</select>
		</label>
	);
}
