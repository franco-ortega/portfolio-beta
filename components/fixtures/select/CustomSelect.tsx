import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};
export default function CustomSelect({ children }: Props) {
	const displayedValue = 'DISPLAY';

	return (
		<div className='wrapper'>
			<select>{children}</select>
			<div className='presentational'>
				{displayedValue}
				<span> {'<'} </span>
			</div>
		</div>
	);
}
