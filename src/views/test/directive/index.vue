<template>
  <div>
    <input v-inputFocus type="text" v-model="inputVal" />
  </div>
</template>
<script>
/* eslint-disable no-param-reassign */
export default {
  name: "MyDirective",
  data() {
    return {
      inputVal: ""
    };
  },
  directives: {
    inputFocus: {
      bind(el) {
        console.log("bind:");
        el.style.border = "1px solid red";
      },
      inserted(el) {
        console.log("inserted:");
        el.focus();
        el.hidden = false;
        el.style.border = "1px solid blue";
        // 根据权限判断是否移除当前Dom
        // el.parentNode.removeChild(el);
      },
      update(el) {
        console.log("update:");
        el.style.border = "1px solid yellow";
      },
      componentUpdated() {
        console.log("componentUpdated:");
      },
      unbind() {
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
