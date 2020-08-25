import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Youtube from "../views/Youtube.vue";
import GoogleKeep from "../views/GoogleKeep.vue";
import MainApp from "../views/MainApp.vue";
import GoogleContacts from "../views/GoogleContacts.vue";
import LoginForm from "../views/LoginForm.vue";
import Elements from "../views/Elements.vue";
import DoubleSideBar from "../views/DoubleSideBar.vue";
import SimpleApp from "../views/SimpleApp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/youtube",
    name: "Youtube",
    component: Youtube
  },
  {
    path: "/simple",
    name: "Simple",
    component: SimpleApp
  },
  {
    path: "/double",
    name: "Double",
    component: DoubleSideBar
  },
  {
    path: "/main",
    name: "MainApp",
    component: MainApp
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: GoogleContacts
  },
  {
    path: "/keep",
    name: "Keep",
    component: GoogleKeep
  },
  {
    path: "/login",
    name: "login",
    component: LoginForm
  },
  {
    path: "/elements",
    name: "Elements",
    component: Elements
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
