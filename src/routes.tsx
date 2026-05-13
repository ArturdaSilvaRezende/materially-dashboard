import { BrowserRouter } from "react-router";
import AuthRoutes from "./modules/auth/routes";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
