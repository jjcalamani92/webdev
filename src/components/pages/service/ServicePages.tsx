import { CardService } from '../../layouts/card/CardService';
import {
	HeadingPrimary,
	HeadingSecondary,
	HeadingTertiary
} from '../../layouts/heading/HeadingLayouts';
import { ServiceComponent } from '../service/ServiceComponent';
import { ServiceWeb } from '../service/ServiceWeb';

export const ServicePages = () => {
	return (
		<>
			<HeadingPrimary titleP="mis" titleS="servicios" />
			<ServiceComponent />
			{/* <HeadingSecondary title="diseño de páginas web de WordPress" /> */}
			<HeadingTertiary title="tiendas online" />
			<ServiceWeb type="ecommerce" />
			<HeadingTertiary title="abogado & abogada" />
			<ServiceWeb type="lawyer" />
			<HeadingTertiary title="educación" />
			<ServiceWeb type="education" />
			<HeadingTertiary title="arquitectos" />
			<ServiceWeb type="architecture" />
		</>
	);
};
