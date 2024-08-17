type Props = {
	link: string;
	linkText: string;
};

export default function JumpLink({ link, linkText }: Props) {
	return <a href={`#${link}`}>{linkText}</a>;
}
