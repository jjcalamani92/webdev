import { faCode, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenu, closeSearch, closeCart } from '../../../context/action/App';

interface State {
	App: any;
}

interface Props {
	logo: String;
}

export const HeaderLogo = ({ logo }: Props) => {
	const { menu, cart, search } = useSelector((state: State) => state.App);
	const dispatch = useDispatch();

	const handleClose = () => {
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
		<div className="logo">
			<NavLink onClick={handleClose} to="/" className="logo">
				<FontAwesomeIcon className="icon" icon={faCode} />
				<div className="logo-name">
					Web<span>Dev</span>{' '}
				</div>
				{/* <img src={`${logo}`} alt="" /> */}
			</NavLink>
		</div>
	);
};
