// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// core components/views for Admin layout
import Classifier from "views/Classifier/Classifier.jsx";

const demoRouter = prefix => [
  {
    path: `${prefix}/classifier`,
    name: "Classifier",
    icon: Dashboard,
    component: Classifier
  }
];

export default demoRouter;
