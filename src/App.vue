<template>
  <div id="app">
    <div id="nav">
      <router-link
        class="link"
        to="/"
      >Home</router-link>
      <!-- <router-link
        class="link"
        to="/about"
      >About</router-link> -->
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
      <router-link
        class="link"
        to="/props"
      >props</router-link>
      <router-link
        class="link"
        to="/slot"
      >slot</router-link>
      <router-link
        class="link"
        to="/function-tags"
      >function-tags</router-link>
      <router-link
        class="link"
        to="/route1"
      >route-1</router-link>
      <router-link
        class="link"
        to="/route2"
      >route-2</router-link>
      <router-link
        class="link"
        to="/vue-api"
      >vue-api</router-link>
      <router-link
        to="/preview"
        class="link"
      >preview</router-link>
      <router-link
        to="/render"
        class="link"
      >render</router-link>
       <router-link
        to="/mixins"
        class="link"
      >mixins</router-link>
       <router-link
        to="/funComponent"
        class="link"
      >funComponent</router-link>
      <!-- <router-link to="/checkModel" class="link">checkModel</router-link>
      <router-link to="/upload" class="link">upload</router-link>
      <router-link to="/event" class="link">event</router-link> -->
      <router-link
        v-for="pathName in paths"
        :key="pathName"
        :to="'/'+pathName"
        class="link"
      >{{pathName}}</router-link>
      <router-link to="/scss" class="link">scss</router-link>
    </div>
    <keep-alive>
      <router-view
        v-if="$route.meta.isKeepAlive&&routePath.includes($route.path)"
        :key="$route.path"
      />
    </keep-alive>
    <router-view
      v-if="!$route.meta.isKeepAlive||!routePath.includes($route.path)"
      :key="$route.path"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      routePath: ["/route1"] //包含在routePath中且isKeepAlive为true则保存状态信息
    };
  },
  computed: {
    paths() {
      return this.$store.state.dynamicRoutes;
    }
  },
  methods: {}
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
