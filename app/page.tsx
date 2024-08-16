import Content from '@/components/fixtures/content/Content';
import styles from './page.module.css';
import Heading from '@/components/fixtures/headings/Heading';

export default function Home() {
	return (
		<>
			<header className={styles.header}>
				<Heading
					content='Hello'
					heading='h1'
					headingStyles={{
						color: 'var(--yellow)',
					}}
				/>
				<nav>
					<a href='#sectionOne'>Section One</a>
					<a href='#sectionTwo'>Section Two</a>
					<a href='#sectionThree'>Section Three</a>
				</nav>
			</header>
			<main className={styles.main}>
				<section className={styles.section} id={'sectionOne'}>
					<Content size={'small'} />
					<Content size={'medium'} />
					<Content size={'large'} />
				</section>
				<section className={styles.section} id={'sectionTwo'}>
					<Content size={'small'} />
					<Content size={'medium'} />
					<Content size={'large'} />
				</section>
				<section className={styles.section} id={'sectionThree'}>
					<Content size={'small'} />
					<Content size={'medium'} />
					<Content size={'large'} />
				</section>
			</main>
		</>
	);
}
