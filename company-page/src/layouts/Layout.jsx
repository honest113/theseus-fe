import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  } else
    return (
      <div>
        <div className="main">
          <div className="main__content">
            <Outlet />
          </div>
        </div>
      </div>
    );
};

export default Layout;
