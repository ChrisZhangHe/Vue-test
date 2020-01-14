<template>
  <div>
    <h3>css</h3>
    <router-link
      to="/css"
      class="link"
    >transition</router-link>
    <router-link
      to="/css/animation"
      class="link"
    >animation</router-link>
    <router-link to="/css/transform" class="link">transform</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "css"
};
</script>
<style lang="scss" scoped>
.link {
  margin-left: 20px;
}
</style>

