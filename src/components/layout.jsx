import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import { useSelector } from "react-redux";


const Layout = () => {

   const {isHeaderExpanded} = useSelector(state=>state.portfolio)

  return (
    <div>
      {/* Header receives the state and function to control expansion */}
      <Header />

      {/* Page Content (Hidden When Menu is Open on Small Screens) */}

      {isHeaderExpanded ? null : <div className="page-content">
        <Outlet /> {/* This renders the current route’s component */}
        </div>}
    </div>
  );
};

export default Layout;
