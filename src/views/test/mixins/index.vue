<template>
  <div>
    datacNum:{{ cNum }}
    <el-input v-model="num"></el-input>
    <c-mixins></c-mixins>
  </div>
</template>
<script>
import { mixinsConfig } from "./index";
import CMixins from "./CMixins.vue";

export default {
  name: "Mixins",
  mixins: [mixinsConfig],
  components: {
    CMixins // () => import("./CMixins.vue")
  },
  created() {
    // this.num = 123;
  }
};
</script>
