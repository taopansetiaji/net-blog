export default {
  computed: {
    filterArticles() {
      return this.articles.filter((article) => {
        return article.title.match(this.search);
      });
    },
  },
};
