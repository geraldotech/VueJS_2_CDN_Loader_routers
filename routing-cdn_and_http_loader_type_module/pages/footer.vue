<template>
  <footer>
    <p>by gmapdev - footer.vue - {{ ab }}</p>

    <div id="appz">
      <nav>
        <ul>
          <router-link to="/"> Home </router-link>
          <router-link to="/download"> Home </router-link>
          <router-link to="/sobre"> Home </router-link>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding-top: 15px;
  background: rgb(63, 39, 31);
  height: 50px;
  text-align: center;
}
</style>>
<script>
module.exports = {
  data: function () {
    return {
      ab: "Segunda",
    };
  },
};

var appz = new Vue({
  el: "#appz",
  router: routerz,
});
const Home = { template: `bem vindo!` };
const download = { template: `bem vindo!` };
const sobre = { template: `bem vindo!` };

var routesz = [
  { path: "/", component: Home },
  { path: "/download", component: download },
  { path: "/sobre", component: sobre },
];

var routerz = new VueRouter({
  routes: routesz,
  mode: "history",
  //base: "/#",
  base: "/",
});
</script>

