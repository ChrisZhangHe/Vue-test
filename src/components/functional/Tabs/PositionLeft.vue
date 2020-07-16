<template>
  <!-- 自定义element tabs组件 左侧样式-->
  <div class="tabs">
    <slot></slot>
    <!-- <el-tabs v-model="activeName" v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </el-tabs> -->
  </div>
</template>
<script>
export default {
  name: "PositionLeft",
  // props: {
  //   value: {
  //     required: true
  //   }
  // },
  data() {
    return {
      activeName: this.value
    };
  },
  watch: {
    activeName(val) {
      this.$emit("input", val);
    }
  }
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
    height: auto;
    writing-mode: vertical-rl;
    margin: 10px 0;
  }
}
</style>
