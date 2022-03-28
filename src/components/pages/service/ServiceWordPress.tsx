import { useSelector } from 'react-redux';
import { getByTypeWeb } from '../../../helpers/getByTypeWeb';
import { CardWeb } from '../../layouts/card/CardWeb';

interface Props {
	Web: any;
}
interface Type {
	type: String;
}

export const ServiceWordPress = ({ type }: Type) => {
	const { webs } = useSelector((state: Props) => state.Web);
	const web = getByTypeWeb(webs, type);
	const Web = web.slice(0, 3);
	return (
		<>
			<section className="web">
				{Web.map((data: any, i: number) => (
					<CardWeb key={i} {...data} i={i} />
				))}
			</section>
		</>
	);
};
