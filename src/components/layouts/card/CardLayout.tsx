import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

interface Props {
  id: String;
  title: String;
  image: String;
  price: String;
  oldPrice: String;
  category: String;
}

export const CardLayout = ({
  id,
  title,
  image,
  price,
  oldPrice,
  category
}: Props) => {
  return (
    <NavLink to={`/${category}/${id}`} className="card">
      <div className="image">
        <img src={`${image[0]}`} alt={`${title}`} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <div className="stars">
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
        </div>
        <div className="price">
          Bs {price} <span>Bs {oldPrice}</span>
        </div>
      </div>
    </NavLink>
  );
};
