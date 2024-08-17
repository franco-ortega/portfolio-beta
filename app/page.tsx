import Heading from '@/components/fixtures/headings/Heading';
import BackToTop from '@/components/backToTop/BackToTop';
import Content from '@/components/fixtures/content/Content';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<header className={styles.header} id={'top'}>
				<Heading
					content='Hello'
					heading='h1'
					headingStyles={{
						color: 'var(--yellow)',
					}}
				/>
				<nav className={styles.nav}>
					<a href='#sectionOne'>Section One</a>
					<a href='#sectionTwo'>Section Two</a>
					<a href='#sectionThree'>Section Three</a>
				</nav>
			</header>
			<main className={styles.main}>
				<section className={styles.section} id={'sectionOne'}>
					<Heading
						content='Section One'
						heading='h2'
						headingStyles={{
							color: 'var(--green)',
						}}
					/>
					<BackToTop />
					<Content size={'small'} />
					<Content size={'medium'} />
					<Content size={'large'} />
				</section>
				<section className={styles.section} id={'sectionTwo'}>
					<Heading
						content='Section Two'
						heading='h2'
						headingStyles={{
							color: 'var(--red)',
						}}
					/>
					<BackToTop />
					<Content size={'small'} />
					<Content size={'medium'} />
					<Content size={'large'} />
				</section>
				<section className={styles.section} id={'sectionThree'}>
					<Heading
						content='Section Three'
						heading='h2'
						headingStyles={{
							color: 'var(--blue)',
						}}
					/>
					<BackToTop />
					<Content size={'small'} />
					<Content size={'medium'} />
					<Content size={'large'} />
				</section>
			</main>
		</div>
	);
}
