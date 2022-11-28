import Home from "./pages/home.vue.js";
import About from "./pages/about.vue.js";
//import Assets from "./pages/assets.vue.js";

const test = {
  template: `<p>Apenas uma rota de tests!</p>`,
};
const NotFound = {
  template: `<p>Não encontrado</p>`,
};

const app2 = new Vue({
  el: "#app2",
  data: {},
  components: {
    foo: httpVueLoader("./pages/footer.vue"),
    sobre: httpVueLoader("./pages/sobre.vue"),
  },
});

var routes = [
  { path: "/", component: Home },
  { path: "/download", component: httpVueLoader("./pages/download.vue") },
  { path: "/sobre", component: httpVueLoader("./pages/sobre.vue") },
  { path: "/test", component: test },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    //component: httpVueLoader("./pages/sobre.vue"),
    component: NotFound,
  },
];

var router = new VueRouter({
  routes: routes,
  mode: "history",
  //base: "/#apps",
  //base: "/app",
  base: "/#page=",
});

var app = new Vue({
  el: "#app",
  router: router,
});
