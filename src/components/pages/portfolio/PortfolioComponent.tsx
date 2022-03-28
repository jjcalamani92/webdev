import { useSelector } from 'react-redux';
import { getByType } from '../../../helpers/getByType';
import { CardPortfolio } from '../../layouts/card/CardPortfolio';

interface Props {
	About: any;
}
interface Type {
	type: String;
}

export const PortfolioComponent = ({ type }: Type) => {
	const { works } = useSelector((state: Props) => state.About);
	const work = getByType(works, type);

	return (
		<>
			<section className="portfolio">
				{work.map((data: any, i: number) => (
					<CardPortfolio key={i} {...data} i={i} />
				))}
			</section>
		</>
	);
};
