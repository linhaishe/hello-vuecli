<template>
  <div class="testand">
    <h1>This is a testand page</h1>
    <p>通过地址中传递aa,bb数据</p>
    <p>服务挂在后打印地址栏获取数据console.log(this.$route.query);</p>
    <p>可在console.log查看数据</p>
  </div>
</template>

<script>
export default {
  name: "Testand",
  mounted() {
    console.log(this.$route.query);
  },
};
</script>
