import { ComponentType } from "react";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";

interface Route {
  type: "route";
  path: string;
  name: string;
  key: string;
  component: ComponentType<any>;
}

const routes: Route[] = [
  {
    type: "route",
    path: "/",
    name: "HomePage",
    key: "home-page",
    component: Home,
  },
  {
    type: "route",
    path: "favorites",
    name: "Favorites Page",
    key: "favorites-page",
    component: Favorites,
  },
];

export default routes;
