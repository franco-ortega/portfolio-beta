import Heading from '@/components/fixtures/headings/Heading';
import styles from './page.module.css';

export default function FixturesPage() {
	return (
		<div className={styles.body}>
			<header className={styles.header}>
				<Heading heading={'h1'} content={'Fixtures'} />
			</header>
			<main className={styles.main}>
				<section className={styles.section}>
					<Heading heading={'h2'} content={'Headings'} />
					<ul>
						<li>
							<Heading heading={'h1'} content={'Heading 1'} />
						</li>
						<li>
							<Heading heading={'h2'} content={'Heading 2'} />
						</li>
						<li>
							<Heading heading={'h3'} content={'Heading 3'} />
						</li>
						<li>
							<Heading heading={'h4'} content={'Heading 4'} />
						</li>
						<li>
							<Heading heading={'h5'} content={'Heading 5'} />
						</li>
						<li>
							<Heading heading={'h6'} content={'Heading 6'} />
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
