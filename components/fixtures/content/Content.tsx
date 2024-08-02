import styles from './Content.module.css';

const contents = {
	small:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione mollitia eum praesentium, fuga optio aut accusamus corporis aliquid corrupti dolor eaque ipsum saepe. Maiores, laborum!',
	medium:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad, dicta aperiam dolor voluptatibus corrupti at non hic in totam nisi quidem, neque autem cumque praesentium consectetur quibusdam error! Quidem, quia praesentium in nulla quas ut reprehenderit, culpa facere ab, eligendi fuga ipsam. Vero sint recusandae voluptates assumenda rem nemo!',
	large:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. A neque debitis voluptatum magnam iusto velit deleniti consectetur, modi adipisci ea mollitia ab dignissimos, quidem ipsum impedit, ipsa nisi esse illum distinctio possimus quasi maiores. Quo suscipit sit nemo laudantium ad sapiente voluptatibus consectetur ipsa, nihil obcaecati placeat ea sed nobis corrupti iure illum in expedita? Illo autem dolore distinctio dignissimos perspiciatis recusandae quae reprehenderit quod vitae! Placeat, beatae eum id quidem assumenda voluptas necessitatibus laborum.',
};

type Props = {
	size: keyof typeof contents;
	contentStyles?: Record<string, string>;
};

export default function Content({ size, contentStyles }: Props) {
	const currentContent = contents[size];
	return (
		<p className={styles.Content} style={contentStyles}>
			{currentContent}
		</p>
	);
}
