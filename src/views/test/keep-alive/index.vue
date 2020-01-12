<template>
  <div>
    <router-link to="/keep-alive/input-a/a">input-a</router-link>
    <router-link
      style="margin-left:20px"
      to="/keep-alive/input-b/b"
    >input-b</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {};
</script>
