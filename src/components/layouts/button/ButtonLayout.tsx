import { faWhatsapp, faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ButtonPrimary = (props: any) => {
  const { title, className, handleclick } = props;
  return (
    <button className={`${className}`} onClick={handleclick}>
      {title}
      {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
    </button>
  );
};

export const ButtonWhatsapp = (props: any) => {
  const { title, className, handleclick } = props;
  return (
    <a className="btn-whatsapp" href="">
      <img src="https://res.cloudinary.com/dvcyhn0lj/image/upload/v1646948122/terrakota/contact/WhatsApp_2BLogo_svmdnf.png" alt="" />
    </a>
  );
};