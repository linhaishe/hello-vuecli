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
    <p>storeShowwithMounted : {{ storeShowA }}</p>
    <p>storeShowwithComputed : {{ storeShowB }}</p>
    <button @click="add">addMutations</button>
    <button @click="addAsync">addAsync</button>
    <p>multiplication getters : {{ multiplication }}</p>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {
      storeShowA: 0,
    };
  },
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
    add() {
      this.$store.commit("increment");
    },
    addAsync() {
      this.$store.dispatch("asyncIncrement");
    },
  },
  mounted() {
    console.log("about params data", this.$route.params);
    console.log("about params data", this.$route);
    console.log("store", this.$store);
    this.storeShowA = this.$store.state.count;
  },
  beforeRouteEnter(to, from, next) {
    console.log(to);
    console.log(from);
    next();
  },
  computed: {
    storeShowB: function() {
      return this.$store.state.count;
    },
    multiplication: function() {
      return this.$store.getters.multiplication;
    },
  },
};
</script>
