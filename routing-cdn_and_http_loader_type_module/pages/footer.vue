<template>
  <footer>
    <p>by gmapdev</p>
    <p>footer.vue</p>
    <p>{{ ab }}</p>
    <!-- <div id="appz">
      <nav>
        <ul>
          <router-link class="nav-link" to="/"> Home </router-link>
        </ul>
      </nav>
      <router-view></router-view>
    </div> -->
  </footer>
</template>

<style scoped>
footer {
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

/* var routes = [
  { path: "/", component: Home },
  { path: "/download", component: httpVueLoader("./pages/download.vue") },
  { path: "/sobre", component: httpVueLoader("./pages/sobre.vue") },
];

var router = new VueRouter({
  routes: routes,
  mode: "history",
  //base: "/#",
  base: "/",
});

var app = new Vue({
  el: "#app",
  router: router,
}); */
</script>

