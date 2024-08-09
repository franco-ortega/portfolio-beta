'use client';

import { useState } from 'react';
import { Heading as HeadingItem } from '@/types/fixtures';
import data from '../../data/fixtures.json';
import ColorSelect from '@/components/fixtures/select/ColorSelect';
import FontFamilySelect from '@/components/fixtures/select/FontFamilySelect';
import CustomSelect from '@/components/fixtures/select/CustomSelect';
import Heading from '@/components/fixtures/headings/Heading';
import Content from '@/components/fixtures/content/Content';
import styles from './page.module.css';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as HeadingItem[];

export default function FixturesPage() {
	const [color, setColor] = useState('');
	const [fontFamily, setFontFamily] = useState('');
	const [value, setValue] = useState('black');

	const pageStyles = {
		'--clr-primary': color,
		'--fnt-primary': fontFamily,
	};

	function onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
		setValue(e.target.value);
		setColor(e.target.value);
	}

	return (
		<div className={styles.body}>
			<header className={styles.header}>
				<Heading heading={'h1'} content={'Fixtures'} />
				<div>
					<ColorSelect handler={setColor} color={color} />
					<FontFamilySelect handler={setFontFamily} fontFamily={fontFamily} />
				</div>
				<div>
					<CustomSelect
						id={'custom-select'}
						value={value}
						onSelectChange={onSelectChange}
					>
						{data.colors.map((color) => (
							<option key={color} value={color}>
								{color}
							</option>
						))}
					</CustomSelect>
				</div>
			</header>
			<main className={styles.main}>
				<section className={styles.section}>
					<Heading heading={'h2'} content={'Headings'} />
					<ul>
						{headings.map((heading) => (
							<li key={heading}>
								<Heading
									heading={heading}
									content={`Heading ${heading.charAt(1)}`}
									headingStyles={pageStyles}
								/>
							</li>
						))}
					</ul>
				</section>

				<section className={styles.section}>
					<Heading heading={'h2'} content={'Content'} />
					<ul>
						<li>
							<Content size={'small'} contentStyles={pageStyles} />
						</li>
						<li>
							<Content size={'medium'} contentStyles={pageStyles} />
						</li>
						<li>
							<Content size={'large'} contentStyles={pageStyles} />
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
