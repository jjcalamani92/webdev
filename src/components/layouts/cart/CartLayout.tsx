import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

interface State {
	App: any;
}

export const CartLayout = () => {
	const { cart } = useSelector((state: State) => state.App);
	return (
		<div className={cart ? 'cart active ' : 'cart'}>
			<div className="cart-item">
				<span>
					{' '}
					<FontAwesomeIcon icon={faTimes} />{' '}
				</span>
				<img
					src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647128523/piccoletti/products/poleras/item05/Camiseta-Para-Hombre-Volga-Totto-Ra46624-2120-N01_7_ga4lnu.jpg"
					alt=""
				/>
				<div className="content">
					<h3>Polera Para Hombre Volga</h3>
					<div className="price">Bs 150</div>
				</div>
			</div>
			<div className="cart-item">
				<span>
					{' '}
					<FontAwesomeIcon icon={faTimes} />{' '}
				</span>
				<img
					src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647129109/piccoletti/products/poleras/item08/RA46911-2125-R52_7_ebxslp.jpg"
					alt=""
				/>
				<div className="content">
					<h3>Polera Para Hombre Mozartpro 5</h3>
					<div className="price">Bs 120</div>
				</div>
			</div>
			<a href="#" className="btn">
				comprar ahora
			</a>
		</div>
	);
};
