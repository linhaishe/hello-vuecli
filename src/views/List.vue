<template>
  <div class="list">
    <h1>This is an list page</h1>
    <button @click="goHome">去home</button>
    <button @click="backPre">回退</button>
    <br />
    <br />
    <p>按钮权限控制</p>
    <button v-has="'add'">添加</button>
    <button v-has="'delete'">删除</button>
    <button v-has="'edit'">编辑</button>
  </div>
</template>

<script>
import has from "../directives/has";
export default {
  directives: {
    has,
  },
  methods: {
    goHome() {
      this.$router.push({
        path: "/home",
        name: "Home",
        query: { a: 111 },
      });
    },
    backPre() {
      this.$router.back();
    },
  },
  mounted() {
    console.log(this.$route.params);
  },
};
</script>
