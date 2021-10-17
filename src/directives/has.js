export default {
  inserted(el, bindings, vnode) {
    console.log("dom元素插入了");
    console.log(el, bindings, vnode);
    let buttonPermissionValue = bindings.value;
    let boolean =
      vnode.context.$store.state.buttonPermission[buttonPermissionValue];
    console.log("boolean", boolean);
    !boolean && el.parentNode.removeChild(el);
  },
};
