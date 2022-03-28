import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';

interface State {
	App: any;
}

export const HeaderSearch = () => {
	const { search } = useSelector((state: State) => state.App);
	return (
		<form action="" className={search ? 'search active' : 'search'}>
			<input
				type="search"
				name=""
				placeholder="Busca aquí..."
				id="search-box"
			/>
			<label>
				<FontAwesomeIcon className="icon" icon={faSearch} />
			</label>
		</form>
	);
};
