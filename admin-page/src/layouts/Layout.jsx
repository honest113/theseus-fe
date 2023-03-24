import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TopNav from "../components/topnav/TopNav";
import "./css/layout.scss"
import Sidebar from "../components/sidebar/Sidebar";

const Layout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  } else
    return (
      <div className="layout">
        <Sidebar />
        <TopNav />
        <div className="main">
          <div className="main__content">
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default Layout;
