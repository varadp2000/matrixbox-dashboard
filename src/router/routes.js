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
    path: "/superadmin/login",
    component: Login,
    name: "login",
  },
  {
    path: "/admin/login",
    component: Login,
    name: "login",
  },
  {
    path: "/tracker/login",
    component: Login,
    name: "login",
  },
  {
    path: "/superadmin/register",
    component: Register,
    name: "register",
  },
  {
    path: "/superadmin/",
    component: dashboard,
    name: "dashboard",
  },
  {
    path: "/superadmin/newadmin",
    component: newadmin,
    name: "newadmin",
  },
  {
    path: "/superadmin/viewadmin",
    component: viewadmin,
    name: "showadmin",
  },
  {
    path: "/superadmin/view/:id",
    component: profile,
    name: "profile",
  },
  {
    path: "/admin/addpackage",
    component: addpackage,
    name: "addpkg",
  },
  {
    path: "/superadmin/newadmin",
    component: newadmin,
    name: "newemp",
  },
  {
    path: "/superadmin/newtracker",
    component: newadmin,
    name: "newtracker",
  },
  {
    path: "/superadmin/newdeliveryboy",
    component: newadmin,
    name: "newdeliveryboy",
  },
  {
    path: "/superadmin/viewemp",
    component: viewadmin,
    name: "showemp",
  },
  {
    path: "/superadmin/viewtracker",
    component: viewadmin,
    name: "showtracker",
  },
  {
    path: "/superadmin/viewdeliveryboy",
    component: viewadmin,
    name: "showdeliveryboy",
  },
  {
    path: "/admin",
    component: empdashboard,
    name: "empdashboard",
  },
  {
    path: "/tracker",
    component: trackerdashboard,
    name: "trackerdashboard",
  },
  {
    path: "/superadmin/packages",
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
