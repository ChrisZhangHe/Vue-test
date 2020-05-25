<template>
  <div>
    <h3>版本2.1.1</h3>
    <h3>测试Nexus</h3>
    <input type="text" @change="change" v-model="value" />
  </div>
</template>
<script>
export default {
  name: "dInput",
  props: {
    value: String
  },
  methods: {
    change(val) {
      this.$emit("update:value", val);
    }
  }
};
</script>
