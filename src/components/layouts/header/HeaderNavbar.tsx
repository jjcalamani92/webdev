import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu, closeSearch, closeCart } from '../../../context/action/App';
import { setImage } from '../../../context/action/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';

interface State {
	App: any;
}

export const HeaderNavbar = () => {
	const { menu, cart, search } = useSelector((state: State) => state.App);
	const dispatch = useDispatch();
	const handleClose = () => {
		dispatch(setImage(0));
		if (menu || search || cart) {
			if (menu) {
				dispatch(closeMenu());
			}
			if (cart) {
				dispatch(closeCart());
			}
			if (search) {
				dispatch(closeSearch());
			}
		}
	};
	return (
		<nav className={menu ? 'navbar active' : 'navbar'}>
			<ul>
				<li>
					<NavLink onClick={handleClose} to="about">
						sobre mi
					</NavLink>
				</li>
				<li>
					<NavLink onClick={handleClose} to="portfolio">
						portafolio
					</NavLink>
				</li>
				<li>
					<NavLink onClick={handleClose} to="services">
						servicios
						<FontAwesomeIcon className="icon" icon={faCaretDown} />
					</NavLink>
					<ul>
						<li>
							<NavLink onClick={handleClose} to="services/web_development">
								desarrollo web
								<FontAwesomeIcon className="icon" icon={faCaretRight} />
							</NavLink>
							<ul>
								<li>
									<NavLink
										onClick={handleClose}
										to="services/web_development/designer_web"
									>
										diseño web
									</NavLink>
								</li>
								<li>
									<NavLink
										onClick={handleClose}
										to="services/web_development/wordpress"
									>
										WordPress
									</NavLink>
								</li>
								<li>
									<NavLink
										onClick={handleClose}
										to="services/web_development/hosting"
									>
										hosting
									</NavLink>
								</li>
								<li>
									<NavLink
										onClick={handleClose}
										to="services/web_development/seo"
									>
										SEO web
									</NavLink>
								</li>
							</ul>
						</li>

						<li>
							<NavLink onClick={handleClose} to="services/digital_marketing">
								marketing digital
								<FontAwesomeIcon className="icon" icon={faCaretRight} />
							</NavLink>
							<ul>
								<li>
									<NavLink
										onClick={handleClose}
										to="services/digital_marketing/digital_advertising"
									>
										publicidad digital
									</NavLink>
								</li>
								<li>
									<NavLink
										onClick={handleClose}
										to="services/digital_marketing/advertising_campaign"
									>
										campaña publicitaria
									</NavLink>
								</li>
								<li>
									<NavLink
										onClick={handleClose}
										to="services/digital_marketing/content_marketing"
									>
										marketing de contenidos
									</NavLink>
								</li>
							</ul>
							<li>
								<NavLink onClick={handleClose} to="services/logo_design">
									diseño de logotipos
								</NavLink>
							</li>
						</li>
					</ul>
				</li>
				<li>
					<NavLink onClick={handleClose} to="blogs">
						blogs
					</NavLink>
				</li>
				<li>
					<NavLink onClick={handleClose} to="contacto">
						contacto
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
