<template>
  <div>
    <!-- <input
      :value="inputValue"
      @input="onInput"
    /> -->
    <el-input
      v-model="myInputVal"
      @input="onInput"
    ></el-input>
  </div>
</template>
<script>
export default {
  name: "MyInput",
  model: {
    prop: "inputValue",
    event: "onInput"
  },
  data() {
    return {
      myInputVal: ""
    };
  },
  props: ["inputValue"],
  methods: {
    onInput(e) {
      this.$emit("onInput", e);
    }
  },
  created() {
    this.myInputVal = this.inputValue;
  }
};
</script>
