<template>
  <div id="app">
    <app-header />
    <router-view> </router-view>
  </div>
</template>

<script>
// import AddBlog from "./components/AddBlog";
// import ShowBlogs from "./components/ShowBlogs";
// import ListBlogs from "./components/ListBlogs";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    // "add-blog": AddBlog,
    // "show-blogs": ShowBlogs,
    // "list-blogs": ListBlogs,
    "app-header": Header,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
