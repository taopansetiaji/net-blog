<template>
  <div id="show-blogs">
    <h2>List Blog Titles</h2>
    <input type="text" v-model="search" placeholder="Search here ..." />
    <div
      class="single-blog"
      v-for="article in filterArticles"
      :key="article.id"
    >
      <h3 v-rainbow>{{ article.title | toUpperCase }}</h3>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

export default {
  name: "ListBlogs",
  data() {
    return {
      articles: [],
      search: "",
    };
  },
  created() {
    this.$http
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        this.articles = data.body.slice(0, 10);
      });
  },
  computed: {},
  filters: {
    toUpperCase: (value) => {
      return value.toUpperCase();
    },
    snippet: (value) => {
      return value.slice(0, 100) + "...";
    },
  },
  directives: {
    rainbow: {
      bind(el) {
        el.style.color =
          "#" +
          Math.random()
            .toString()
            .slice(2, 8);
      },
    },
  },
  mixins: [searchMixin],
};
</script>

<style scoped>
#show-blogs {
  max-width: 80%;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  background-color: #eee;
}
article {
  margin-top: 10px;
  /* font-weight: 300; */
}
input[type="text"] {
  height: 30px;
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  outline: #7090b0;
}
</style>
