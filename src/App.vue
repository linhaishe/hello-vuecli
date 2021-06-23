<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header :parent-msg="message"></Header>
    <Section :todo-data="todoArr"></Section>
    <Footer :todo-data="todoArr"></Footer>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header.vue";
import Section from "./components/Section.vue";
import Footer from "./components/Footer.vue";
import Event from "./utils/event";

export default {
  name: "App",
  data: function() {
    return {
      isThumbs: true,
      message: "",
      todoArr: ["learn vue", "have a rest", "sporting"],
    };
  },
  components: {
    // HelloWorld,
    Header,
    Section,
    Footer,
  },
  methods: {},
  mounted() {
    Event.$on("todoListMsg", (v) => {
      this.todoArr.push(v);
      this.message = "";
    });
    Event.$on("remove", (v) => {
      this.todoArr.splice(v, 1);
    });
    Event.$on("clearList", (v) => {
      console.log(v);
      this.todoArr = v;
    });
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
