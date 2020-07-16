<template>
  <!-- 进度条 -->
  <div>
    <div :style="progressStyle">
      <transition appear v-on:before-enter="beforeEnter" v-on:enter="enter" v-bind:css="false">
        <div :style="progressBarStyle"></div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "Progress",
  props: {
    percentage: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "#ccc"
    },
    "stroke-color": {
      type: String,
      default: "red"
    },
    direction: {
      type: String,
      default: "bottom-to-top"
    },
    width: {
      type: String,
      default: "10px"
    },
    length: {
      type: String,
      default: "100px"
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      progressStyle: {},
      progressBarStyle: {},
      el: undefined,
      done: undefined
    };
  },
  watch: {
    percentage() {
      this.animation(this.el, this.done);
    }
  },
  methods: {
    beforeEnter(el) {
      if (this.direction === "bottom-to-top") {
        el.style.height = 0;
      } else if (this.direction === "left-to-right") {
        el.style.width = 0;
      }
    },
    enter(el, done) {
      this.animation(el, done);
      this.done = done;
      this.el = el;
    },
    animation(el, done) {
      let property = {};
      if (this.direction === "bottom-to-top") {
        property = { height: this.percentage };
      } else if (this.direction === "left-to-right") {
        property = { width: this.percentage };
      }
      window.Velocity(el, property, { duration: this.duration, complete: done });
    },
    init() {
      if (this.direction === "bottom-to-top") {
        this.progressStyle = {
          width: this.width,
          height: this.length,
          "background-color": this.color,
          position: "relative"
        };
        this.progressBarStyle = {
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          "background-color": this.strokeColor
        };
      } else if (this.direction === "left-to-right") {
        this.progressStyle = {
          width: this.length,
          height: this.width,
          "background-color": this.color,
          position: "relative"
        };
        this.progressBarStyle = {
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          "background-color": this.strokeColor
        };
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>
