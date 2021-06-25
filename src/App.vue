<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ path: '/', query: { a: 1, b: 2 } }"
        >query传数据：{ path: '/', query: { a: 1 } },类似get</router-link
      >
      <br />
      <router-link
        :to="{
          path: '/about',
          name: 'About',
          params: { id: 'foo', b: 222 },
        }"
        >params传数据：{ path: '/about', name: 'About', params: { a: 1, b: 222 }
        },类似post</router-link
      >
      <br />
      <router-link to="/list?aa=11&bb=22">/list?aa=11&bb=22</router-link> <br />
      <router-link to="/list/data1/data2">/list/data1/data2</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
