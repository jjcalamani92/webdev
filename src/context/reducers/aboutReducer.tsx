import nextId from 'react-id-generator';

const initialState = {
	aboutMe: {
		nombre: 'Jesus Calamani',
		edad: 29,
		email: 'jesuscalamani@outlook.com',
		direccion: 'La Paz - Bolivia',
		freelance: 'Disponible',
		skill: 'Full Stack Developer Jr',
		lenguaje: 'Español, Ingles',
		añosExperiencia: 3,
		clientesFelices: 6,
		proyectosCompletados: 7
	},
	activeAbout: null,
	skills: [
		{
			id: nextId(),
			title: 'html',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018099/React-jj/habilidades/icon-1_s0ka77.png',
			description:
				'HTML, siglas en inglés de HyperText Markup Language (‘lenguaje de marcado de hipertexto’), hace referencia al lenguaje de marcado para la elaboración de páginas web.',
			type: 'frontend'
		},
		{
			id: nextId(),
			title: 'css',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018099/React-jj/habilidades/icon-2_kmnk3j.png',
			description:
				'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.',
			type: 'frontend'
		},
		{
			id: nextId(),
			title: 'javascript',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018099/React-jj/habilidades/icon-3_lgz1fh.png',
			description:
				'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.',
			type: 'frontend'
		},
		{
			id: nextId(),
			title: 'sass',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018100/React-jj/habilidades/icon-4_d7lq4d.png',
			description:
				'Sass es un lenguaje de hoja de estilos en cascada inicialmente diseñado por Hampton Catlin y desarrollado por Natalie Weizenbaum.​​Después de sus versiones iniciales, Nathan Weizenbaum y Chris Eppstein han continuado extendiendo Sass con SassScript, un lenguaje de script simple, usado en los ficheros Sass.',
			type: 'frontend'
		},
		{
			id: nextId(),
			title: 'node',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018101/React-jj/habilidades/icon-5_imd9ev.png',
			description:
				'Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.',
			type: 'backend'
		},
		{
			id: nextId(),
			title: 'angular',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018100/React-jj/habilidades/icon-7_vv3yl3.png',
			description:
				'Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página.',
			type: 'framework'
		},
		{
			id: nextId(),
			title: 'git',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018100/React-jj/habilidades/icon-10_ruozxc.png',
			description:
				'Git es un software de control de versiones diseñado por Linus Torvalds, pensando en la eficiencia, la confiabilidad y compatibilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.'
		},
		{
			id: nextId(),
			title: 'github',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018100/React-jj/habilidades/icon-11_jjgd5p.png',
			description:
				'GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. El software que opera GitHub fue escrito en Ruby on Rails. Desde enero de 2010, GitHub opera bajo el nombre de GitHub, Inc.',
			__v: 0
		},
		{
			id: nextId(),
			title: 'MongoDB',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018100/React-jj/habilidades/icon-12_zgzj5s.png',
			description:
				'MongoDB (del inglés humongous, "enorme") es un sistema de base de datos NoSQL, orientado a documentos y de código abierto.\n\nEn lugar de guardar los datos en tablas, tal y como se hace en las bases de datos relacionales, MongoDB guarda estructuras de datos BSON (una especificación similar a JSON) con un esquema dinámico, haciendo que la integración de los datos en ciertas aplicaciones sea más fácil y rápida. ',
			type: 'backend'
		},
		{
			id: nextId(),
			title: 'Bootstrap',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018101/React-jj/habilidades/icon-13_tej2gs.png',
			description:
				'Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.'
		},
		{
			id: nextId(),
			title: 'MySQL',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644018101/React-jj/habilidades/icon-9_uqvvmb.png',
			description:
				'MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos de código abierto más popular del mundo,1​2​ y una de las más populares en general junto a Oracle y Microsoft SQL Server, todo para entornos de desarrollo web. ',
			type: 'backend'
		},
		{
			id: nextId(),
			title: 'php',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645051330/React-jj/habilidades/php-icon-png-7_fo1vgx.png',
			description:
				'PHP es un lenguaje de programación de uso general que se adapta especialmente al desarrollo web.​ Fue creado inicialmente por el programador danés-canadiense Rasmus Lerdorf en 1994.​ En la actualidad, la implementación de referencia de PHP es producida por The PHP Group.',
			type: 'backend'
		},
		{
			id: nextId(),
			title: 'express',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645136779/React-jj/habilidades/60d5df5a051d8765f7027878_expressjs_xzjdbg.png',
			description:
				'Traducción del inglés-Express.js, o simplemente Express, es un marco de aplicación web de back-end para Node.js, lanzado como software gratuito y de código abierto bajo la licencia MIT. Está diseñado para crear aplicaciones web y API. Se le ha llamado el marco de servidor estándar de facto para Node.js.',
			type: 'framework'
		},
		{
			id: nextId(),
			title: 'Typescript',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645136729/React-jj/habilidades/Typescript_logo_2020_gjeedj.svg',
			description:
				'TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.'
		}
	],
	activeSkill: null,
	courses: [
		{
			id: nextId(),
			title: 'Desarrollo Web Completo Con HTML5, CSS3, JS AJAX PHP Y MySQL',
			academy: '[UDEMY]',
			description:
				'Un curso paso a paso si deseas comenzar en el mundo de la programación Web.',
			teacher: 'Juan Pablo De La Torre Valdez',
			date: '2019-2020'
		},
		{
			id: nextId(),
			title: 'CSS Grid Y Flexbox, La Guía Definitiva',
			academy: '[UDEMY]',
			description:
				'Si nunca has escrito una sola línea de Código HTML y CSS este curso es para ti, incluso si quieres profundizar y dominar las nuevas formas de crear layouts como son Flexbox, CSS Grid, Propiedades Lógicas este curso es para ti.',
			teacher: 'Juan Pablo De La Torre Valdez',
			date: '2019-2020'
		},
		{
			id: nextId(),
			title: 'JavaScript Moderno Guía Definitiva',
			academy: '[UDEMY]',
			description:
				'En este curso aprenderás JavaScript desde los fundamentos hasta temas más avanzados como Prototypes, Delegation, Classes, Ajax, Promises, Generadores, Orientado a Objetos, Fetch API, Async Await, Async JS, Objetos, así como consumir REST APIs entre muchos más.',
			teacher: 'Juan Pablo De La Torre Valdez',
			date: '2019-2020'
		},
		{
			id: nextId(),
			title: 'Bootstrap 4 TODO sobre diseño web con BOOTSTRAP',
			academy: '[UDEMY]',
			description:
				'Con este curso aprenderás a crear páginas web con BOOTSTRAP 4, lo único que necesitas es tener conocimientos básicos de HTML Y CSS.',
			teacher: 'Carlos Valdes',
			date: '2019-2020'
		},
		{
			id: nextId(),
			title: 'Curso de Bootstrap 4',
			academy: '[UDEMY]',
			description:
				'Crea sitios web compatibles entre navegadores de forma fácil y práctica con Bootstrap, un framework frontend que te permite definir estructuras y agregar estilos, comportamientos, modals, tooltips y animaciones. Conoce cómo y en qué casos usarlo en este Curso de Bootstrap.',
			teacher: 'Sacha Lifszyc',
			date: '2019-2020'
		},
		{
			id: nextId(),
			title: 'JavaScript – ECMAScript 6 y todos sus detalles',
			academy: '[UDEMY]',
			description:
				'Continua tu evolución en JavaScript al estándar ES6 y aprende todo lo que esta nueva entrega tiene para ti. ',
			teacher: 'Fernando Herrera',
			date: '2019-2020'
		},
		{
			id: nextId(),
			title: 'Node: De Cero A Experto',
			academy: '[UDEMY]',
			description:
				'Rest, despliegues, Heroku, Mongo, Git, GitHub, Sockets, archivos, JWT y mucho más para ser un experto en Node ',
			teacher: 'Fernando Herrera',
			date: '2019-2020'
		},
		{
			id: nextId(),
			title: 'PHP 7 Y MYSQL - Desarrollo Web Php Y Bases De Datos Mysql',
			academy: '[UDEMY]',
			description:
				'El curso completo, práctico y desde cero de php mysql aprende a programar en php desde cero con este master en php ',
			teacher: 'Carlos Valdes',
			date: '2019-2020'
		},
		{
			id: nextId(),
			title: 'GIT+GitHub',
			academy: '[UDEMY]',
			description:
				'Aprende a trabajar versionando tu código de una forma segura y en equipo. ',
			teacher: 'Fernando Herrera',
			date: '2019-2020'
		},
		{
			id: nextId(),
			title: 'React ( Hooks Y MERN )',
			academy: '[UDEMY]',
			description:
				'Context API, MERN, Hooks, Firestore, JWT, Testing, Autenticaciones, Despliegues, CRUD, Logs, SASS, Multiple Routers... ',
			teacher: 'Fernando Herrera',
			date: '2019-2020'
		},

		{
			id: nextId(),
			title: 'MEAN Stack: Master NodeJS Y Angular',
			academy: '[UDEMY]',
			description:
				'Implementaremos un proyecto que te enseñara paso a paso a como crear Aplicaciones Web con las herramientas integradas, en un curso pensado para desarrolladores Javascript.',
			teacher: 'Vaxi Drez',
			date: '2020-2021'
		},
		{
			id: nextId(),
			title: 'MongoDB',
			academy: '[CODIGO FACILITO]',
			description:
				'Aprende de bases de datos no relacionales con uno de los motores más populares en ese ámbito, MongoDB. Te enseñamos a manejar y consultar la BD desde 0.',
			teacher: 'Eduardo García',
			date: '2021-2022'
		},
		{
			id: nextId(),
			title: 'React Native',
			academy: '[UDEMY]',
			description:
				'TypeScript, React Native CLI, Google y Apple maps, cámara, GPS, polylines, hooks, autenticación, despliegues y más ',
			teacher: 'Fernando Herrera',
			date: '2021-2022'
		}
	],
	activeCourse: null,
	academys: [
		{
			id: nextId(),
			academy: 'UDEMY',
			description:
				'Udemy.com es una plataforma de aprendizaje en línea. Está dirigido a adultos profesionales.​ A diferencia de los programas académicos MOOC conducidos por tradicionales cursos de trabajo creados por las universidades, Udemy utiliza contenido de creadores en línea para vender y así conseguir ganancias.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645201091/React-jj/habilidades/education/udemy-1_rjq5fg.svg'
		},
		{
			id: nextId(),
			academy: 'platzi',
			description:
				'Platzi es una plataforma latinoamericana de educación en línea. ​ Fue fundada en 2014 por el ingeniero colombiano Freddy Vega y por el informático guatemalteco Christian Van Der Henst.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645201230/React-jj/habilidades/education/badge-empodera-ecb8c41b-cdee-4126-bfb3-a6872e2fe2f8_yie6wn.png'
		},
		{
			id: nextId(),
			academy: 'openwebinars',
			description:
				'Ponemos a tu alcance el nuevo modelo formativo con el que las empresas que cuidan su Talento IT consiguen los mejores resultados. Descubre la plataforma de eLearning tecnológico líder en el mercado hispanohablante. ',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645057336/React-jj/habilidades/education/ff80808165ffc80e01660abec89e00c1-large_btuuns.png'
		},
		{
			id: nextId(),
			academy: 'edteam',
			description:
				'EDteam es un proyecto con la convicción de que la educación es la herramienta más poderosa para cambiar el mundo. Los avances de la ciencia, la tecnología y todos los campos humanos se deben a la educación. Con educación, las personas pueden salir de la pobreza y alcanzar sus sueños.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645057210/React-jj/habilidades/education/edteam_nxcx8k.png'
		},
		{
			id: nextId(),
			academy: 'Código Facilito',
			description:
				'Aprende desarrollo web con HTML5, CSS y JavaScript. Backend con Python. React, Go, Laravel. Desarrollo móvil con Android, Flutter y mucho más. Desde tu casa.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645057468/React-jj/habilidades/education/VyV8Zp6p_UNT1GQaAthe3Ec_5_m03OhjNBZGvthRxcesnrmkXck3CwTfS7PjRqZh0_0_voujox.png'
		}
	],
	activeAcademy: null,
	works: [
		{
			id: nextId(),
			title: 'shop huellitas',
			content: 'Sitio web de una veterinaria',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019958/React-jj/portfolio/img01_wony4i.jpg',
			url: 'https://shophuellitas.netlify.app/',
			type: 'page',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'Bienes y raices',
			content: 'Página web de una empresa de venta de casas',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019960/React-jj/portfolio/img09_x5r0g8.jpg',
			url: 'https://heuristic-sinoussi-d6deb2.netlify.app/',
			type: 'page',
			work: 'desarrollo'
		},
		{
			id: nextId(),
			title: 'web development',
			content: 'Nuestro sitio',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644875469/React-jj/lvsgwhadou1vkgmoscqu.png',
			url: 'https://jjwebdevelopment92.herokuapp.com/',
			type: 'site',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'metal gym',
			content: 'Sitio web de un gimnasio',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019958/React-jj/portfolio/img05_ecdo2t.jpg',
			url: 'https://metalgym.netlify.app/',
			type: 'site',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'coffee shop',
			content: 'Tienda de café',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019959/React-jj/portfolio/img11_uac9q2.jpg',
			url: 'https://shopcafe.netlify.app/',
			type: 'page',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'coffee shop',
			content: 'Tienda de café',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019958/React-jj/portfolio/img06_qdtj6x.jpg',
			url: 'https://nervous-minsky-825e8e.netlify.app/',
			type: 'page',
			work: 'desarrollo'
		},
		{
			id: nextId(),
			title: 'pollo frito',
			content: 'Sitio web de un restaurante',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019958/React-jj/portfolio/img02_vpwfmk.jpg',
			url: 'https://donpollo.netlify.app/',
			type: 'page',
			work: 'desarrollo'
		},
		{
			id: nextId(),
			title: 'ADIIISOL',
			content: 'Tienda Online',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645643137/React-jj/portfolio/tamano-del-sol_hllriy.jpg',
			url: 'https://adiisol.herokuapp.com/',
			type: '',
			work: 'desarrollo'
		},
		{
			id: nextId(),
			title: 'Glasses Shop',
			content: 'Página web de una tienda de lentes',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645643597/React-jj/portfolio/tipos-de-lentes-instagram-ok-vision-lentes_rj7mim.jpg',
			url: 'https://glassesshops.herokuapp.com/',
			type: 'page',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'Constructora sol',
			content: 'Página web de una empresa constructora',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645643671/React-jj/portfolio/materiales-construccion_hxvw3j.jpg',
			url: 'https://constructorasol.herokuapp.com/',
			type: 'page',
			work: 'desarrollo'
		},
		{
			id: nextId(),
			title: 'ADMIN',
			content: 'Panel de administración de clientes',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644878059/React-jj/portfolio/Integrate-AdminLTE-In-Laravel-Complete-Guide-01_gdmqce.png',
			url: 'https://veranet.herokuapp.com/',
			type: 'app',
			work: 'desarrollo'
		},
		{
			id: nextId(),
			title: 'Academia Focus',
			content: 'Página web de una academia',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645713371/React-jj/portfolio/TN_school-notebook-with-pencil-animated-clipart-3_qy7zda.jpg',
			url: 'https://academyfocus.herokuapp.com/',
			type: 'page',
			work: 'desarrollo'
		},
		{
			id: nextId(),
			title: 'Car shop',
			content: 'Página web de agencia de venta de autos',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1644019960/React-jj/portfolio/img07_n1vbcz.jpg',
			url: 'https://carsshops.herokuapp.com/',
			type: 'page',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'Clinica Muelitas',
			content: 'Página web de una clinica dental',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1645749666/React-jj/portfolio/dentistaenalcorcon_i9ybur.jpg',
			url: 'https://clinicamuelitas.herokuapp.com/',
			type: 'page',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'Girly Store',
			content: 'Sitio web de una tienda de cosmeticos',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/c_scale,h_512/v1646743639/React-jj/portfolio/frases-para-vender-cosmeticos-1_w4nhxz.webp',
			url: 'https://girlystore.ga/',
			type: 'site',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'terrakota',
			content: 'Sitio web de una tienda de regalos',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647045916/React-jj/portfolio/apuesto-carpintero-trabajando-madera_1157-26130_s8o5ht.webp',
			url: 'https://regalosterrakota.tk/',
			type: 'ecommerce',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'recort',
			content: 'Página web de una empresa de bordados computarizados',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647046104/React-jj/portfolio/operador-mujer-haciendo-ajustes-moderna-maquina-bordar-computarizada_10069-6957_mjgiwn.webp',
			url: 'https://recort.tk/',
			type: 'page',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'ojos de aviador',
			content: 'Tienda de lentes',
			image:
				'https://www.hawkersco.com/dw/image/v2/BDSZ_PRD/on/demandware.static/-/Sites-Master-Catalog-Sunglasses/default/dw16e6b7c9/images/master/hawkers-lax-polarized-gold-alligator-HLAX21DEMP-l.jpg?sh=600&q=100',
			url: 'https://csb-jfzlvp.netlify.app/',
			type: 'ecommerce',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'stylopets',
			content: 'Tienda petshop',
			image:
				'https://thumbs.dreamstime.com/b/sentada-del-perrito-de-labrador-30817211.jpg',
			url: 'https://csb-19mhnr.netlify.app/',
			type: 'ecommerce',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'furniture',
			content: 'Tienda de muebles',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647618127/fortunite/home/home-img-1_ssumqp.webp',
			url: 'https://csb-psrv4i.netlify.app/',
			type: 'ecommerce',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'cheries',
			content: 'Tienda de cosmeticos',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646399063/cosmetic/home/home-img-1_a7zfwf.png',
			url: 'https://csb-nfl9mv.netlify.app/',
			type: 'ecommerce',
			work: 'produccion'
		},
		{
			id: nextId(),
			title: 'piccoletti',
			content: 'Tienda de ropa',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647615130/piccoletti/home/1-handsome-man-portrait-wearing-sunglasses-PGXE2JY_vvqt3d.png',
			url: 'https://csb-sm08n8.netlify.app/',
			type: 'ecommerce',
			work: 'produccion'
		}
	],
	activeWork: null,
	services: [
		{
			id: nextId(),
			title: 'Diseño Web',
			url: 'designer_web',
			content:
				'El diseño web es una actividad que consiste en la planificación, diseño, implementación y mantenimiento de sitios web.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648214554/React-jj/services/4668304_j357bs.png'
		},
		{
			id: nextId(),
			title: 'wordPress',
			content:
				'El posicionamiento en buscadores, optimización en motores de búsqueda o SEO (del inglés search engine optimization) es un conjunto de acciones orientadas a mejorar el posicionamiento de un sitio web en la lista de resultados de Google, Bing, u otros buscadores de internet.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648215855/React-jj/services/408693_o1vvpx.png'
		},
		{
			id: nextId(),
			title: 'Seo Marketing',
			content:
				'El posicionamiento en buscadores, optimización en motores de búsqueda o SEO (del inglés search engine optimization) es un conjunto de acciones orientadas a mejorar el posicionamiento de un sitio web en la lista de resultados de Google, Bing, u otros buscadores de internet.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648061564/React-jj/services/3045654_l2qrmy.png'
		},
		{
			id: nextId(),
			title: 'Alojamiento Web',
			content:
				'El alojamiento web (en inglés: web hosting) es el servicio que provee a los usuarios de Internet un sistema para poder almacenar información, imágenes, vídeo, o cualquier contenido accesible vía web.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648214214/React-jj/services/3581373_eglwnn.png'
		},
		{
			id: nextId(),
			title: 'Publicidad Digital',
			content:
				'La publicidad en Internet es una forma de mercadotecnia y publicidad digital que utiliza internet para dirigir mensajes promocionales a los clientes. Incluye el email marketing, mercadotecnia en buscadores web (SEM), mercadotecnia en redes sociales, muchos tipos de publicidad por visualización (como banners en páginas web) y publicidad móvil. ',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648214377/React-jj/services/4659021_wnajej.png'
		},
		{
			id: nextId(),
			title: 'Campaña Publicitaria',
			content:
				'Una campaña publicitaria es una estrategia de comunicación que llevan a cabo las empresas para difundir un producto, servicio o material de la marca a su mercado meta, con el objetivo de fijarla en la mente de sus consumidores potenciales.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648214444/React-jj/services/2740334_ykn12r.png'
		},
		{
			id: nextId(),
			title: 'Campaña Publicitaria',
			content:
				'Una campaña publicitaria es una estrategia de comunicación que llevan a cabo las empresas para difundir un producto, servicio o material de la marca a su mercado meta, con el objetivo de fijarla en la mente de sus consumidores potenciales.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648214444/React-jj/services/2740334_ykn12r.png'
		},
		{
			id: nextId(),
			title: 'diseño de logos',
			url: 'designer_web',
			content:
				'Marketing de Contenidos es una estrategia de Marketing enfocada en atraer clientes potenciales de una manera natural, a partir de contenidos relevantes que se distribuyen en los distintos canales y medios digitales en los que está la audiencia.',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1648214599/React-jj/services/4507921_zsgwvb.png'
		}
	]
};

export const aboutReducer = (state = initialState, action: any) => {
	switch (action.type) {
		default:
			return state;
	}
};
