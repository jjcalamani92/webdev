import { types } from '../types/types';
import nextId from 'react-id-generator';

const initialState = {
	products: [
		{
			id: nextId(),
			title: 'Gucci GG0184O 005',
			image: [
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647702415/glass/product/lentes%20de%20mujer/448473_1603461450513_nt0z6z.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647702424/glass/product/lentes%20de%20mujer/448473_side_2_1603461450513_mrpv55.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647702442/glass/product/lentes%20de%20mujer/448473_side_3_1603461450514_juxmvb.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647702448/glass/product/lentes%20de%20mujer/10_eye_1639636418204_ufopj2.jpg'
			],
			description:
				'Esta temporada, las gafas Gucci GG0184O son una opción fashion de la marca de gafas Gucci . Para una óptima visión, ofrecemos gafas graduadas profesionales que combinan con tus monturas Transparent Grey y están hechas de Acetate . Con nuestra autenticidad garantizada y 24 meses de garantía.',
			marca: 'Gucci',
			sexo: 'Unisex',
			year: 2019,
			color: 'Transparent Grey',
			form: 'Cuadrados',
			style: 'Armazón completo',
			material: 'Acetate',
			prescripción: '-7.00 ~ +7.00',
			rango: '59-83mm',
			cristales_progresivos: 'No',
			material_lente: 'Customisable',
			UPC: 889652090337,
			Condición: 'Nuevo',
			category: 'lentes_de_mujer',
			oldPrice: '560',
			price: '251'
		},
		{
			id: nextId(),
			title: 'Gucci GG00260 001',
			image: [
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703220/glass/product/lentes%20de%20mujer/item02/352264_1599515196186_los14i.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703243/glass/product/lentes%20de%20mujer/item02/352264_side_2_1599515196186_uvcgj1.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703254/glass/product/lentes%20de%20mujer/item02/352264_side_3_1599515196186_wtyzz0.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703274/glass/product/lentes%20de%20mujer/item02/10_eye_1639636418204_uvkmvc.jpg'
			],
			description:
				'Para cada ocasión, las gafas de sol Gucci GG0026O son elegante y se adaptan a todos los outfits. Sus monturas de color trendy Negro combinadas con cristales Clear lens - transparent convierten este par de gafas en el más buscado de la colección Gucci . Con nuestra autenticidad garantizada y 2 años de garantía, obtén este par de gafas de sol Gucci por solo $184 en GafasWorld US.',
			marca: 'Gucci',
			sexo: 'Women',
			year: 2019,
			color: 'Negro',
			form: 'Cuadrados',
			style: 'Armazón completo',
			material: 'Acetate',
			prescripción: '-7.00 ~ +7.00',
			rango: '59-83mm',
			cristales_progresivos: 'No',
			material_lente: 'Customisable',
			UPC: 889652090337,
			Condición: 'Nuevo',
			category: 'lentes_de_mujer',
			oldPrice: '560',
			price: '184'
		},
		{
			id: nextId(),
			title: 'Gucci GG03990 002',
			image: [
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703593/glass/product/lentes%20de%20mujer/item03/531827_side_2_1619151612854_mmobiy.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703615/glass/product/lentes%20de%20mujer/item03/531827_side_3_1619151612854_qonolr.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703639/glass/product/lentes%20de%20mujer/item03/531827_1619151612854_zp4s1d.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703715/glass/product/lentes%20de%20mujer/item03/58_eye_1606201424042_qtzimn.jpg'
			],
			description:
				'Para cada ocasión, las gafas de sol Gucci GG0399O son elegante y se adaptan a todos los outfits. Sus monturas de color trendy Dorado combinadas con cristales Clear lens - transparent convierten este par de gafas en el más buscado de la colección Gucci . Con nuestra autenticidad garantizada y 2 años de garantía, obtén este par de gafas de sol Gucci por solo $291 en GafasWorld US.',
			marca: 'Gucci',
			sexo: 'Women',
			year: 2019,
			color: 'Negro',
			form: 'Cuadrados',
			style: 'Armazón completo',
			material: 'Acetate',
			prescripción: '-7.00 ~ +7.00',
			rango: '59-83mm',
			cristales_progresivos: 'No',
			material_lente: 'Customisable',
			UPC: 889652090337,
			Condición: 'Nuevo',
			category: 'lentes_de_mujer',
			oldPrice: '560',
			price: '209'
		},
		{
			id: nextId(),
			title: 'tom ford FT5401 020',
			image: [
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704047/glass/product/lentes%20de%20mujer/item04/307025_1599519560851_iuetci.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704080/glass/product/lentes%20de%20mujer/item04/307025_side_2_1599519560852_rpsme2.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704113/glass/product/lentes%20de%20mujer/item04/307025_side_3_1599519560852_v56iya.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704148/glass/product/lentes%20de%20mujer/item04/58_eye_1606201424042_gijh0w.jpg'
			],
			description:
				'Para cada ocasión, las gafas de sol Tom Ford FT5401 son elegante y se adaptan a todos los outfits. Sus monturas de color trendy Transparente combinadas con cristales Clear lens - transparent convierten este par de gafas en el más buscado de la colección Tom Ford . Con nuestra autenticidad garantizada y 2 años de garantía, obtén este par de gafas de sol Tom Ford por solo $186 en GafasWorld US.',
			marca: 'tom ford',
			sexo: 'Women',
			year: 2019,
			color: 'blanco',
			form: 'Cuadrados',
			style: 'Armazón completo',
			material: 'Acetate',
			prescripción: '-7.00 ~ +7.00',
			rango: '59-83mm',
			cristales_progresivos: 'No',
			material_lente: 'Customisable',
			UPC: 889652090337,
			Condición: 'Nuevo',
			category: 'lentes_de_mujer',
			oldPrice: '560',
			price: '186'
		},
		{
			id: nextId(),
			title: 'Tom Ford FT5634-B Blue-Light Block 001',
			image: [
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704639/glass/product/lentes%20de%20hombres/item02/448473_1603461450513_en2tdc.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704706/glass/product/lentes%20de%20hombres/item02/448473_side_2_1603461450513_zoyxes.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704764/glass/product/lentes%20de%20hombres/item02/448473_side_3_1603461450514_jqd3wf.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704818/glass/product/lentes%20de%20hombres/item02/10_eye_1639636418204_x4psl9.jpg'
			],
			description:
				'Las populares y favoritas gafas Tom Ford FT5634-B Blue-Light Block están disponibles en monturas Shiny Black que están finamente elaboradas con Plástico . Echa un vistazo a nuestras exclusivas ofertas en gafas graduadas y ahorra en todas nuestras gafas de la colección Tom Ford . ¡En SmartBuyGlasses , ofrecemos envío gratis y 24 meses de garantía en todos nuestros productos!',
			marca: 'tom ford',
			sexo: 'men',
			year: 2019,
			color: 'blanco',
			form: 'Cuadrados',
			style: 'Armazón completo',
			material: 'Acetate',
			prescripción: '-7.00 ~ +7.00',
			rango: '59-83mm',
			cristales_progresivos: 'No',
			material_lente: 'Customisable',
			UPC: 889652090337,
			Condición: 'Nuevo',
			category: 'lentes_de_hombre',
			oldPrice: '560',
			price: '209'
		},
		{
			id: nextId(),
			title: 'Tom Ford FT5661-B Blue-Light Block 001',
			image: [
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647705128/glass/product/lentes%20de%20hombres/item03/509279_1629699227601_oyogjx.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647705191/glass/product/lentes%20de%20hombres/item03/509279_side_2_1629699227602_soo7rw.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647705254/glass/product/lentes%20de%20hombres/item03/509279_side_3_1629699227602_nxxsyy.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647705320/glass/product/lentes%20de%20hombres/item03/58_eye_1606201424042_rsuzi7.jpg'
			],
			description:
				'Para cada ocasión, las gafas de sol Tom Ford FT5661-B Blue-Light Block son elegante y se adaptan a todos los outfits. Sus monturas de color trendy Shiny Black combinadas con cristales Clear lens - transparent convierten este par de gafas en el más buscado de la colección Tom Ford . Con nuestra autenticidad garantizada y 2 años de garantía, obtén este par de gafas de sol Tom Ford por solo $209 en GafasWorld US.',
			marca: 'tom ford',
			sexo: 'men',
			year: 2019,
			color: 'blanco',
			form: 'Cuadrados',
			style: 'Armazón completo',
			material: 'Acetate',
			prescripción: '-7.00 ~ +7.00',
			rango: '59-83mm',
			cristales_progresivos: 'No',
			material_lente: 'Customisable',
			UPC: 889652090337,
			Condición: 'Nuevo',
			category: 'lentes_de_hombre',
			oldPrice: '560',
			price: '209'
		},
		{
			id: nextId(),
			title: 'Tom Ford FT5661-B Blue-Light Block 002',
			image: [
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703416/glass/product/lentes%20de%20hombres/item05/430577_1599515596253_a3zyie.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703438/glass/product/lentes%20de%20hombres/item05/430577_side_2_1599515596253_runwg8.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703461/glass/product/lentes%20de%20hombres/item05/430577_side_3_1599515596253_iqpbcs.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647703482/glass/product/lentes%20de%20hombres/item05/10_eye_1639636418204_juhkhv.jpg'
			],
			description:
				'Para cada ocasión, las gafas de sol Tom Ford FT5401 son elegante y se adaptan a todos los outfits. Sus monturas de color trendy Transparente combinadas con cristales Clear lens - transparent convierten este par de gafas en el más buscado de la colección Tom Ford . Con nuestra autenticidad garantizada y 2 años de garantía, obtén este par de gafas de sol Tom Ford por solo $186 en GafasWorld US.',
			marca: 'tom ford',
			sexo: 'men',
			year: 2019,
			color: 'blanco',
			form: 'Cuadrados',
			style: 'Armazón completo',
			material: 'Acetate',
			prescripción: '-7.00 ~ +7.00',
			rango: '59-83mm',
			cristales_progresivos: 'No',
			material_lente: 'Customisable',
			UPC: 889652090337,
			Condición: 'Nuevo',
			category: 'lentes_de_hombre',
			oldPrice: '560',
			price: '186'
		},
		{
			id: nextId(),
			title: 'Tom Ford FT5674-B Blue-Light Block 001',
			image: [
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704339/glass/product/lentes%20de%20hombres/item01/420127_1599519761393_iyfbky.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704405/glass/product/lentes%20de%20hombres/item01/420127_side_2_1599519761393_usfd4x.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704464/glass/product/lentes%20de%20hombres/item01/420127_side_3_1599519761393_tsnb3g.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647704514/glass/product/lentes%20de%20hombres/item01/58_eye_1606201424042_fbxgab.jpg'
			],
			description:
				'Las populares y favoritas gafas Tom Ford FT5634-B Blue-Light Block están disponibles en monturas Shiny Black que están finamente elaboradas con Plástico . Echa un vistazo a nuestras exclusivas ofertas en gafas graduadas y ahorra en todas nuestras gafas de la colección Tom Ford . ¡En SmartBuyGlasses , ofrecemos envío gratis y 24 meses de garantía en todos nuestros productos!',
			marca: 'tom ford',
			sexo: 'men',
			year: 2019,
			color: 'blanco',
			form: 'Cuadrados',
			style: 'Armazón completo',
			material: 'Acetate',
			prescripción: '-7.00 ~ +7.00',
			rango: '59-83mm',
			cristales_progresivos: 'No',
			material_lente: 'Customisable',
			UPC: 889652090337,
			Condición: 'Nuevo',
			category: 'lentes_de_hombre',
			oldPrice: '560',
			price: '209'
		},
		{
			id: nextId(),
			title: 'Tom Ford FT5401 020',
			image: [
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647705554/glass/product/lentes%20de%20hombres/item04/307025_1599519560851_ijsffj.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647705626/glass/product/lentes%20de%20hombres/item04/307025_side_2_1599519560852_cqazzw.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647705707/glass/product/lentes%20de%20hombres/item04/307025_side_3_1599519560852_f2wdhg.jpg',
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647705799/glass/product/lentes%20de%20hombres/item04/58_eye_1606201424042_wqy5vr.jpg'
			],
			description:
				'Para cada ocasión, las gafas de sol Tom Ford FT5401 son elegante y se adaptan a todos los outfits. Sus monturas de color trendy Transparente combinadas con cristales Clear lens - transparent convierten este par de gafas en el más buscado de la colección Tom Ford . Con nuestra autenticidad garantizada y 2 años de garantía, obtén este par de gafas de sol Tom Ford por solo $186 en GafasWorld US.',
			marca: 'tom ford',
			sexo: 'men',
			year: 2019,
			color: 'blanco',
			form: 'Cuadrados',
			style: 'Armazón completo',
			material: 'Acetate',
			prescripción: '-7.00 ~ +7.00',
			rango: '59-83mm',
			cristales_progresivos: 'No',
			material_lente: 'Customisable',
			UPC: 889652090337,
			Condición: 'Nuevo',
			category: 'lentes_de_hombre',
			oldPrice: '560',
			price: '186'
		}
	],
	activeProduct: null,
	index: 0
};

export const productReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case types.setImage:
			return {
				...state,
				index: action.i
			};
		default:
			return state;
	}
};
