import { useSelector } from 'react-redux';
import { CardBlogs } from '../../layouts/card/CardBlogs';

interface State {
	Blog: any;
}

export const BlogsComponent = () => {
	const { blogs } = useSelector((state: State) => state.Blog);
	return (
		<section className="blogs">
			{blogs.map((data: any) => (
				<CardBlogs key={data.id} {...data} />
			))}
		</section>
	);
};
