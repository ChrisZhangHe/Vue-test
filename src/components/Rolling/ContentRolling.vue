// 内容从上至下或者从左至右轮播；滚动内容样式由外部控制；
<template>
  <div
    class="scrollBoxClass"
    ref="box"
    :style="scrollBoxStyle"
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <div :style="scrollContentStyle" v-for="n in 2" :key="'n' + n">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TopRolling",
  props: {
    time: {
      type: Number,
      default: 50
    },
    type: {
      type: String,
      default: "top"
    }
  },
  data() {
    return {
      timer: null,
      scrollBoxStyle: {},
      scrollContentStyle: {}
    };
  },
  methods: {
    startTopScroll() {
      const { box } = this.$refs;
      if (box.scrollTop >= box.scrollHeight / 2) {
        box.scrollTop = 0;
      } else {
        box.scrollTop += 1;
      }
    },
    startLeftScroll() {
      const { box } = this.$refs;
      if (box.scrollLeft >= box.scrollWidth / 2) {
        box.scrollLeft = 0;
      } else {
        box.scrollLeft += 1;
      }
    },
    start() {
      const fun = this.type === "top" ? this.startTopScroll : this.startLeftScroll;
      this.timer = setInterval(fun, this.time);
    },
    clearInterval() {
      clearInterval(this.timer);
      this.timer = null;
    },
    mouseover() {
      this.clearInterval();
    },
    mouseout() {
      this.start();
    },
    init() {
      // 从上至下滚动内容
      if (this.type === "top") {
        this.scrollBoxStyle = {};
        this.scrollContentStyle = { "min-height": "100%" };
      } else if (this.type === "left") {
        this.scrollBoxStyle = {
          "white-space": "nowrap"
        };
        this.scrollContentStyle = { "min-width": "100%", display: "inline-block" };
      }
    }
  },
  mounted() {
    this.start();
  },
  created() {
    this.init();
  },
  beforeDestroy() {
    this.clearInterval();
  }
};
</script>
<style lang="scss" scoped>
.scrollBoxClass {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
