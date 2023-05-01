import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Opening/HomeView.vue";
import ClosingView from "../views/Closing/Closing.vue";
import QuestionView from "../views/Survey/QuestionView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/question",
    name: "Question",
    component: QuestionView,
  },
  {
    path: "/closing",
    name: "closing",
    component: ClosingView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
