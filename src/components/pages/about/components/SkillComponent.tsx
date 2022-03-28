import { useSelector } from 'react-redux';
import { SkillCard } from '../../../layouts/card/CardSkill';
import { HeadingSecondary } from '../../../layouts/heading/HeadingLayouts';

interface State {
	About: any;
}

export const SkillComponent = () => {
	const { skills } = useSelector((state: State) => state.About);
	return (
		<>
			<HeadingSecondary title="mis habilidades" />
			<section className="skills">
				{skills.map((data: any, i: number) => (
					<SkillCard key={i} {...data} />
				))}
			</section>
		</>
	);
};
