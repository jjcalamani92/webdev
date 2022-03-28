import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

interface Props {
	title: String;
	titleURL: any;
	imageCard: String;
	image: String;
	description: String;
	teacher: String;
	date: String;
	academy: String;
}

export const CardCourse = ({
	title,
	titleURL,
	image,
	imageCard,
	description,
	teacher,
	date,
	academy
}: Props) => {
	// const [ noOfElement, setNoOfElement ] = useState(2);
	// const slice = courses.slice(0, noOfElement);

	// const handleLoadMore = () => {
	//     setNoOfElement( noOfElement + 2 );

	// }
	return (
		<div className="card-course">
			<div className="icon">
				<FontAwesomeIcon icon={faGraduationCap} />
			</div>
			<span>
				{date} {academy}
			</span>
			<h2>{title}</h2>
			<p>{description}</p>
			<h3>
				Profesor: <span>{teacher}</span>
			</h3>
		</div>

		// <div className="btn-load">
		//     <Boton
		//             titleI="Mostrar Más"
		//             className="btn-general"
		//             handleclick={ handleLoadMore }
		//     />
		// </div>
	);
};
