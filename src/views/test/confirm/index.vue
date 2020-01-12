<template>
  <div>

    <el-button @click="openConfirm">test confirm vue</el-button>
  </div>
</template>
<script>
export default {
  name: "TestConfirm",
  methods: {
    openConfirm() {
      this.$MyConfirm({
        confirmBtnText: "确认",
        // cancerBtnText: "取消",
        // onConfirm() {
        //   console.log("test handleConfirm");
        // },
        onCancer() {
          console.log("handleCancer:");
        }
      });
    }
  }
};
</script>
