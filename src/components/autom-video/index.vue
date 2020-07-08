<template>
  <div>
    autom-video
    <button @click="play">播放</button>
    <el-slider v-model="value" :step="step" @change="change"></el-slider>
    <video ref="video" id="myVideo" @canplay="canplay" controls src="./video-test.mp3"></video>
    <!-- <video ref="video" id="myVideo" width="320" height="240" controls>
      <source src="./video-test.mp3" type="video/mp3" />
    </video> -->
  </div>
</template>
<script>
export default {
  name: "AutomVideo",
  data() {
    return {
      video: undefined,
      value: 0,
      step: 1
    };
  },
  methods: {
    play() {
      //   debugger;
    },
    change() {
      this.video.currentTime = (this.video.duration * this.value) / 100;
    },
    canplay() {
      this.video = document.getElementById("myVideo");
      this.step = Math.floor(100 / this.video.duration);
    },
    // 将音频总时长格式化为分秒格式
    formatTime(seconds) {
      if (seconds < 60) {
        return `00:${seconds.toString().padStart(2, "0")}`;
      }
      const minutes = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
      const second = (seconds % 60).toString().padStart(2, "0");
      return `${minutes}:${second}`;
    }
  },
  mounted() {}
};
</script>
