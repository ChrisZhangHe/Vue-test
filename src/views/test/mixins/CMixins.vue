<template>
  <div>CMixins:{{ n }}</div>
</template>
<script>
import { setTimeout } from "timers";
import { mixinsConfig } from "./index.js";

export default {
  name: "CMixins",
  data() {
    return {
      //   n: this.getNum()
    };
  },
  mixins: [mixinsConfig],
  mounted() {
    this.n = this.getNum();
    setTimeout(() => {
      this.n = this.getNum();
    }, 3000);
  }
};
</script>
