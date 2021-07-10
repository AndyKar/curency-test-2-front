import Login from "./layouts/Auth/Login";
import Register from "./layouts/Auth/Register";
import Forgotten from "./layouts/Auth/Forgotten";

var routes = [
  {
    path: "/login",
    name: "login",
    icon: "tim-icons icon-atom",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "register",
    icon: "tim-icons icon-atom",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/forgotten",
    name: "forgotten",
    icon: "tim-icons icon-atom",
    component: Forgotten,
    layout: "/auth",
  }
];
export default routes;
