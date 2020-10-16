import Dashboard from "views/Dashboard.js";
import Upload from "views/Upload"
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import FeatureEngineering from "views/Features/FeatureEngineering.js"
import MLAnalysis from "views/Features/MLAnalysis"
import NeuralNetworks from "views/Features/NeuralNetworks"
import NLP from "views/Features/NLP"

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/upload",
    name: "Upload Data",
    icon: "nc-icon nc-bank",
    component: Upload,
    layout: "/admin",
  },
  {
    path: "/feature_engineering",
    name: "Feature Engineering",
    icon: "nc-icon nc-bank",
    component: FeatureEngineering,
    layout: "/admin",
  },
  {
    path: "/ml_analysis",
    name: "Machine Learning",
    icon: "nc-icon nc-bank",
    component: MLAnalysis,
    layout: "/admin",
  },
  {
    path: "/classification",
    name: "NN Classification",
    icon: "nc-icon nc-bank",
    component: NeuralNetworks,
    layout: "/admin",
  },
  {
    path: "/nlp",
    name: "NLP",
    icon: "nc-icon nc-bank",
    component: NLP,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "nc-icon nc-diamond",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "nc-icon nc-pin-3",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  {
    pro: true,
    path: "/user-page",
    name: "User Profile",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "nc-icon nc-caps-small",
  //   component: Typography,
  //   layout: "/admin",
  // },
];
export default routes;
