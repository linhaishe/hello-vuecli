<template>
  <div class="home">
    <button @click="goAbout">去about</button>
    <h1>This is a Home page</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld,
  },
  mounted() {
    console.log(this.$route.query);
  },
  methods: {
    goAbout() {
      this.$router.push({
        path: "/about",
        name: "About",
        params: { name: "heather" },
      });
    },
  },
};
</script>
