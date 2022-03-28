import { Outlet } from "react-router-dom";
import { FooterLayout } from "../components/layouts/footer/FooterLayout";
import { HeaderLayout } from "../components/layouts/header/HeaderLayout";
import { ButtonWhatsapp } from '../components/layouts/button/ButtonLayout';

export const Layout = () => {
  return (
    <>
      <HeaderLayout />
      <>
        <Outlet />
      </>
      <FooterLayout />
      {/* <ButtonWhatsapp/> */}
    </>
  );
};
