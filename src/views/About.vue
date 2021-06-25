<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goList">去list</button>
    <button @click="refresh">refresh</button>
    <p>
      <router-link to="/about/foo">/user/foo</router-link> |
      <router-link to="/about/foo/profile">/user/foo/profile</router-link> |
      <router-link to="/about/foo/posts">/user/foo/posts</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {
    goList() {
      this.$router.push({
        path: "/list/data1/data2",
        name: "List",
        params: { name: "heather" },
      });
    },
    refresh() {
      this.$router.go(0);
    },
  },
  mounted() {
    console.log("about params data", this.$route.params);
    console.log("about params data", this.$route);
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    next();
  },
};
</script>
