<template>
  <div class="transition">
    transition
  </div>
</template>
<script>
export default {
  name: "transition"
};
</script>
<style lang="scss" scoped>
.transition {
  width: 100px;
  border: 1px solid;
  line-height: 40px;
  cursor: pointer;
  margin: 40px auto;
  transition: all 4s;
}
.transition:hover {
  color: red;
  line-height: 100px;
}
</style>
