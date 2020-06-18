<template>
  <div>
    {{ $route.path }}
    <el-input v-model="inputVal"></el-input>
  </div>
</template>
<script>
export default {
  name: "MyInput",
  data() {
    return {
      inputVal: ""
    };
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  watch: {
    $route() {}
  },
  created() {},
  beforeRouteLeave(to, from, next) {
    this.$destroy();
    next();
  }
};
</script>
