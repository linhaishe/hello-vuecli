import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./moduleA";
import moduleB from "./moduleB";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 88,
  },
  //类似于computed，计算state的计算属性
  getters: {
    multiplication(state) {
      return state.count * 2;
    },
  },
  //唯一修改state的方式，这里不能写异步请求
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    // actions也可以改变state,是调用mutations,这里可以写异步请求
    //context是vuex对象的实例，相当于this.$store
    asyncIncrement(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 2000);
    },
  },
  modules: {
    moduleA,
    moduleB,
  },
});

console.log(store.state.count); // -> 1

export default store;
