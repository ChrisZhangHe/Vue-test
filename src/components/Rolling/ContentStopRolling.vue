// 内容从左至右或从上至下停顿滚动；滚动内容样式由外部控制；
<template>
  <div class="textBox" @mouseover="mouseover" @mouseout="mouseout">
    <transition
      v-on:enter="enterHandle"
      v-on:leave="leaveHandle"
      v-on:before-leave="beforeLeave"
      v-bind:css="false"
    >
      <slot :item="item"></slot>
    </transition>
  </div>
</template>
<script>
/* eslint-disable no-param-reassign */
export default {
  name: "ContentStopRolling",
  props: {
    list: {
      required: true,
      type: Array
    },
    intervalTime: {
      type: Number,
      default: 2000
    },
    animationTime: {
      type: Number,
      default: 1500
    },
    type: {
      type: String,
      default: "top"
    },
    enter: {
      type: Function,
      default: undefined
    },
    leave: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      index: 0,
      timer: null
    };
  },
  computed: {
    item() {
      return {
        key: `textNum${this.index}`,
        content: this.list[this.index]
      };
    }
  },
  methods: {
    scrolling() {
      if (this.index === this.list.length - 1) {
        this.index = 0;
      } else {
        this.index += 1;
      }
    },
    startMove() {
      // 滚动不需要停顿则将2000改成动画持续时间
      this.timer = setInterval(this.scrolling, this.intervalTime);
    },
    clearInterval() {
      clearInterval(this.timer);
      this.timer = null;
    },
    mouseover() {
      this.clearInterval();
    },
    mouseout() {
      this.startMove();
    },
    defaultEnter(el, done) {
      const css = { opacity: [1, 0], scale: [1, 0.7] };
      if (this.type === "top") {
        css.translateY = [0, "100%"];
      } else {
        css.translateX = [0, "-100%"];
      }

      window.Velocity(el, css, { duration: this.animationTime, complete: done });
    },
    defaultLeave(el, done) {
      const css = { opacity: [1, 0], scale: 0.7 };
      if (this.type === "top") {
        css.translateY = "-100%";
      } else {
        css.translateX = "100%";
      }
      window.Velocity(el, css, { duration: this.animationTime, complete: done });
    },
    enterHandle(el, done) {
      if (this.enter) {
        this.enter(el, done);
      } else {
        this.defaultEnter(el, done);
      }
    },
    leaveHandle(el, done) {
      if (this.leave) {
        this.leave(el, done);
      } else {
        this.defaultLeave(el, done);
      }
    },
    beforeLeave(el) {
      el.style.position = "absolute";
    }
  },
  mounted() {
    this.startMove();
  },
  beforeDestroy() {
    this.clearInterval();
  }
};
</script>
<style lang="scss" scoped>
.textBox {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  text-align: center;
}
</style>
