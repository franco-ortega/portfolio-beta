import { Dispatch, SetStateAction } from 'react';

type Props = {
	handler: Dispatch<SetStateAction<string>>;
	color: string;
};

export default function ColorSelect({ handler, color }: Props) {
	function onColorSelect(e: React.ChangeEvent<HTMLSelectElement>) {
		handler(e.target.value);
	}

	return (
		<select
			name='color-picker'
			id='color-picker'
			onChange={onColorSelect}
			value={color}
		>
			<option value=''>Pick Color</option>
			<option value='red'>red</option>
			<option value='orange'>orange</option>
			<option value='yellow'>yellow</option>
			<option value='green'>green</option>
			<option value='blue'>blue</option>
			<option value='indigo'>indigo</option>
			<option value='violet'>violet</option>
		</select>
	);
}
