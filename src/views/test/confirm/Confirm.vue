  <!-- 可插拔式弹窗确认组件 -->
<template>
  <div id="myconfirm">
    <el-input v-model="inputVal"></el-input>
    <el-button @click="onConfirm">{{confirmBtnText}}</el-button>
    <el-button @click="onCancer">{{cancerBtnText}}</el-button>
  </div>
</template>
<script>
export default {
  name: "MyConfirm",
  data() {
    return {
      inputVal:'',
      confirmBtnText: "默认确认",
      cancerBtnText: "默认取消",
      onConfirm() {
        console.log("handleConfirm:");
      }
    };
  },
  methods: {
    uninstall() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    }
  }
};
</script>
<style lang="scss" scoped>
#myconfirm {
  position: absolute;
  width: 600px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid;
}
</style>

