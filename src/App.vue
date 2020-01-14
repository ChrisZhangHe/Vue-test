<template>
  <div id="app">
    <div id="nav">
      <router-link
        class="link"
        to="/"
      >Home</router-link> |
      <router-link
        class="link"
        to="/about"
      >About</router-link>
      <router-link
        class="link"
        to="/my-confirm"
      >test-my-confirm</router-link>
      <router-link
        class="link"
        to="/keep-alive"
      >keep-alive</router-link>
      <router-link
        class="link"
        to="/v-model"
      >v-model</router-link>
      <router-link
        class="link"
        to="/css"
      >css</router-link>
      <router-link
        class="link"
        to="/directive"
      >directive</router-link>
    </div>
    <!-- <keep-alive> -->
    <router-view :key="$route.path" />
    <!-- </keep-alive> -->

    <el-popover
      ref="popover"
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
    </el-popover>
    <el-button v-popover:popover>focus 激活</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
  }
};
</script>
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.link {
  margin-left: 20px;
}
</style>
