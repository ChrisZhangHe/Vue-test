<template>
  <div>
    num:{{ num }} datacNum:{{ cNum }}
    <el-input v-model="num"></el-input>
    <component v-bind="param" :is="CMixins"></component>
  </div>
</template>
<script>
import mixinsConfig from "./index";

export default {
  name: "Mixins",
  mixins: [mixinsConfig],
  data() {
    return {
      param: {
        name: "chris",
        id: "123"
      },
      CMixins: () => import("./CMixins")
    };
  },
  created() {
    // this.num = 123;
    setTimeout(() => {
      this.num = 2;
    }, 2000);
  }
};
</script>
