import { Link, NavLink } from "react-router-dom";

interface Props {
  title: String;
  image: String;
  titleURL: String;
}

export const CategoryCard = ({ title, image, titleURL }: Props) => {
  return (
    <NavLink to={`/${titleURL}`} className="box">
      <img src={`${image}`} alt={`${title}`} />
      <p>{title}</p>
    </NavLink>
  );
};
