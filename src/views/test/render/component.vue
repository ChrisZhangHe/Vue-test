<template>
  <div>
    <el-input v-model="inputVal" @input="handleInput"></el-input>
    <el-tag>propAge:{{ propAge }}</el-tag>
    <el-button @click="handleClick">click</el-button>
    <div>
      <h2>slot-default</h2>
      <slot></slot>
    </div>
    <div>
      <h2>slot-body</h2>
      <slot name="body" v-bind:slotBodyData="slotBodyData"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "RenderComponentTest",
  data() {
    return {
      slotBodyData: "slot-body回传数据",
      inputVal: this.value
    };
  },
  props: {
    propAge: {
      type: String
    },
    value: {
      type: String
    }
  },
  methods: {
    handleClick() {
      this.$emit("comClick", "RenderComponentTest-click");
    },
    handleInput(val) {
      this.$emit("input", val);
    }
  }
};
</script>
