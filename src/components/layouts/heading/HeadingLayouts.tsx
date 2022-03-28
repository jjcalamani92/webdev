import { NavLink } from 'react-router-dom';
export const HeadingPrimary = (props: any) => {
	const { titleP, titleS } = props;
	return (
		<h1 className="headingPrimary">
			{' '}
			{titleP} <span>{titleS}</span>{' '}
		</h1>
	);
};
export const HeadingSecondary = (props: any) => {
	const { title, category } = props;
	return (
		<h1 className="headingSecondary">
			{' '}
			<span>{title}</span>
			<NavLink to={`${category}`}> ver todo </NavLink>{' '}
		</h1>
	);
};
export const HeadingTertiary = (props: any) => {
	const { title } = props;
	return <h1 className="headingTertiary"> {title} </h1>;
};
export const HeadingQuarter = (props: any) => {
	const { title, category } = props;
	return (
		<h1 className="heading-quarter">
			{' '}
			<span>{title}</span>
			<NavLink to={`${category}`}> ver todo </NavLink>{' '}
		</h1>
	);
};
