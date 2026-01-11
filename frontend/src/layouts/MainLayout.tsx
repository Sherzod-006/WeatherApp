//IMPORTING RRD
import { Outlet } from "react-router-dom";
//IMPORTING COMPONENTS

const MainLayout = () => {
  return (
    <main>
      {/* <Header /> */}
      {/* <HamburgerMenu /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </main>
  );
};

export default MainLayout;
