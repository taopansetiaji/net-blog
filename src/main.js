import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

Vue.use(VueResource);
Vue.use(VueRouter);

// ----------> Custom Directives <-----------
// Vue.directive("rainbow", {
//   bind(el) {
//     el.style.color = "red";
//   },
// });

/*Vue.directive("theme", {
  bind(el, binding) {
    if (binding.value === "wide") {
      el.style.maxWidth = "1200px";
    } else if (binding.value === "narrow") {
      el.style.maxWidth = "560px";
    }
    if (binding.arg == "column") {
      el.style.background = "#ddd";
      el.style.padding = "20px";
    }
  },
});*/

// -----------> Filters <--------------
// Vue.filter("snippet", (value) => {
//   return value.slice(0, 100) + "...";
// });

// -----------> Router <---------------
import Routes from "./routes";
const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
