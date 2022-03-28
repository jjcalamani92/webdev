import {
	HeadingPrimary,
	HeadingQuarter
} from '../../layouts/heading/HeadingLayouts';
import { ServiceWordPress } from './ServiceWordPress';
interface Props {
	title: String;
	categoryTitle: String;
	category: String;
}

export const ServiceScreen = ({ title, category, categoryTitle }: Props) => {
	return (
		<>
			<HeadingPrimary titleP={title} />
			<HeadingQuarter title="abogado y abogada" />
			<ServiceWordPress type="lawyer" />
			<HeadingQuarter title="arquitecto y arquitecta" />
			<ServiceWordPress type="architecture" />
			<HeadingQuarter title="academias" />
			<ServiceWordPress type="education" />
			<HeadingQuarter title="tiendas de ropa" />
			<ServiceWordPress type="clothes" />
			<HeadingQuarter title="tiendas de zapatos" />
			<ServiceWordPress type="shoes" />
			<HeadingQuarter title="tiendas de plantas" />
			<ServiceWordPress type="plants" />
			<HeadingQuarter title="tiendas de ropa de bebes" />
			<ServiceWordPress type="baby_store" />
			<HeadingQuarter title="tiendas de lenceria" />
			<ServiceWordPress type="underwear" />
			<HeadingQuarter title="tiendas de cocina" />
			<ServiceWordPress type="kitchen" />
			<HeadingQuarter title="tiendas de accesorios de cocina" />
			<ServiceWordPress type="cookware" />
			<HeadingQuarter title="tiendas de accesorios para mascotas" />
			<ServiceWordPress type="pets" />
			<HeadingQuarter title="tiendas de alimentos organicos" />
			<ServiceWordPress type="organic" />
		</>
	);
};
