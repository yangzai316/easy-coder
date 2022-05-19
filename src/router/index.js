import { NavLink } from "react-router-dom";
import React from "react";
import EasyIcon from "./../components/EasyIcon";
import SetPageContent from "./../pages/set-page";
import SetRoute from "./../pages/set-route";
import SetProject from "./../pages/set-project";
import Test from "./../pages/test/index.js";

const router = [
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
