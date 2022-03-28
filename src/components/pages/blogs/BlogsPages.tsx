import { BlogsComponent } from './BlogsComponent';
import { HeadingPrimary } from '../../layouts/heading/HeadingLayouts';
export const BlogsPages = () => {
	return (
		<>
			<HeadingPrimary titleP="mis" titleS="blogs" />
			<BlogsComponent />
		</>
	);
};
