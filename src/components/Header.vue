<template>
  <header>
    <h1>{{ message }}</h1>
    <div class="w-50 input-group input-group-lg">
      <span class="input-group-text" id="inputGroup-sizing-lg">todolist</span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg"
        v-model="message"
        @keyup.enter="send"
        placeholder="plz type things"
      />
    </div>
  </header>
</template>

<script>
import Event from "../utils/event";
export default {
  name: "Header",
  data: function() {
    return {
      isThumbs: true,
      message: "",
      // todoArr: ["learn vue", "have a rest", "sporting"],
    };
  },
  props: ["parentMsg"],
  // methods: {
  // addList: function () {
  //   this.todoArr.push(this.message);
  //   this.message = "";
  // },
  //}
  methods: {
    send() {
      Event.$emit("todoListMsg", this.message);
      console.log(this.message);
    },
  },
  mounted: function() {
    //this.$emit("ev", this.message);
  },
};
</script>
