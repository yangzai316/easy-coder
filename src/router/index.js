import { Link } from "react-router-dom";
import React from "react";
import EasyIcon from "./../components/EasyIcon";
import SetPageContent from "./../pages/set-page-content";
import SetRoute from "./../pages/set-route";
import SetProject from "./../pages/set-project.js";
import Test from "./../pages/test/index.js";

const router = [
  {
    label: <Link to="/set-project"> </Link>,
    key: "/set-project",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-shiyonggongju
      </EasyIcon>
    ),
    element: <SetProject />,
  },
  {
    label: <Link to="/set-route"> </Link>,
    key: "/set-route",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-shuxingtu
      </EasyIcon>
    ),
    element: <SetRoute />,
  },
  {
    label: <Link to="/set-page-content"> </Link>,
    key: "/set-page-content",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-huanjingsheji
      </EasyIcon>
    ),
    element: <SetPageContent />,
  },
  {
    label: <Link to="/test"> </Link>,
    key: "/test",
    icon: (
      <EasyIcon color="#fff" fontSize="24">
        icon-huanjingsheji
      </EasyIcon>
    ),
    element: <Test />,
  },
];

export default router;
