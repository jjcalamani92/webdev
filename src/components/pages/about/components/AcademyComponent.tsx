import { useSelector } from 'react-redux';
import { CardAcademy } from '../../../layouts/card/CardAcademy';
import { HeadingSecondary } from '../../../layouts/heading/HeadingLayouts';

interface State {
	About: any;
}

export const AcademyComponent = () => {
	const { academys } = useSelector((state: State) => state.About);
	return (
		<>
			<HeadingSecondary title="academias de formación" />
			<section className="academys">
				{academys.map((data: any, i: number) => (
					<CardAcademy key={i} {...data} />
				))}
			</section>
		</>
	);
};
