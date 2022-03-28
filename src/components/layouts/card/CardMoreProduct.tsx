import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faShare,
  faShareNodes,
  faShoppingCart,
  faStar,
  faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setImage } from "../../../context/action/Product";

interface Props {
  id: String;
  title: String;
  image: String;
  price: String;
  oldPrice: String;
  category: String;
}

export const CardMoreProduct = ({
  id,
  title,
  image,
  price,
  oldPrice,
  category
}: Props) => {
  const url = (title: String) => {
    return title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .split("/")
      .join(" ")
      .toString()
      .toLowerCase()
      .split(" ")
      .join("_");
  };
  const titleURL = url(title);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setImage(0));
  };
  return (
    <NavLink
      to={`/${category}/${id}`}
      className="card-more"
      onClick={handleClick}
    >
      <div className="image">
        <img src={`${image[0]}`} alt={`${title}`} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        {/* <div className="stars">
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStar} />
          <FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
        </div> */}
        {/* <div className="price">
          Bs {price} <span>Bs {oldPrice}</span>
        </div> */}
      </div>
    </NavLink>
  );
};
