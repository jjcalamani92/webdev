import { useSelector } from "react-redux";
import { CartLayout } from "../cart/CartLayout";
import { HeaderIcon_1 } from "./HeaderIcon";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNavbar} from "./HeaderNavbar";
import { HeaderSearch } from './HeaderSearch';

interface State {
  Start: any;
}

export const HeaderLayout = () => {

  const { date } = useSelector((state: State) => state.Start);
  const {name, domain, logo, phoneNumber, map} = date;

  return (
    <>
      <header className="header">
        <div className="logo-navbar">
          <HeaderLogo logo={logo} />
          <HeaderNavbar />
        </div>

        <HeaderIcon_1 />
        <HeaderSearch/>
        <CartLayout/>
      </header>
    </>
  );
};
