import Heading1 from '@/components/fixtures/headings/Heading1';
import Heading2 from '@/components/fixtures/headings/Heading2';
import Heading3 from '@/components/fixtures/headings/Heading3';
import Heading4 from '@/components/fixtures/headings/Heading4';
import Heading5 from '@/components/fixtures/headings/Heading5';
import Heading6 from '@/components/fixtures/headings/Heading6';

export default function FixturesPage() {
	return (
		<div>
			<header>
				<h1>Fixtures</h1>
			</header>
			<main>
				<section>
					<Heading1 heading={'Heading 1'} />
					<Heading2 heading={'Heading 2'} />
					<Heading3 heading={'Heading 3'} />
					<Heading4 heading={'Heading 4'} />
					<Heading5 heading={'Heading 5'} />
					<Heading6 heading={'Heading 6'} />
				</section>
			</main>
		</div>
	);
}
