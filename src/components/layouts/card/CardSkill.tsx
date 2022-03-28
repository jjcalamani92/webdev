interface Props {
	title: String;
	titleURL: any;
	imageCard: String;
	image: String;
	description: String;
	content: String;
	modulos: String;
	hours: String;
}

export const SkillCard = ({
	title,
	titleURL,
	image,
	imageCard,
	description,
	content,
	modulos,
	hours
}: Props) => {
	return (
		<div className="card-skill">
			<img src={`${image}`} alt={`${title}`} />
			<h3>{title}</h3>
		</div>
	);
};
