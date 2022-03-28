export const getByTypeWeb = (webs: any, type: any) => {
	const validType = [
		'ecommerce',
		'lawyer',
		'education',
		'architecture',
		'clothes',
		'plants',
		'baby_store',
		'underwear',
		'kitchen',
		'cookware',
		'pets',
		'organic',
		'shoes'
	];

	if (!validType.includes(type)) {
		throw new Error(`Tipo de Web "${type}" no es correcto`);
	}

	return webs.filter((web: { type: any }) => web.type === type);
};
