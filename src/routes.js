import Table from './views/Login';
import Table from '../views/Dashboard';
var routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "tim-icons icon-chart-pie-36",
      component: Dashboard,
      layout: "/admin"
    },
    {
        path: "/login",
        name: "Login",
        icon: "tim-icons icon-chart-pie-36",
        component: Login,
        layout: ""
    }
  ];
  export default routes;