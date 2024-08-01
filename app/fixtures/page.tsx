'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import Heading from '@/components/fixtures/headings/Heading';
import styles from './page.module.css';

const ColorSelect = ({
	handler,
	color,
}: {
	handler: Dispatch<SetStateAction<string>>;
	color: string;
}) => {
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
};

export default function FixturesPage() {
	const [color, setColor] = useState('');

	const headingStyles = {
		'--clr-heading': color,
	};

	return (
		<div className={styles.body}>
			<header className={styles.header}>
				<Heading heading={'h1'} content={'Fixtures'} />
			</header>
			<main className={styles.main}>
				<div>
					<ColorSelect handler={setColor} color={color} />
				</div>
				<section className={styles.section}>
					<Heading heading={'h2'} content={'Headings'} />
					<ul>
						<li>
							<Heading
								heading={'h1'}
								content={'Heading 1'}
								headingStyles={headingStyles}
							/>
						</li>
						<li>
							<Heading
								heading={'h2'}
								content={'Heading 2'}
								headingStyles={headingStyles}
							/>
						</li>
						<li>
							<Heading
								heading={'h3'}
								content={'Heading 3'}
								headingStyles={headingStyles}
							/>
						</li>
						<li>
							<Heading
								heading={'h4'}
								content={'Heading 4'}
								headingStyles={headingStyles}
							/>
						</li>
						<li>
							<Heading
								heading={'h5'}
								content={'Heading 5'}
								headingStyles={headingStyles}
							/>
						</li>
						<li>
							<Heading
								heading={'h6'}
								content={'Heading 6'}
								headingStyles={headingStyles}
							/>
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
