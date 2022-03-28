import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faInstagram,
	faLinkedin,
	faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export const FooterAbout = () => {
	return (
		<section className="footer-about">
			<div className="share">
				<a href="https://www.instagram.com/">
					{' '}
					<FontAwesomeIcon className="icon" icon={faInstagram} />{' '}
				</a>
				<a href="https://bo.linkedin.com/">
					{' '}
					<FontAwesomeIcon className="icon" icon={faLinkedin} />{' '}
				</a>
				<a href="https://github.com/jjcalamani92">
					{' '}
					<FontAwesomeIcon className="icon" icon={faGithub} />{' '}
				</a>
				<a href="https://wa.me/message/63GDWYPHRNIIJ1">
					{' '}
					<FontAwesomeIcon className="icon" icon={faWhatsapp} />{' '}
				</a>
			</div>
			<div className="credit">
				desarrollado por{' '}
				<span>
					{' '}
					<Link to="/"> Web Dev </Link>{' '}
				</span>{' '}
				| Todos los derechos reservados 2022
			</div>
		</section>
	);
};
