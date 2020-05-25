<template>
  <div>
    <div class="animation">
      animation
    </div>
    <h3>标题</h3>
  </div>
</template>
<script>
export default {
  name: "animation"
};
</script>
<style lang="scss" scoped>
.animation {
  width: 100px;
  line-height: 40px;
  border: 1px solid;
  margin: 40px auto;
  animation: testAnimation 4s infinite;
}
@keyframes testAnimation {
  0% {
    color: blue;
  }
  100% {
    line-height: 100px;
    color: red;
    transform: rotate(360deg);
  }
}
h3 {
  border: 1px solid red;
}
</style>
