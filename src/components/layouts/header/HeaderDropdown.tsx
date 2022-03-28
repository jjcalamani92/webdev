import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
interface State {
  Start: any;
}
export const HeaderDropdown = () => {
  const { productos } = useSelector((state: State) => state.Start);
  return (
    <ul className="dropdown">
      {productos.map((link: any, i: number) => (
        <li key={i}>
          <NavLink to={`/${link}`}>{link}</NavLink>
        </li>
      ))}
    </ul>
  );
};
