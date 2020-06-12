<template>
  <!-- 等到布局 -->
  <div class="parent">
    <div class="left">left</div>
    <div class="right">
      <p>right</p>
      <p>right</p>
      <p>right</p>
      <p>right</p>
    </div>
    <div class="center">center</div>
  </div>
</template>
<script>
export default {
  name: "Flex-Test"
};
</script>
<style lang="scss" scoped>
$border: 1px solid red;
.parent {
  border: $border;
  padding: 10px;
  // display: flex;
  // flex-wrap: wrap;
  overflow: hidden;
}
.left,
.right,
.center {
  width: 300px;
  padding: 10px;
  margin: 4px;
  border: $border {
    color: blue;
  }
  float: left;
  margin-bottom: -50px;
  padding-bottom: 50px;
}
</style>
