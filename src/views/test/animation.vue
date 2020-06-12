<template>
  <div>
    <!-- 原生css控制 -->
    <el-button @click="isShow">显示内容</el-button>
    <div :class="contentClass" v-if="isShowContent">
      显示内容
    </div>
    <!-- vue transiton控制 -->
    <el-button @click="isShowVue">VueTransition</el-button>
    <transition name="fade">
      <!-- <transition name="fade" :duration="{ enter: 3000, leave: 3000 }"> -->
      <div class="vueContent" v-show="isShowVueContent"></div>
    </transition>
    <!-- swipe -->
    <div>
      <el-button @click="next">next</el-button>
      <transition name="swipe">
        <div class="swipeContent">
          {{ content }}
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "animation",
  data() {
    return {
      isShowContent: true,
      contentClass: ["showContent"],
      isShowVueContent: true,
      content: "当前时间：00：00"
    };
  },
  methods: {
    isShow() {
      if (!this.isShowContent) {
        this.contentClass = ["showContent"];
      } else {
        this.contentClass = ["hideContent"];
      }
      setTimeout(() => {
        this.isShowContent = !this.isShowContent;
      }, 3000);
    },
    isShowVue() {
      this.isShowVueContent = !this.isShowVueContent;
    },
    next() {
      this.content = `当前时间：${new Date().getMinutes()}:${new Date().getSeconds()}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.showContent {
  width: 100px;
  height: 100px;
  background: red;
  //   opacity: 1;
  transition: all 3s;
}
.hideContent {
  width: 100px;
  height: 100px;
  //   opacity: 0;
  //   width: 0;
  transition: all 3s;
}
.vueContent {
  width: 100px;
  height: 100px;
  background: red;
}

.fade-enter {
  // transform: translateX(500px);
  background: blue;
}
.fade-enter-active {
  transition: all 3s;
}
.fade-enter-to {
  // transform: translateX(300px);
  background: peachpuff;
}
.fade-leave {
  // transform: translateX(500px);
  // background: orchid;
}
.fade-leave-active {
  // transform: translateX(100px);
  background: orchid;
  transition: all 3s;
}
.fade-leave-to {
  transform: translateX(1000px);
  background: green;
}
// .swipeContent {
//   width: 200px;
//   height: 200px;
//   border: 1px solid red;
//   background: #ccc;
// }
// .swipe-enter {
// }
// .swipe-enter-active {
// }
// .swipe-enter-to {
// }
// .swipe-leave {
// }
// .swipe-leave-active {
//   transform: translateX(200px);
//   transition: all 3s;
// }
// .swipe-leave-to {
// }
</style>
