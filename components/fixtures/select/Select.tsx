import { Dispatch, SetStateAction } from 'react';

type Props = {
	handler: Dispatch<SetStateAction<string>>;
	state: string;
	options: string[];
	name: string;
	id: string;
	title: string;
};

export default function Select({
	handler,
	state,
	options,
	name,
	id,
	title,
}: Props) {
	function onSelect(e: React.ChangeEvent<HTMLSelectElement>) {
		handler(e.target.value);
	}

	return (
		<label htmlFor={id}>
			<span>{title}: </span>
			<select name={name} id={id} onChange={onSelect} value={state}>
				<option value='' aria-hidden='true'></option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</label>
	);
}
