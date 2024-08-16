import Content from '@/components/fixtures/content/Content';
import styles from './page.module.css';
import Heading from '@/components/fixtures/headings/Heading';

export default function Home() {
	return (
		<>
			<header>
				<Heading
					content='Hello'
					heading='h1'
					headingStyles={{
						color: 'var(--green)',
					}}
				/>
			</header>
			<main className={styles.main}>
				<section>
					<Content size={'small'} />
					<Content size={'medium'} />
					<Content size={'large'} />
				</section>
			</main>
		</>
	);
}
