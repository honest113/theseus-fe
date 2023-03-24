import "./scss/app.scss";
import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/error-page/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
