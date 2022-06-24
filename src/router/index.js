import { NavLink } from "react-router-dom";
import React from "react";
import EasyIcon from "./../components/EasyIcon";
import Home from "./../pages/home";
import SetPageContent from "./../pages/set-page";
import SetRoute from "./../pages/set-route";
import SetProject from "./../pages/set-project";
import SetDataSource from "./../pages/set-datasource";
import Test from "./../pages/test/index.js";

const router = [
  {
    label: <NavLink to="/"></NavLink>,
    key: "/",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-home
      </EasyIcon>
    ),
    element: <Home />,
  },
  {
    label: <NavLink to="/set-project"></NavLink>,
    key: "/set-project",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-shiyonggongju
      </EasyIcon>
    ),
    element: <SetProject />,
  },
  {
    label: <NavLink to="/set-route"></NavLink>,
    key: "/set-route",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-shuxingtu
      </EasyIcon>
    ),
    element: <SetRoute />,
  },
  {
    label: <NavLink to="/set-page"></NavLink>,
    key: "/set-page",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-huanjingsheji
      </EasyIcon>
    ),
    element: <SetPageContent />,
  },
  {
    label: <NavLink to="/set-datasource"></NavLink>,
    key: "/set-datasource",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-yunshujuku
      </EasyIcon>
    ),
    element: <SetDataSource />,
  },
  {
    label: <NavLink to="/test"></NavLink>,
    key: "/test",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-chilun
      </EasyIcon>
    ),
    element: <Test />,
  },
];

export default router;
