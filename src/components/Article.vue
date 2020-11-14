<template>
  <div id="article">
    <h2>{{ article.title }}</h2>
    <article>{{ article.content }}</article>
    <br />
    <p>Author: {{ article.author }}</p>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      id: this.$route.params.id,
      article: {},
    };
  },
  created() {
    this.$http
      .get(`https://net-blog-2a551.firebaseio.com/posts/${this.id}.json`)
      .then((data) => {
        // console.log(data);
        this.article = data.body;
      });
  },
};
</script>

<style lang="scss" scoped>
#article {
  max-width: 80%;
  margin: 0 auto;

  h2 {
    margin-bottom: 10px;
  }
}
</style>
