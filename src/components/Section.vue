<template>
  <section class="main">
    <ul
      class="list-group w-50"
      id="listUl"
      v-for="(item, index) in todoData"
      :key="index"
    >
      <li
        class="
              list-group-item
              d-flex
              justify-content-between
              align-items-center
            "
      >
        <span class="badge bg-primary rounded-pill">{{ index + 1 }}</span>
        {{ item }}
        <!-- <i class="bi bi-hand-thumbs-up-fill"></i> -->
        <!-- <i class="bi bi-hand-thumbs-up"></i> -->

        <!-- <span v-show="!isThumbs" @click="thumbsUp"
              ><i class="bi bi-hand-thumbs-up-fill"></i
            >
            </span>
            <span v-show="isThumbs" @click="thumbsUp"
              ><i class="bi bi-hand-thumbs-up"></i></span
            >
             -->
        <!-- <span id="update" @click="updateMsg(index)">修改</span> -->
        <span class="badge rounded-pill removeSpan" @click="send(index)"
          >X</span
        >
      </li>
    </ul>
  </section>
</template>

<script>
import Event from "../utils/event";
export default {
  name: "Section",
  props: ["todoData"],
  methods: {
    send(index) {
      Event.$emit("remove", index);
      console.log(index);
    },

    // remove: function(index) {
    //   this.todoArr.splice(index, 1);
    // },
    // clearList: function() {
    //   this.todoArr = [];
    // },
    // thumbsUp: function() {
    //   this.isThumbs = !this.isThumbs;
    // },
    // updateMsg: function (index) {
    //   prompt("请输入修改后的内容");
    //   let res = prompt("请输入修改后的内容");
    //   Vue.set(app.todoArr, index, res);
    // },
  },

  //     updateMsg: function (index) {
  //   // prompt("请输入修改后的内容");
  //   let res = prompt("请输入修改后的内容");
  //   //Vue.set(app.todoArr, index, res);
  // },
};
</script>

<style scoped>
#update {
  cursor: pointer;
}
.removeSpan {
  color: black;
  cursor: pointer;
}
</style>
