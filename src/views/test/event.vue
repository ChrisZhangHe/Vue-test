<template>
  <div>
    <div class="event">
      <el-button @click="mouseClick('click')">click</el-button>
      <el-button @click.left="mouseClick('leftClick')">leftClick</el-button>
      <el-button @contextmenu.prevent="mouseClick('rightClick')">rightClick</el-button>
      <el-button @click.middle="mouseClick('middleClick')">middleClick</el-button>
      <div @contextmenu.prevent="mouseClick('rightContextmenuDivClick')">rightContextmenuDivClick</div>
      <div @click.right.prevent="mouseClick('rightDivClick')">rightDivClick</div>
      <div @click.middle="mouseClick('middleDivClick')">middleDivClick</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-event",
  methods: {
    mouseClick(name) {
      console.log(name);
    }
  }
};
</script>
<style lang="scss" scoped>
.event {
  div {
    border: 1px solid;
    border-radius: 4px;
    padding: 6px;
    display: inline-block;
    cursor: pointer;
    margin-left: 6px;
  }
}
</style>
