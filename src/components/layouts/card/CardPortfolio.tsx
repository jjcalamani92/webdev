interface Props {
	title: String;
	image: String;
	content: String;
	url: any;
	id: Number;
	work: String;
	i: number;
}

export const CardPortfolio = ({
	title,
	image,
	content,
	url,
	id,
	work,
	i
}: Props) => {
	return (
		<div className="card-portfolio">
			<span>{i + 1}</span>
			<img src={`${image}`} alt={`${title}`} />
			<div className="content">
				<h3>{title}</h3>
				<p>{content}</p>
				<a href={url} target="_blank" rel="noopener noreferrer">
					ver sitio
				</a>
			</div>
		</div>
	);
};
