import Heading1 from '@/components/fixtures/headings/Heading1';
import Heading2 from '@/components/fixtures/headings/Heading2';
import Heading3 from '@/components/fixtures/headings/Heading3';
import Heading4 from '@/components/fixtures/headings/Heading4';
import Heading5 from '@/components/fixtures/headings/Heading5';
import Heading6 from '@/components/fixtures/headings/Heading6';
import styles from './page.module.css';

export default function FixturesPage() {
	return (
		<div className={styles.body}>
			<header className={styles.header}>
				<Heading1 heading={'Fixtures'} />
			</header>
			<main className={styles.main}>
				<section className={styles.section}>
					<Heading2 heading={'Headings'} />
					<ul>
						<li>
							{' '}
							<Heading1 heading={'Heading 1'} />
						</li>
						<li>
							<Heading2 heading={'Heading 2'} />
						</li>
						<li>
							<Heading3 heading={'Heading 3'} />
						</li>
						<li>
							<Heading4 heading={'Heading 4'} />
						</li>
						<li>
							<Heading5 heading={'Heading 5'} />
						</li>
						<li>
							<Heading6 heading={'Heading 6'} />
						</li>
					</ul>
				</section>
			</main>
		</div>
	);
}
