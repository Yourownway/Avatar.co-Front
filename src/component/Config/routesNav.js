import PageProfil from "../organisms/HomePage/PageProfil/PageProfil";
import PageTraining from "../organisms/HomePage/PageTraining/PageTraining";
import PageCoaching from "../organisms/HomePage/PageCoaching/PageCoaching";

const routesNav = [
  {
    path: "/Home/Page/Profil",
    component: PageProfil,
  },
  {
    path: "/Home/Page/Training",
    component: PageTraining,
  },
  {
    path: "/Home/Page/Coaching",
    component: PageCoaching,
  },
];

export default routesNav;

// {
//   routesNav.map((route) => (
//     <Route key={route.path} path={route.path} component={route.component} />
//   ));
// }
