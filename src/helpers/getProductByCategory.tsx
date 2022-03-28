export const getProductByCategory = (products: any, category: any) => {
	const validCategory = [
		'correctores',
		'bases_de_maquillaje',
		'rubores',
		'polvos_compactos_y_sueltos',
		'iluminadores',
		'para-la-cocina',
		'para-el-escritorio',
		'para-el-hogar',
		'muebles',
		'peluches',
		'alimento_para_perros',
		'alimento_para_gatos',
		'accesorios_para_perros',
		'accesorios_para_gatos',
		'lentes_de_mujer',
		'lentes_de_hombre',
		'lentes_de_niño'
	];
	if (!validCategory.includes(category)) {
		throw new Error(`Tipo de categoria '${category}' no es correcto`);
	}
	return products.filter(
		(product: { category: any }) => product.category === category
	);
};
