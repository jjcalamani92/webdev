import { types } from '../types/types';
import nextId from 'react-id-generator';

const initialState = {
	webs: [
		{
			id: nextId(),
			title: 'Moderne',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648067263/React-jj/webs/furniture-home-v1-preview_oilmao.jpg',
			url: 'https://ecomm.thememove.com/furniture/',
			type: 'ecommerce',
			category: 'furniture',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'Moderne',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648068114/React-jj/webs/furniture-home-v2-preview_rwpqqd.jpg',
			url: 'https://ecomm.thememove.com/furniture/home-v2/',
			type: 'ecommerce',
			category: 'furniture',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'Moderne',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648068244/React-jj/webs/furniture-home-v3-preview_nj0pwr.jpg',
			url: 'https://ecomm.thememove.com/furniture/home-v3/',
			type: 'ecommerce',
			category: 'furniture',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'peach',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648068356/React-jj/webs/cosmetics-home-v1-preview_rv4hnx.jpg',
			url: 'https://ecomm.thememove.com/cosmetics/',
			type: 'ecommerce',
			category: 'cosmetics',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'peach',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648068366/React-jj/webs/cosmetics-home-v2-preview_aez9gy.jpg',
			url: 'https://ecomm.thememove.com/cosmetics/home-v2/',
			type: 'ecommerce',
			category: 'cosmetics',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'peach',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648068376/React-jj/webs/cosmetics-home-v3-preview_wrv3yq.jpg',
			url: 'https://ecomm.thememove.com/cosmetics/home-v3/',
			type: 'ecommerce',
			category: 'cosmetics',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'plantas',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648068514/React-jj/webs/plants-home-v1-preview_j4uptq.jpg',
			url: 'https://ecomm.thememove.com/plants/',
			type: 'plants',
			category: 'plants',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'plantas',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648068527/React-jj/webs/plants-home-v2-preview_xpll1o.jpg',
			url: 'https://ecomm.thememove.com/plants/home-v2/',
			type: 'plants',
			category: 'plants',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'plantas',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648068542/React-jj/webs/plants-home-v3-preview_a2i50e.jpg',
			url: 'https://ecomm.thememove.com/plants/home-v3/',
			type: 'plants',
			category: 'plants',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'fashion',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648068770/React-jj/webs/fashion-home-v1-preview_iwhh4t.jpg',
			url: 'https://ecomm.thememove.com/fashion/',
			type: 'clothes',
			category: 'clothes',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'fashion',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648068798/React-jj/webs/fashion-home-v2-preview_jrvqzb.jpg',
			url: 'https://ecomm.thememove.com/fashion/home-v2/',
			type: 'clothes',
			category: 'clothes',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'fashion',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648068827/React-jj/webs/fashion-home-v3-preview_uc3wmf.jpg',
			url: 'https://ecomm.thememove.com/fashion/home-v3/',
			type: 'clothes',
			category: 'clothes',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'baby store',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069022/React-jj/webs/home-baby-store-v1_aonh5p.jpg',
			url: 'https://ecomm.thememove.com/baby-store/',
			type: 'baby_store',
			category: 'baby_store',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'baby store',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069061/React-jj/webs/home-baby-store-v2_avvdyu.jpg',
			url: 'https://ecomm.thememove.com/baby-store/home-v2/',
			type: 'baby_store',
			category: 'baby_store',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'baby store',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069089/React-jj/webs/home-baby-store-v3_pflt5z.jpg',
			url: 'https://ecomm.thememove.com/baby-store/home-v3/',
			type: 'baby_store',
			category: 'baby_store',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'séduisant',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069284/React-jj/webs/home-underwear-v1_bfsjg0.jpg',
			url: 'https://ecomm.thememove.com/underwear/',
			type: 'underwear',
			category: 'underwear',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'séduisant',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069325/React-jj/webs/home-underwear-v2_vbayna.jpg',
			url: 'https://ecomm.thememove.com/underwear/home-v2/',
			type: 'underwear',
			category: 'underwear',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'séduisant',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069374/React-jj/webs/home-underwear-v3-alt_xorav2.jpg',
			url: 'https://ecomm.thememove.com/underwear/home-v3/',
			type: 'underwear',
			category: 'underwear',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'simplify',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069538/React-jj/webs/home-kitchen-v1-alt_kxoovn.jpg',
			url: 'https://ecomm.thememove.com/kitchen/',
			type: 'kitchen',
			category: 'kitchen',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'simplify',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069587/React-jj/webs/home-kitchen-v2_u6pdpy.jpg',
			url: 'https://ecomm.thememove.com/kitchen/home-v2/',
			type: 'kitchen',
			category: 'kitchen',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'simplify',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069628/React-jj/webs/home-kitchen-v3_lqzusm.jpg',
			url: 'https://ecomm.thememove.com/kitchen/home-v3/',
			type: 'kitchen',
			category: 'kitchen',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'cookware',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069834/React-jj/webs/home-cookware-v1_j4qgvk.jpg',
			url: 'https://ecomm.thememove.com/cookware/',
			type: 'cookware',
			category: 'cookware',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'cookware',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069879/React-jj/webs/home-cookware-v2_ysd3bc.jpg',
			url: 'https://ecomm.thememove.com/cookware/home-v2/',
			type: 'cookware',
			category: 'cookware',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'cookware',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069925/React-jj/webs/home-cookware-v3_whkfza.jpg',
			url: 'https://ecomm.thememove.com/cookware/home-v3/',
			type: 'cookware',
			category: 'cookware',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'pets',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648069971/React-jj/webs/home-pets-v1-alt_v0htcm.jpg',
			url: 'https://ecomm.thememove.com/pets/',
			type: 'pets',
			category: 'pets',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'pets',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648070021/React-jj/webs/home-pets-v2_ga8arr.jpg',
			url: 'https://ecomm.thememove.com/pets/home-v2/',
			type: 'pets',
			category: 'pets',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'pets',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648070088/React-jj/webs/home-pets-v3_kgxoa8.jpg',
			url: 'https://ecomm.thememove.com/pets/home-v3/',
			type: 'pets',
			category: 'pets',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'organic',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648070197/React-jj/webs/home-organic-v1_bydgor.jpg',
			url: 'https://ecomm.thememove.com/organic/',
			type: 'organic',
			category: 'organic',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'organic',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648070270/React-jj/webs/home-organic-v2_nshlyr.jpg',
			url: 'https://ecomm.thememove.com/organic/home-v2/',
			type: 'organic',
			category: 'organic',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'organic',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648070360/React-jj/webs/home-organic-v3-alt_xvxix8.jpg',
			url: 'https://ecomm.thememove.com/organic/home-v3/',
			type: 'organic',
			category: 'organic',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'shoes',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648070456/React-jj/webs/home-shoes-v1-alt_aleljv.jpg',
			url: 'https://ecomm.thememove.com/shoes/',
			type: 'shoes',
			category: 'shoes',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'shoes',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648070521/React-jj/webs/home-shoes-v2-alt_sntgzh.jpg',
			url: 'https://ecomm.thememove.com/shoes/home-v2/',
			type: 'shoes',
			category: 'shoes',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'shoes',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648070594/React-jj/webs/home-shoes-v3_qj0qaw.jpg',
			url: 'https://ecomm.thememove.com/shoes/home-v3/',
			type: 'shoes',
			category: 'shoes',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'activewear',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648070696/React-jj/webs/home-activewear-v1_rzyegf.jpg',
			url: 'https://ecomm.thememove.com/activewear/',
			type: 'ecommerce',
			category: 'activewear',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'activewear',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648070807/React-jj/webs/home-activewear-v2_qk5pu5.jpg',
			url: 'https://ecomm.thememove.com/activewear/home-v2/',
			type: 'ecommerce',
			category: 'activewear',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'activewear',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648070938/React-jj/webs/home-activewear-v3_pbnh5d.jpg',
			url: 'https://ecomm.thememove.com/activewear/home-v3/',
			type: 'ecommerce',
			category: 'activewear',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'lawyer',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648071055/React-jj/webs/hero_home_02_n4bsoy.jpg',
			url: 'https://goldenblatt.bold-themes.com/main-demo/home/home-02/',
			type: 'lawyer',
			category: 'lawyer',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'lawyer',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648071129/React-jj/webs/hero_home_04_vuhuhj.jpg',
			url: 'https://goldenblatt.bold-themes.com/main-demo/home/home-04/',
			type: 'lawyer',
			category: 'lawyer',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'lawyer',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648071204/React-jj/webs/hero_slider_03_01_nxdhru.jpg',
			url: 'https://goldenblatt.bold-themes.com/main-demo/home/home-03/',
			type: 'lawyer',
			category: 'lawyer',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'lawyer',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648071721/React-jj/webs/inner_home_05_01_s7wlhu.jpg',
			url: 'https://goldenblatt.bold-themes.com/main-demo/home/home-05/',
			type: 'lawyer',
			category: 'lawyer',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'lawyer',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648071521/React-jj/webs/home_hero_01_xdekh7.jpg',
			url: 'https://goldenblatt.bold-themes.com/main-demo/home/home-06/',
			type: 'lawyer',
			category: 'lawyer',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'lawyer',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648071617/React-jj/webs/hero_home_05_ohqx5s.jpg',
			url: 'https://goldenblatt.bold-themes.com/main-demo/',
			type: 'lawyer',
			category: 'lawyer',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648125996/React-jj/webs/education/wordpress_themes_education_xa1mu3.jpg',
			url: 'https://masterstudy.stylemixthemes.com/classic-lms/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126014/React-jj/webs/education/wordpress_education_theme_orrlun.jpg',
			url: 'https://masterstudy.stylemixthemes.com/white-lms/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126034/React-jj/webs/education/wordpress_educational_themes_spabq6.jpg',
			url: 'https://masterstudy.stylemixthemes.com/dark-lms/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126176/React-jj/webs/education/education_themes_wordpress_o51fxp.jpg',
			url: 'https://masterstudy.stylemixthemes.com/udemy-affiliate/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126197/React-jj/webs/education/cooking_courses_atgjik.jpg',
			url: 'https://masterstudy.stylemixthemes.com/cooking-courses/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126221/React-jj/webs/education/tech_heirn8.jpg',
			url: 'https://masterstudy.stylemixthemes.com/tech/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126285/React-jj/webs/education/education_themes_for_wordpress_xgvpve.jpg',
			url: 'https://masterstudy.stylemixthemes.com/academy/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126351/React-jj/webs/education/wordpress_theme_education_yfloj0.jpg',
			url: 'https://masterstudy.stylemixthemes.com/course-hub/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126406/React-jj/webs/education/education_theme_for_wordpress_zsi3jv.jpg',
			url: 'https://masterstudy.stylemixthemes.com/one-instructor/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126514/React-jj/webs/education/education_wordpress_themes_nc7qm4.jpg',
			url: 'https://masterstudy.stylemixthemes.com/ms/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126563/React-jj/webs/education/education_wordpress_theme_wzxbea.jpg',
			url: 'https://masterstudy.stylemixthemes.com/language-center/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126614/React-jj/webs/education/educational_theme_wordpress_huiyt8.jpg',
			url: 'https://masterstudy.stylemixthemes.com/buddypress-demo/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126680/React-jj/webs/education/classic_lms_2_ydpogu.jpg',
			url: 'https://masterstudy.stylemixthemes.com/classic-lms-2/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126751/React-jj/webs/education/distance-learning_cvluld.jpg',
			url: 'https://masterstudy.stylemixthemes.com/distance-learning/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648126807/React-jj/webs/education/educational_wordpress_theme_dfjhvh.jpg',
			url: 'https://masterstudy.stylemixthemes.com/rtl-demo/',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'education',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648127248/React-jj/webs/education/tiser1_yuezlk.jpg',
			url:
				'http://preview.themeforest.net/item/driving-school-wordpress-theme/full_screen_preview/20616993',
			type: 'education',
			category: 'education',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'architecture',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648127958/React-jj/webs/architecture/1_xks9uq.jpg',
			url: 'https://bslthemes.site/larson/',
			type: 'architecture',
			category: 'architecture',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'architecture',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648128067/React-jj/webs/architecture/2_z2d6bg.jpg',
			url: 'https://bslthemes.site/larson/dark/',
			type: 'architecture',
			category: 'architecture',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'architecture',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648128173/React-jj/webs/architecture/3_pdnzt2.jpg',
			url: 'https://bslthemes.site/larson/home-default-2/',
			type: 'architecture',
			category: 'architecture',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'architecture',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648128277/React-jj/webs/architecture/4_l0banj.jpg',
			url: 'https://bslthemes.site/larson/dark/home-default-2/',
			type: 'architecture',
			category: 'architecture',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'architecture',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648128515/React-jj/webs/architecture/5_flzuo5.jpg',
			url: 'https://bslthemes.site/larson/home-interior/',
			type: 'architecture',
			category: 'architecture',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'architecture',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648128597/React-jj/webs/architecture/6_ht3lka.jpg',
			url: 'https://bslthemes.site/larson/dark/home-interior/',
			type: 'architecture',
			category: 'architecture',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'architecture',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648128678/React-jj/webs/architecture/7_umy1co.jpg',
			url: 'https://bslthemes.site/larson/home-parallax/',
			type: 'architecture',
			category: 'architecture',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'architecture',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648128760/React-jj/webs/architecture/8_abk6ca.jpg',
			url: 'https://bslthemes.site/larson/home-video/',
			type: 'architecture',
			category: 'architecture',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'architecture',
			content:
				'Ecomm se destaca por sus características de comercio electrónico, el personalizador del tema, orientado a mejorar sus ventas y simplemente ganar dinero.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648128842/React-jj/webs/architecture/9_jaxxex.jpg',
			url: 'https://bslthemes.site/larson/home-grid/',
			type: 'architecture',
			category: 'architecture',
			work: 'produccion'
		}
	],
	activeWeb: null,
	index: 0
};

export const webReducer = (state = initialState, action: any) => {
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
