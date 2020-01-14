<template>
  <div style="border:1px solid;">
    qq
    <div class="transform">
      transform
    </div>
  </div>
</template>
<script>
export default {
  name: "transform"
};
</script>
<style lang="scss" scoped>
.transform {
  width: 400px;
  margin: 0px auto;
  border: 1px solid red;
  transform: rotate(10deg);
  transform-origin: 0%  0%;
  //   transform: translate(300px);
  //   transform: scale(2);
}
</style>

