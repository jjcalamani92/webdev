import {
	HeadingPrimary,
	HeadingSecondary
} from '../../layouts/heading/HeadingLayouts';
import { PortfolioComponent } from '../portfolio/PortfolioComponent';

export const PortfolioPages = () => {
	return (
		<>
			<HeadingPrimary titleP="mis" titleS="trabajos" />
			<HeadingSecondary title="tiendas online" />
			<PortfolioComponent type="ecommerce" />

			<HeadingSecondary title="páginas web" />
			<PortfolioComponent type="page" />

			<HeadingSecondary title="sitios web" />
			<PortfolioComponent type="site" />

			<HeadingSecondary title="aplicaciones web" />
			<PortfolioComponent type="app" />
		</>
	);
};
