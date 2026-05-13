import { Route, Routes } from "react-router";
import AuthLoginPage from "./pages/Login/auth-login";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLoginPage />} />
    </Routes>
  );
}
