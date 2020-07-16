<template>
  <!-- 谷歌浏览器滚动条样式 -->
  <div class="scrollbar">
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </div>
</template>
<style lang="scss" scoped>
.scrollbar {
  height: 100px;
  width: 600px;
  margin: 0 auto;
  border: 1px solid;
  overflow: scroll;
}
// 滚动条
::-webkit-scrollbar {
  width: 4px;
  height: 30px;
  background-color: #fff;
  opacity: 0;
}

/*滑块*/
::-webkit-scrollbar-thumb {
  background-color: red;
  border-radius: 60px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: blue;
}

/*滑道*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgb(0, 255, 149);
  border-radius: 60px;
}
</style>
