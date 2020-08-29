import VueRouter from "vue-router";
import routes from "./routes";
import Vue from "vue";

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: "history",
});

Vue.use(VueRouter);

export default router;
