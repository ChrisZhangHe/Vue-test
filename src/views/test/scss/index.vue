<template>
  <div class="scss">
    <h2>h2</h2>
    <h3>scss</h3>
    <h3>scss</h3>
    <h3>scss</h3>
    <h3>scss</h3>
    <h3>scss</h3>
  </div>
</template>
<script>
export default {
  name: "SCSS"
};
</script>
<style lang="scss" scoped>
$width: 400px;
$background: red;
@import "./variable.scss";
@import "./index.css";
.radius {
  border-radius: 12px;
  background: violet;
}
.scss {
  width: $width;
  @include _border-radius($radius: 20px);
  border: $border {
    color: blue;
  }
  @import "./h3.scss";
  $border: 40px solid yellow;
  h2 {
    @extend .radius;
  }
  &:hover {
    background: $background;
  }
}
</style>