<!-- 
如果keep-alive 有嵌套，则父组件必须为keep-alive，子组件才可设置为keep-alive；
keep-alive标签key属性用于保证组件不被重用；
 -->
<template>
  <div>
    <router-link to="/keep-alive/input-a">input-a</router-link>
    <router-link
      style="margin-left:20px"
      to="/keep-alive/input-b"
    >input-b</router-link>
    <keep-alive>
      <router-view :key="$route.path"></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {};
</script>
