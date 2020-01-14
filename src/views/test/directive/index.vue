<template>
  <div>
    <input
      v-inputFocus
      type="text"
      v-model="inputVal"
    >
  </div>
</template>
<script>
export default {
  name: "MyDirective",
  data() {
    return {
      inputVal: ""
    };
  },
  directives: {
    inputFocus: {
      bind(el, binding, vnode, oldVnode) {
        console.log("bind:");
        el.style.border = "1px solid red";
      },
      inserted(el, binding, vnode, oldVnode) {
        console.log("inserted:");
        el.style.border = "1px solid blue";
      },
      update(el, binding, vnode, oldVnode) {
        console.log("update:");
        el.style.border = "1px solid yellow";
      },
      componentUpdated(el, binding, vnode, oldVnode) {
        console.log("componentUpdated:");
      },
      unbind(el, binding, vnode, oldVnode) {
        console.log("unbind:");
      }
    }
  },
  created() {
    setTimeout(() => {
      this.inputVal = 12312;
    }, 3000);
  }
};
</script>

