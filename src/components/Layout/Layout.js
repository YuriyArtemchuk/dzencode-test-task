import { Outlet } from "react-router-dom";
import NavigationMenu from "./NavigationMenu";
import TopMenu from "./TopMenu";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <TopMenu />
      <main className="main">
        <NavigationMenu />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
