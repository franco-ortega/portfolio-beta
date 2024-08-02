'use client';

import { useState } from 'react';
import { Headings } from '@/types/fixtures';
import Heading from '@/components/fixtures/headings/Heading';
import ColorSelect from '@/components/fixtures/select/ColorSelect';
import styles from './page.module.css';
import FontFamilySelect from '@/components/fixtures/select/FontFamilySelect';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as Headings[];

export default function FixturesPage() {
	const [color, setColor] = useState('');
	const [fontFamily, setFontFamily] = useState('');

	const headingStyles = {
		'--clr-heading': color,
		'--fnt-primary': fontFamily,
	};

	console.log(color, fontFamily);

	return (
		<div className={styles.body}>
			<header className={styles.header}>
				<Heading heading={'h1'} content={'Fixtures'} />
			</header>
			<main className={styles.main}>
				<ColorSelect handler={setColor} color={color} />
				<FontFamilySelect handler={setFontFamily} fontFamily={fontFamily} />

				<section className={styles.section}>
					<Heading heading={'h2'} content={'Headings'} />
					<ul>
						{headings.map((heading) => (
							<li key={heading}>
								<Heading
									heading={heading}
									content={`Heading ${heading.charAt(1)}`}
									headingStyles={headingStyles}
								/>
							</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
}
