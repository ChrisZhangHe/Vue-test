<template>
  <div>
    <el-input v-model="inputVal" @input="input"></el-input>
  </div>
</template>
<script>
export default {
  name: "MyInput",
  model: {
    prop: "coomVal",
    event: "onInput"
  },
  data() {
    return {
      inputVal: ""
    };
  },
  props: ["coomVal"],
  methods: {
    input(e) {
      this.$emit("onInput", e);
    }
  },
  created() {
    this.inputVal = this.coomVal;
  }
};
</script>
