<template>
  <div>
    {{$route.params.name}}
    <el-input v-model="inputVal"></el-input>
  </div>
</template>
<script>
export default {
  name:'MyInput',
  data() {
    return {
      inputVal: ""
    };
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  watch: {
    $route(to, from) {
    this.inputVal = this.$route.params.name;
      console.log("keep-alive-input:", this.$route.params.name);
    }
  },
  created() {
    this.inputVal = this.$route.params.name;
    console.log('input-created')
  }
};
</script>

