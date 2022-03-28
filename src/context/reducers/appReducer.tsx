import { types } from '../types/types';

const initialState = {
	cart: false,
	menu: false,
	search: false
};

export const appReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case types.openMenu:
			return {
				...state,
				menu: true,
				cart: false,
				search: false
			};
		case types.closeMenu:
			return {
				...state,
				menu: false
			};
		case types.openCart:
			return {
				...state,
				menu: false,
				cart: true,
				search: false
			};
		case types.closeCart:
			return {
				...state,
				cart: false
			};

		case types.openSearch:
			return {
				...state,
				menu: false,
				cart: false,
				search: true
			};
		case types.closeSearch:
			return {
				...state,
				search: false
			};
		default:
			return state;
	}
};
