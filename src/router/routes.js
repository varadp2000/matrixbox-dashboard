import Register from "../components/admin/auth/register";
import Login from "../components/admin/auth/login";
import dashboard from "../components/admin/dashboard/dashboard.vue";
import newadmin from "../components/forms/newadmin.vue";
import viewadmin from "../components/admin/tables/admintable.vue";
import profile from "../components/profile/profile.vue";
import addpackage from "../components/forms/addpackage.vue";
import empdashboard from "../components/admin/dashboard/empdashboard.vue";
import trackerdashboard from "../components/admin/dashboard/trackerdashboard.vue";
import packages from "../components/admin/tables/packages.vue";
import packaged from "../components/profile/package.vue";
import HelloWorld from "../components/client/HelloWorld.vue";
import about from "../components/client/about.vue";
import contact from "../components/client/contact.vue";
import mission from "../components/client/mission.vue";
import track from "../components/client/track.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/mission",
    name: "mission",
    component: mission,
  },
  {
    path: "/admin/login",
    component: Login,
    name: "login",
  },
  {
    path: "/employee/login",
    component: Login,
    name: "login",
  },
  {
    path: "/tracker/login",
    component: Login,
    name: "login",
  },
  {
    path: "/admin/register",
    component: Register,
    name: "register",
  },
  {
    path: "/admin/",
    component: dashboard,
    name: "dashboard",
  },
  {
    path: "/admin/newadmin",
    component: newadmin,
    name: "newadmin",
  },
  {
    path: "/admin/viewadmin",
    component: viewadmin,
    name: "showadmin",
  },
  {
    path: "/admin/view/:id",
    component: profile,
    name: "profile",
  },
  {
    path: "/employee/addpackage",
    component: addpackage,
    name: "addpkg",
  },
  {
    path: "/admin/newemployee",
    component: newadmin,
    name: "newemp",
  },
  {
    path: "/admin/newtracker",
    component: newadmin,
    name: "newtracker",
  },
  {
    path: "/admin/newdeliveryboy",
    component: newadmin,
    name: "newdeliveryboy",
  },
  {
    path: "/admin/viewemp",
    component: viewadmin,
    name: "showemp",
  },
  {
    path: "/admin/viewtracker",
    component: viewadmin,
    name: "showtracker",
  },
  {
    path: "/admin/viewdeliveryboy",
    component: viewadmin,
    name: "showdeliveryboy",
  },
  {
    path: "/employee",
    component: empdashboard,
    name: "empdashboard",
  },
  {
    path: "/tracker",
    component: trackerdashboard,
    name: "trackerdashboard",
  },
  {
    path: "/admin/packages",
    component: packages,
    name: "packages",
  },
  {
    path: "/admin/package/:id",
    component: packaged,
    name: "showPackage",
  },
  {
    path: "/track",
    component: track,
    name: "track",
  },
];

export default routes;
