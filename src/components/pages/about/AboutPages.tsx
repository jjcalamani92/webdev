import { HeadingPrimary } from '../../layouts/heading/HeadingLayouts';
import { AboutComponent } from './components/AboutComponent';
import { AcademyComponent } from './components/AcademyComponent';
import { SkillComponent } from './components/SkillComponent';
import { CourseComponent } from './components/CourseComponent';

export const AboutPages = () => {
	return (
		<>
			<HeadingPrimary titleP="sobre" titleS="mi" />
			<AboutComponent />
			<SkillComponent />
			<CourseComponent />
			<AcademyComponent />
		</>
	);
};
