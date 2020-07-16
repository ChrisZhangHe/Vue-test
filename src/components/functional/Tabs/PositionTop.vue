<template>
  <!-- 自定义element tabs组件top 样式 -->
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "PositionTop",
};
</script>
<style lang="scss" scoped>
.tabs {
  /deep/ .el-tabs__header {
    margin: 0;
  }
  /deep/ .el-tabs__nav-wrap::after {
    height: 0;
  }
  /deep/ .el-tabs__active-bar {
    height: 0 !important;
  }
  /deep/ .el-tabs__item {
    padding: 0 4px;
  }
}
</style>
