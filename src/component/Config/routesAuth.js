import AuthPage from "../organisms/Auth/AuthPage";
import HomePage from "../organisms/HomePage/HomePage";

const routesAuth = [
  {
    exact: true,
    path: "/",
    component: AuthPage,
  },
  {
    exact: false,
    path: "/Home",
    component: HomePage,
  },
];

export default routesAuth;
