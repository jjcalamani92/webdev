interface Props {
	title: String;
	image: String;
	academy: String;
}

export const CardAcademy = ({ title, image, academy }: Props) => {
	return (
		<div className="card-academy">
			<img src={`${image}`} alt={`${title}`} />
			<h3>{academy}</h3>
		</div>
	);
};
