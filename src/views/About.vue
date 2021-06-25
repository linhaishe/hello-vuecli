<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goList">去list</button>
    <button @click="refresh">refresh</button>
  </div>
</template>

<script>
export default {
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
    console.log(this.$route.params);
  },
};
</script>
