import { useSelector } from 'react-redux';
import { HeadingSecondary } from '../../../layouts/heading/HeadingLayouts';
import { CardCourse } from '../../../layouts/card/CardCourse';

interface State {
	About: any;
}

export const CourseComponent = () => {
	const { courses } = useSelector((state: State) => state.About);
	// const { academys } = useSelector((state: State) => state.About);
	return (
		<>
			<HeadingSecondary title="mi educación" />
			<section className="courses">
				{courses.map((data: any, i: number) => (
					<CardCourse key={i} {...data} />
				))}
			</section>
		</>
	);
};
