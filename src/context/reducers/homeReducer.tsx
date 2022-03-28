import nextId from 'react-id-generator';
const initialState = {
	links: ['nosotros', 'productos', 'portafolio', 'contacto', 'blogs'],
	productos: ['monofocales', 'maquillaje', 'bifocales'],
	date: {
		name: 'ojosdeaviador',
		domain: 'ojosdeaviador',
		logo:
			'https://res.cloudinary.com/dvcyhn0lj/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1647701955/glass/Ojo_de_Aviador_Logo_-_Original_-_5000x5000_ez1pnq.png',
		phoneNumber: 68125377,
		map:
			'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d478.12206819657405!2d-68.14811629921392!3d-16.527281696176196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf63438207b7%3A0x32a48a41599e5d72!2sGran%20Plaza%2C%20Av.%20B%2C%20El%20Alto!5e0!3m2!1ses!2sbo!4v1646946478230!5m2!1ses!2sbo'
	},
	activeLinks: null,
	sliders: [
		{
			id: nextId(),
			title: 'Protege Tus Ojos',
			content: 'Hasta El 50% De Descuento',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194764/glass/home/home-bg-1_ti0s6k.png',
			imageBanner:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194760/glass/home/banner-1_qosouy.jpg'
		},
		{
			id: nextId(),
			title: 'Protege Tus Ojos',
			content: 'Hasta El 40% De Descuento',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194762/glass/home/home-bg-2_psqook.png',
			imageBanner:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194760/glass/home/banner-2_xao4yr.jpg'
		},
		{
			id: nextId(),
			title: 'Protege Tus Ojos',
			content: 'Hasta El 30% De Descuento',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194763/glass/home/home-bg-3_hzvncq.png',
			imageBanner:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645194760/glass/home/banner-3_mvhxwv.jpg'
		}
	],
	activeSlider: null,
	banners: [
		{
			id: nextId(),
			title: 'Hasta el 30% de descuento',
			content: 'oferta limitada',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647098140/piccoletti/banner/cat-1_hq8iu2.jpg'
		},
		{
			id: nextId(),
			title: 'Hasta el 20% de descuento',
			content: 'oferta limitada',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647098140/piccoletti/banner/cat-1_hq8iu2.jpg'
		},
		{
			id: nextId(),
			title: 'Hasta el 10% de descuento',
			content: 'oferta limitada',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647098140/piccoletti/banner/cat-1_hq8iu2.jpg'
		}
	],
	activeBanner: null,
	categories: [
		{
			id: nextId(),
			title: 'lentes de mujer',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647702257/glass/categories/2343476_fcgexv.png'
		},
		{
			id: nextId(),
			title: 'alimento para perros',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647650753/Stylopets/categorias/2295142_bdq4os.png'
		},
		{
			id: nextId(),
			title: 'accesorios para gatos',
			image: 'https://cdn-icons-png.flaticon.com/512/1818/1818405.png'
		},
		{
			id: nextId(),
			title: 'accesorios para perros',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647651167/Stylopets/categorias/3636172_gohrdn.png'
		}
	],
	activeCategory: null
};

export const homeReducer = (state = initialState, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const categoryReducer = (state = initialState, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const startReducer = (state = initialState, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const bannerReducer = (state = initialState, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};
