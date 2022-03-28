import { CategoryLayout } from '../../layouts/category/CategoryLayout';
import {
	HeadingPrimary,
	HeadingSecondary
} from '../../layouts/heading/HeadingLayouts';
import { ProductComponent } from '../product/ProductComponent';
import { StoreComponent } from './StoresComponent';

export const StorePages = () => {
	return (
		<>
			<HeadingPrimary titleP="Nuestra tienda" />
			<HeadingSecondary title="Nuestras categorias" category="#" />
			<CategoryLayout />

			<HeadingSecondary title="lentes de mujer" category="/lentes_de_mujer" />
			<StoreComponent category="lentes_de_mujer" categoryTitle="" />

			<HeadingSecondary
				title="lentes de hombres"
				category="/lentes_de_hombre"
			/>
			<StoreComponent category="lentes_de_hombre" categoryTitle="" />

			<HeadingSecondary
				title="alimento para gatos"
				category="/alimento_para_gatos"
			/>
			<StoreComponent category="alimento_para_gatos" categoryTitle="" />

			<HeadingSecondary
				title="accesorios para perros"
				category="/accesorios_para_perros"
			/>
			<StoreComponent category="accesorios_para_perros" categoryTitle="" />

			<HeadingSecondary
				title="accesorios para gatos"
				category="/accesorios_para_gatos"
			/>
			<StoreComponent category="accesorios_para_gatos" categoryTitle="" />
		</>
	);
};
