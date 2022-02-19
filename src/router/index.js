import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import Flexbox from "../views/Flexbox.vue";
import BasicLayout from "../views/BasicLayout.vue";
import CssGrid from "../views/CssGrid.vue";
import CssGridCopy from "../views/CssGridCopy.vue";
import WeatherApp from "../views/WeatherApp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    alias: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/about",
    redirect: { name: "About" },
  },
  {
    path: "/event/list",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true,
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/flex-box",
    name: "flex-box",
    component: Flexbox,
  },
  {
    path: "/basic-layout",
    name: "basic-layout",
    component: BasicLayout,
  },
  {
    path: "/css-grid",
    name: "css-grid",
    component: CssGrid,
  },
  {
    path: "/css-grid-copy",
    name: "css-grid-tvgry",
    component: CssGridCopy,
  },
  {
    path: "/weather",
    name: "weather-app",
    component: WeatherApp,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
