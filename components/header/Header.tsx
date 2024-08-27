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
				content='Hello'
				heading='h1'
				headingStyles={{
					color: 'var(--yellow)',
				}}
			/>
			<nav className={styles.nav}>
				<SectionLink link='sectionOne' linkText='Section One' />
				<SectionLink link='sectionTwo' linkText='Section Two' />
				<SectionLink link='sectionThree' linkText='Section Three' />
			</nav>
		</header>
	);
}
