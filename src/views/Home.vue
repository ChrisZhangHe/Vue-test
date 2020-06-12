<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  created() {
    // window.op = window.open(
    //   "https://www.baidu.com/",
    //   "",
    //   "width=200,height=200,left=0,fullscreen=yes"
    // );
    // window.op.moveTo(-1000, 100);
  }
};
</script>
