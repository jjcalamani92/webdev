import { useSelector } from 'react-redux';
import { Navigate, useParams, Link } from 'react-router-dom';
import { getProductByTitleURL } from '../../../helpers/getProductByTitleURL';

interface State {
	Blog: any;
}
export const BlogsView = () => {
	const { titleURL } = useParams();
	const { blogs } = useSelector((state: State) => state.Blog);
	const blog = getProductByTitleURL(blogs, titleURL);
	if (!blog) {
		return <Navigate to="/" />;
	}
	const { title, image, content } = blog;
	const {
		introduccion,
		parrafo_1_t,
		parrafo_1_c,
		parrafo_2_t,
		parrafo_2_c,
		parrafo_3_t,
		parrafo_3_c,
		parrafo_4_t,
		parrafo_4_c,
		parrafo_5_t,
		parrafo_5_c,
		parrafo_6_t,
		parrafo_6_c,
		parrafo_7_t,
		parrafo_7_c,
		parrafo_8_t,
		parrafo_8_c,
		parrafo_9_t,
		parrafo_9_c,
		parrafo_10_t,
		parrafo_10_c,
		parrafo_11_t,
		parrafo_11_c,
		parrafo_12_t,
		parrafo_12_c
	} = content;
	return (
		<>
			<section className="blogs-view">
				<main className="blog">
					<h3>{title}</h3>
					<img src={`${image}`} alt={`${title}`} />

					<p>{introduccion}</p>

					<h4>{parrafo_1_t}</h4>
					<p>{parrafo_1_c}</p>

					<h4>{parrafo_2_t}</h4>
					<p>{parrafo_2_c}</p>

					<h4>{parrafo_3_t}</h4>
					<p>{parrafo_3_c}</p>

					<h4>{parrafo_4_t}</h4>
					<p>{parrafo_4_c}</p>

					<h4>{parrafo_5_t}</h4>
					<p>{parrafo_5_c}</p>

					<h4>{parrafo_6_t}</h4>
					<p>{parrafo_6_c}</p>

					<h4>{parrafo_7_t}</h4>
					<p>{parrafo_7_c}</p>

					<h4>{parrafo_8_t}</h4>
					<p>{parrafo_8_c}</p>

					<h4>{parrafo_9_t}</h4>
					<p>{parrafo_9_c}</p>

					<h4>{parrafo_10_t}</h4>
					<p>{parrafo_10_c}</p>
				</main>
				<aside className="sidebar">
					<h3>publicaciones recientes</h3>
					<ul>
						{blogs.map((data: any, i: number) => (
							<li key={i}>
								<Link to={`/blogs/${data.titleURL}`}>{data.title}</Link>
							</li>
						))}
					</ul>
				</aside>
			</section>
		</>
	);
};
