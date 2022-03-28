import { NavLink } from 'react-router-dom';

interface Props {
	title: String;
	image: String;
	content: String;
	url: String;
}

export const CardService = ({ title, image, content, url }: Props) => {
	return (
		<NavLink to={`/services/${url}`} className="card-service">
			<img src={`${image}`} alt={`${title}`} />
			<div className="content">
				<h3>{title}</h3>
				{/* <p>{content}</p> */}
			</div>
			{/* <a href="#" target="_blank" class="btn-1">más información</a> */}
		</NavLink>
	);
};
