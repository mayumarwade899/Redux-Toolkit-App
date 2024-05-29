import { Outlet } from "react-router-dom";
import { NavbarPanel } from "./NavbarPanel";
import { Provider } from "react-redux";
import store from "../Store/store";

const RootLayouts = () => {
  return (
    <>
      <Provider store={store}>
        <NavbarPanel />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayouts;
