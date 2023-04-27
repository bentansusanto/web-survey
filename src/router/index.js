import Vue from "vue";
import VueRouter from "vue-router";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/Homepage/HomeView.vue";
import SurveyView from "../views/SurveyView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: SurveyView,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
      {
        path: "about",
        name: "about",
        component: AboutView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
