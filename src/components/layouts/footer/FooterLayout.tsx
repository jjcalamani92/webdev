import { FooterLink } from './FooterLink';
import { FooterHorario } from './FooterHorario';
import { FooterContact } from './FooterContact';
import { FooterAbout } from './FooterAbout';
import { FooterInfo } from './FooterInfo';
import { useSelector } from 'react-redux';

interface State {
	Start: any;
}

export const FooterLayout = () => {
	const { date } = useSelector((state: State) => state.Start);
	const { name, domain, logo, phoneNumber, map } = date;

	return (
		<>
			{/* <section className="footer">
				<FooterLink />
				<FooterHorario />
				<FooterContact domain={domain} phoneNumber={phoneNumber} />
				<FooterInfo />
			</section> */}
			<FooterAbout />
		</>
	);
};
