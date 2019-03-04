// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";

const demoRouter = prefix => [
  {
    path: `${prefix}`,
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  }
];

export default demoRouter;
