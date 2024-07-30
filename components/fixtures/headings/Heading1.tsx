type HeadingProps = {
	heading: string;
};

export default function Heading1({ heading }: HeadingProps) {
	return <h1>{heading}</h1>;
}
