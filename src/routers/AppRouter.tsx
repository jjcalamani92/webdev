import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactPages } from '../components/pages/contact/ContactPages';
import { HomePages } from '../components/pages/home/HomePages';
import { PortfolioPages } from '../components/pages/portfolio/PortfolioPages';
import { ServicePages } from '../components/pages/service/ServicePages';
import { ServiceScreen } from '../components/pages/service/ServiceScreen';
import { Layout } from './Layout';
import { ProductsPages } from '../components/pages/product/ProductsPages';
import { BlogsPages } from '../components/pages/blogs/BlogsPages';
import { BlogsView } from '../components/pages/blogs/BlogsView';
import ScrollToTop from '../helpers/ScrollToTop';
import { AboutPages } from '../components/pages/about/AboutPages';
import { DetailLayout } from '../components/layouts/details/DetailLayout';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<ScrollToTop>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePages />} />
						<Route path="about" element={<AboutPages />} />
						<Route path="portfolio" element={<PortfolioPages />} />
						<Route path="services" element={<ServicePages />} />
						<Route
							path="services/web_development"
							element={
								<ServiceScreen
									title="desarrollo web"
									category="poleras"
									categoryTitle=""
								/>
							}
						/>
						<Route
							path="services/web_development/designer_web"
							element={
								<ServiceScreen
									title="diseño web"
									category="poleras"
									categoryTitle=""
								/>
							}
						/>
						<Route
							path="services/web_development/wordpress"
							element={
								<ServiceScreen
									title="wordpress"
									category="poleras"
									categoryTitle=""
								/>
							}
						/>
						<Route
							path="services/web_development/hosting"
							element={
								<ServiceScreen
									title="hosting"
									category="poleras"
									categoryTitle=""
								/>
							}
						/>
						<Route
							path="services/web_development/seo"
							element={
								<ServiceScreen
									title="SEO web"
									category="poleras"
									categoryTitle=""
								/>
							}
						/>
						<Route path="blogs" element={<BlogsPages />} />
						<Route path="blogs/:titleURL" element={<BlogsView />} />

						<Route
							path="lentes_de_mujer"
							element={
								<ProductsPages
									title="lentes de mujer"
									category="lentes_de_mujer"
									categoryTitle="bloqueador solar"
								/>
							}
						/>
						<Route path="lentes_de_mujer/:name" element={<DetailLayout />} />
						<Route
							path="lentes_de_hombre"
							element={
								<ProductsPages
									title="lentes de hombre"
									category="lentes_de_hombre"
									categoryTitle="bloqueador solar"
								/>
							}
						/>
						<Route path="lentes_de_hombre/:name" element={<DetailLayout />} />
						<Route
							path="alimento_para_gatos"
							element={
								<ProductsPages
									title="alimento para gatos"
									category="alimento_para_gatos"
									categoryTitle="bloqueador solar"
								/>
							}
						/>
						<Route
							path="alimento_para_gatos/:name"
							element={<DetailLayout />}
						/>
						<Route
							path="accesorios_para_perros"
							element={
								<ProductsPages
									title="accesorios para perros"
									category="accesorios_para_perros"
									categoryTitle="bloqueador solar"
								/>
							}
						/>
						<Route
							path="accesorios_para_perros/:name"
							element={<DetailLayout />}
						/>
						<Route
							path="accesorios_para_gatos"
							element={
								<ProductsPages
									title="accesorios para gatos"
									category="accesorios_para_gatos"
									categoryTitle="bloqueador solar"
								/>
							}
						/>
						<Route
							path="accesorios_para_gatos/:name"
							element={<DetailLayout />}
						/>

						<Route
							path="bases_de_maquillaje"
							element={
								<ProductsPages
									title="bases de maquillaje"
									category="bases_de_maquillaje"
									categoryTitle="bloqueador solar"
								/>
							}
						/>
						<Route
							path="bases_de_maquillaje/:name"
							element={<DetailLayout />}
						/>
						<Route
							path="rubores"
							element={
								<ProductsPages
									title="rubores"
									category="rubores"
									categoryTitle="bloqueador solar"
								/>
							}
						/>
						<Route path="rubores/:name" element={<DetailLayout />} />
						<Route
							path="polvos_compactos_y_sueltos"
							element={
								<ProductsPages
									title="polvos compactos y sueltos"
									category="polvos_compactos_y_sueltos"
									categoryTitle="bloqueador solar"
								/>
							}
						/>
						<Route
							path="polvos_compactos_y_sueltos/:name"
							element={<DetailLayout />}
						/>

						<Route
							path="iluminadores"
							element={
								<ProductsPages
									title="iluminadores"
									category="iluminadores"
									categoryTitle="bloqueador solar"
								/>
							}
						/>
						<Route path="iluminadores/:name" element={<DetailLayout />} />

						<Route
							path="para-el-hogar"
							element={
								<ProductsPages
									title="para el hogar"
									category="para-el-hogar"
									categoryTitle="para el hogar"
								/>
							}
						/>
						<Route path="para-el-hogar/:name" element={<DetailLayout />} />

						<Route
							path="para-el-escritorio"
							element={
								<ProductsPages
									title="para el escritorio"
									category="para-el-escritorio"
									categoryTitle="para el escritorio"
								/>
							}
						/>
						<Route path="para-el-escritorio/:name" element={<DetailLayout />} />

						<Route
							path="para-la-cocina"
							element={
								<ProductsPages
									title="para la cocina"
									category="para-la-cocina"
									categoryTitle="para la cocina"
								/>
							}
						/>
						<Route path="para-la-cocina/:name" element={<DetailLayout />} />

						<Route path="contacto" element={<ContactPages />} />
					</Route>
				</Routes>
			</ScrollToTop>
		</BrowserRouter>
	);
};
