<template>
  <div>
    <el-button @click="isShowTransitionDiv = !isShowTransitionDiv">transiton</el-button>
    <!-- <transition name="t">
      <div class="transitionDiv" v-show="isShowTransitionDiv"></div>
    </transition> -->
    <!-- <transition name="slide-fade">
      <p v-show="isShowTransitionDiv">hello</p>
    </transition> -->
    <transition
      name="custom-classes-transition"
      leave-active-class="animated swing"
      enter-active-class="animated backInUp"
    >
      <p v-if="isShowTransitionDiv">hello</p>
    </transition>
  </div>
</template>
<script>
export default {
  name: "TransitionDD",
  data() {
    return {
      isShowTransitionDiv: true
    };
  }
};
</script>
<style>
.transitionDiv {
  width: 500px;
  height: 500px;
  background: yellowgreen;
}
.t-enter {
  background: tomato;
  width: 100px;
}
.t-enter-active {
  /* background: violet; */
  /* width: 100px; */
  transition: all 5s;
}
.t-enter-to {
  background: blue;
  /* width: 100px; */
}
.t-leave {
  /* width: 100px; */
  background: orange;
}
.t-leave-active {
  width: 100px;
  /* background: peachpuff; */
  transition: all 1s;
}
.t-leave-to {
  /* width: 100px; */
  background: plum;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
