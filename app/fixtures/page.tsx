'use client';

import { useState } from 'react';
import Heading from '@/components/fixtures/headings/Heading';
import styles from './page.module.css';
import ColorSelect from '@/components/fixtures/select/ColorSelect';

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
				<ColorSelect handler={setColor} color={color} />

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
