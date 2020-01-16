<template>
  <div>
    <h3>num:{{num}}</h3>
    <h3>array:{{array}}</h3>
  </div>
</template>
<script>
export default {
  name: "props",
  props: {
    num: {
      type: Number,
      default: 1
    },
    array: {
      type: Array,
      default() {
        return [11, 22];
      }
    }
  },
  created() {
    setTimeout(() => {
      //   this.num = 456;
      //   this.array=[44,55]
      this.$emit("update:num", 456);
      this.$emit("update:array", [44, 55, 66]);
    }, 3000);
  }
};
</script>
