import { combineReducers } from 'redux';
import { startReducer } from './homeReducer';
import { appReducer } from './appReducer';
import { productReducer } from './productReducer';
import { aboutReducer } from './aboutReducer';
import { webReducer } from './webReducer';
import { blogReducer } from './blogReducer';

export const rootReducer = combineReducers({
	Start: startReducer,
	Product: productReducer,
	About: aboutReducer,
	Blog: blogReducer,
	Web: webReducer,

	App: appReducer,
});
