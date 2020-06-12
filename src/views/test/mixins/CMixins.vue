<template>
  <div>
    <div>CMixins-num:{{ num }}</div>
    <div>CMixins-name:{{ name }}</div>
    <div>CMixins-id:{{ id }}</div>
  </div>
</template>
<script>
import mixinsConfig from "./index";

export default {
  name: "CMixins",
  props: ["name", "id"],
  data() {
    return {
      //   n: this.getNum()
    };
  },
  mixins: [mixinsConfig],
  mounted() {
    // this.n = this.getNum();
    // setTimeout(() => {
    //   this.n = this.getNum();
    // }, 3000);
    // setTimeout(() => {
    //   this.num = 2;
    // }, 2000);
  }
};
</script>
