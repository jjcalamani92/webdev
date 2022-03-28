interface Props {
	title: String;
	image: String;
	content: String;
	url: any;
	id: Number;
	work: String;
	i: number;
}

export const CardWeb = ({ title, image, content, url, id, work, i }: Props) => {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="card-webs"
		>
			<img src={`${image}`} alt={`${title}`} />
		</a>
	);
};
