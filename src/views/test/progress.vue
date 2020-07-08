<template>
  <div>
    <div class="progress">
      <transition appear v-on:before-enter="beforeEnter" v-on:enter="enter" v-bind:css="false">
        <div :style="progressBarStyle"></div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      progressBarStyle: {
        height: "60%",
        "background-color": "red"
      }
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.height = 0;
    },
    enter(el, done) {
      window.Velocity(el, { height: 100 }, { duration: 1000, complete: done });
    }
  }
};
</script>
<style lang="scss" scoped>
.progress {
  width: 10px;
  height: 200px;
  background: #ccc;
  position: relative;
  div {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}
</style>
