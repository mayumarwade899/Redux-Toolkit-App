import { Outlet } from "react-router-dom";
import { NavbarPanel } from "./NavbarPanel";

const RootLayouts = () => {
  return (
    <>
      <NavbarPanel />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayouts;
