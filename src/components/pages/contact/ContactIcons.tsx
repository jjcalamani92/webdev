import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faEnvelope,
	faPhone,
	faMap
} from '@fortawesome/free-solid-svg-icons';

interface Props {
	domain: String;
	phoneNumber: number;
}

export const ContactIcons = ({ domain, phoneNumber }: Props) => {
	return (
		<div className="icons-container">
			<div className="icons">
				<FontAwesomeIcon className="icon" icon={faClock} />
				<h3>horario de atención :</h3>
				<p>08:00am a 04:00pm</p>
			</div>

			<div className="icons">
				<FontAwesomeIcon className="icon" icon={faPhone} />
				<h3>teléfono :</h3>
				<p> +591 {phoneNumber}</p>
			</div>

			<div className="icons">
				<FontAwesomeIcon className="icon" icon={faEnvelope} />
				<h3> email : </h3>
				<p>info@{domain}.com</p>
			</div>

			<div className="icons">
				<FontAwesomeIcon className="icon" icon={faMap} />
				<h3>dirección :</h3>
				<p>la paz, BOLIVIA</p>
			</div>
		</div>
	);
};
