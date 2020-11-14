<template>
  <nav>
    <div class="nav-wrapper">
      <div class="nav-logo">
        <h2>Net Blog</h2>
      </div>
      <ul>
        <li><router-link to="/" exact>Articles</router-link></li>
        <li><router-link to="/add">Add New Blog</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #2c3e50;
  margin-top: 0;
  margin-bottom: 40px;
  //   position: fixed;
  //   width: 100%;
  //   overflow: hidden;

  .nav-wrapper {
    color: #fff;
    display: flex;
    flex-direction: column;
    // height: 10vh;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;

    .nav-logo {
      margin-bottom: 20px;
      text-transform: uppercase;
    }
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 200px;
    margin: 0 auto;

    a {
      color: #fff;
      text-decoration: none;
    }

    .router-link-active {
      //   background: #fff;
      padding: 8px 10px;
      //   color: #2c3e50;
      border-radius: 3px;
      border-bottom: 3px solid #fff;
    }
  }
}
</style>
