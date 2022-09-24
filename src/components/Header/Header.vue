<template>
  <ul id="nav">
    <router-link
      exact
      :to="{ name: 'Home', params: { pageTitle: 'Home Page' } }"
    >
      <a>Home</a>
    </router-link>
    <a href="#">Logout</a>
  </ul>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>

<style lang="scss" scoped>
$fontcolor: darkcyan;
$navcolor: #525a5a;
ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: 50px;
  a {
    text-decoration: none;
    color: $fontcolor;
    padding: 10px;
    font-weight: bold;
  }
}
a.router-link-exact-active a,
ul a:hover {
  color: $navcolor;
  box-shadow: 2px 2px 4px 0px $navcolor;
}
</style>
