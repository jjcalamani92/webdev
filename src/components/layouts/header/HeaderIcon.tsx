import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faCartShopping,
	faSearch
} from '@fortawesome/free-solid-svg-icons';
import {
	closeMenu,
	openMenu,
	openSearch,
	closeSearch,
	closeCart,
	openCart
} from '../../../context/action/App';

interface State {
	App: any;
}

export const HeaderIcon_1 = () => {
	const { menu, cart, search } = useSelector((state: State) => state.App);

	const dispatch = useDispatch();
	const handleOpenMenu = () => {
		dispatch(openMenu());
	};
	const handleCloseMenu = () => {
		dispatch(closeMenu());
	};
	const handleOpenSearch = () => {
		dispatch(openSearch());
	};
	const handleCloseSearch = () => {
		dispatch(closeSearch());
	};
	const handleOpenCart = () => {
		dispatch(openCart());
	};
	const handleCloseCart = () => {
		dispatch(closeCart());
	};

	useEffect(() => {
		const scrollListener = () => {
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
		window.addEventListener('scroll', scrollListener);
		return () => {
			window.removeEventListener('scroll', scrollListener);
		};
	});

	return (
		<div className="icons">
			{/* <FontAwesomeIcon className="icon menu" icon={menu ? faTimes : faBars} /> */}
			<FontAwesomeIcon
				className="icon bars-icon"
				icon={faBars}
				onClick={menu ? handleCloseMenu : handleOpenMenu}
			/>
			<FontAwesomeIcon
				className="icon search-icon"
				icon={faSearch}
				onClick={search ? handleCloseSearch : handleOpenSearch}
			/>
			<FontAwesomeIcon
				className="icon shopping-icon"
				icon={faCartShopping}
				onClick={cart ? handleCloseCart : handleOpenCart}
			/>
		</div>
	);
};
