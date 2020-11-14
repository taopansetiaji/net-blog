<template>
  <div id="add-blog">
    <h2 v-if="!submitted">Add a New Blog Post</h2>
    <form v-if="!submitted">
      <!-- Blog Title -->
      <label for="title">Blog Title: </label>
      <input type="text" required v-model.lazy="blog.title" />

      <!-- Blog Content -->
      <label for="content">Blog Content: </label>
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="5"
        v-model.lazy="blog.content"
      ></textarea>

      <!-- Blog Categories -->
      <div id="checkboxes">
        <label for="adventure">Adventure</label>
        <input
          type="checkbox"
          value="adventure"
          v-model="blog.categories"
          id="adventure"
        />
        <label for="food">Food</label>
        <input
          type="checkbox"
          value="food"
          v-model="blog.categories"
          id="food"
        />
        <label for="health">Health</label>
        <input
          type="checkbox"
          value="health"
          v-model="blog.categories"
          id="health"
        />
        <label for="automotive">Automotive</label>
        <input
          type="checkbox"
          value="automotive"
          v-model="blog.categories"
          id="automotive"
        />
      </div>

      <!-- Blog Author -->
      <label for="author">Author</label>
      <select name="author" id="author" v-model="blog.author">
        <option v-for="author in authors" :key="author">
          {{ author }}
        </option>
      </select>
      <div>
        <button @click.prevent="submitHandler" id="btn">Add Blog</button>
      </div>
    </form>

    <div id="succcess-submitted" v-if="submitted">
      <h3>
        Adding Post Success
        <i class="fas fa-check-circle" style="color: #46984c"></i>
      </h3>
    </div>

    <!-- Preview Blog -->
    <div id="preview">
      <h3>Preview Blog</h3>
      <br />
      <h4>Blog Title:</h4>
      <p>{{ blog.title }}</p>
      <br />
      <h4>Blog Content:</h4>
      <p>{{ blog.content }}</p>
      <br />
      <h4>Categories:</h4>
      <div v-for="category in blog.categories" :key="category" id="category">
        {{ category }}
      </div>
      <br />
      <h4>Author:</h4>
      <p>{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBlog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["John Doe", "Jane Doe", "Anonymous"],
      submitted: false,
    };
  },
  methods: {
    submitHandler() {
      this.$http
        .post("https://net-blog-2a551.firebaseio.com/posts.json", this.blog)
        .then(() => {
          // console.log(data);
          this.submitted = true;
        });
    },
  },
};
</script>

<style scoped>
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"] {
  height: 30px;
}

input[type="text"],
textarea {
  display: block;
  width: 100%;
  outline: none;
  font-family: "Lato", sans-serif;
}
#preview {
  padding: 20px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
  overflow-wrap: break-word;
}
h2 {
  text-align: center;
}
h3 {
  margin-top: 10px;
  text-align: center;
}
h4 {
  font-weight: bold;
}
#checkboxes input {
  display: inline-block;
  margin-right: 20px;
}

#checkboxes label {
  display: inline-block;
  margin-right: 5px;
}

#category {
  background-color: #2c3e50;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  margin: 10px auto;
  margin-right: 10px;
  padding: 5px;
  display: inline-block;
}

select {
  padding: 5px;
  font-size: 14px;
  outline: none;
}

#btn {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  border: none;
  cursor: pointer;
  transition: ease all 350ms;
}

#btn:hover {
  transform: scale(1.08);
}
</style>
