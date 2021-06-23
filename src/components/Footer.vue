<template>
  <footer class="countLists" id="listsCounter">
    <div class="list-group w-50" v-if="todoData.length != 0">
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <small class="mb-1"
            ><span> {{ todoData.length }} </span> items left</small
          >
          <span class="text-muted" @click="clearList">clear</span>
        </div>
        <!-- <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-muted">And some muted small print.</small> -->
      </a>
    </div>
    <div class="list-group w-50" v-else>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <small class="mb-1"
            ><span> {{ todoData.length }} </span> items left</small
          >
          <span class="text-muted" @click="clearList">clear</span>
        </div>
        <!-- <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-muted">And some muted small print.</small> -->
      </a>
    </div>
  </footer>
</template>

<script>
import Event from "../utils/event";
export default {
  name: "Footer",
  props: ["todoData"],
  methods: {
    clearList() {
      let arr = [];
      Event.$emit("clearList", arr);
    },
  },
};
</script>
