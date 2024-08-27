import links from '../../data/links.json';
import Heading from '../fixtures/headings/Heading';
import SectionLink from '../links/sectionLink/SectionLink';
import styles from './Header.module.css';

type Props = {
	id: string;
};

export default function Header({ id }: Props) {
	return (
		<header id={id} className={styles.Header}>
			<Heading
				content='Franco Ortega'
				heading='h1'
				headingStyles={{
					color: 'var(--yellow)',
				}}
			/>
			<nav className={styles.nav}>
				{links.sectionLinks.map((link) => (
					<SectionLink
						key={link.section}
						link={link.link}
						linkText={link.section}
					/>
				))}
			</nav>
		</header>
	);
}
