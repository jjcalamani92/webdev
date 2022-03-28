import { useSelector } from 'react-redux';
import { CardService } from '../../layouts/card/CardService';
interface State {
	About: any;
}

export const ServiceComponent = () => {
	const { services } = useSelector((state: State) => state.About);
	return (
		<section className="services">
			{services.map((data: any, i: Number) => (
				<CardService key={i} {...data} />
			))}
		</section>
	);
};
