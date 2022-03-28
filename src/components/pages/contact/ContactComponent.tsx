import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeadingTertiary } from '../../layouts/heading/HeadingLayouts';
import { ContactForm } from './ContactForm';
import { ContactIcons } from './ContactIcons';
import { ContactImage } from './ContactImage';
import { ContactMap } from './ContactMap';

import { useSelector } from 'react-redux';

interface State {
	Start: any;
}

export const ContactComponent = () => {
	const { date } = useSelector((state: State) => state.Start);
	const { name, domain, logo, phoneNumber, map } = date;
	console.log(date);
	return (
		<section className="contact">
			<ContactIcons domain={domain} phoneNumber={phoneNumber} />
			<div className="row">
				<ContactImage />
				<ContactForm />
			</div>
			{/* <HeadingTertiary title="Nuestras sucursales"/>
            <div className="sucursales">
                <ContactMap
                    map={map}
                />
                <ContactImage/>
            </div> */}
		</section>
	);
};
