<template>
  <div id="show-blogs">
    <h2>All Aticles</h2>
    <input type="text" v-model="search" placeholder="Search here ..." />
    <div
      class="single-blog"
      v-for="article in filterArticles"
      :key="article.id"
    >
      <router-link :to="'/article/' + article.id">
        <h3>{{ article.title | toUpperCase }}</h3>
      </router-link>
      <article>{{ article.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
import searchMixin from "../mixins/searchMixin";

export default {
  name: "ShowBlogs",
  data() {
    return {
      articles: [],
      search: "",
    };
  },
  created() {
    this.$http
      .get("https://net-blog-2a551.firebaseio.com/posts.json")
      .then((data) => {
        return data.json();
        // console.log(data.json());
      })
      .then((data) => {
        let articlesArray = [];
        for (let key in data) {
          data[key].id = key;
          articlesArray.push(data[key]);
          // console.log(data[key]);
        }
        this.articles = articlesArray;
        console.log(data);
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
  max-width: 500px;
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

a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
