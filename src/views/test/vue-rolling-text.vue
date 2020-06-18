// 文字滚动效果
<template>
  <div>
    <h2>数据双向绑定:{{ data }}</h2>
    <h2>公告栏文字停顿滚动</h2>
    <div class="textBox">
      <transition name="slide">
        <p class="text" :key="text.id">{{ text.val }}</p>
      </transition>
    </div>
    <!-- vue 文字滚动 -->
    <div>
      <div ref="box" class="scroll-text" @mouseover="mouseover" @mouseout="mouseout">
        <div class="scroll-text-content" v-for="n in 2" :key="'n' + n">
          <div v-for="(text, index) in scrollTextList" :key="'text' + index">{{ text }}</div>
        </div>
      </div>
    </div>
    <!-- 组件 -->
    <br />
    <content-rolling type="top" style="width:300px;height:300px;border:1px solid red;">
      <div
        class="rowContent"
        v-for="(text, index) in scrollTextList"
        :key="'text' + index"
        @click="rowClick(text)"
      >
        {{ text }}
      </div>
    </content-rolling>
    <content-stop-rolling
      type="left"
      style="width:400px;height:80px;border:1px solid red;"
      :list="textArr"
      v-slot="{ item }"
    >
      <p class="text" :key="item.key">{{ item.content }}</p>
    </content-stop-rolling>
  </div>
</template>

<script>
export default {
  name: "scroll",
  components: {
    contentRolling: () => import("@/components/Rolling/ContentRolling"),
    contentStopRolling: () => import("@/components/Rolling/ContentStopRolling")
  },
  data() {
    return {
      textArr: ["1 第一条公告", "2 第二条公告第二条公告", "3 第三条公告第三条公告第三条公告"],
      number: 0,
      vueText: "vue 文字滚动",
      time: null,
      scrollTop: 0,
      scrollTextList: ["第一条公告", "第二条公告", "第三条公告"],
      data: Object.freeze({ user: { age: 1 } })
    };
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.textArr[this.number]
      };
    }
  },
  mounted() {
    this.startMove();
  },
  methods: {
    startMove() {
      // eslint-disable-next-line
      let timer = setTimeout(() => {
        if (this.number === 2) {
          this.number = 0;
        } else {
          this.number += 1;
        }
        this.startMove();
      }, 2500); // 滚动不需要停顿则将2000改成动画持续时间
    },
    startScroll() {
      const { box } = this.$refs;
      if (box.scrollTop >= box.scrollHeight / 2) {
        box.scrollTop = 0;
      } else {
        box.scrollTop += 1;
      }
    },
    start() {
      this.time = setInterval(this.startScroll, 50);
    },
    mouseover() {
      clearInterval(this.time);
      this.time = null;
    },
    mouseout() {
      this.start();
    },
    rowClick(text) {
      console.log(text);
    }
  },
  created() {
    this.start();
    setTimeout(() => {
      this.data.user.age = 2;
    }, 3000);
  }
};
</script>

<style scoped>
h2 {
  padding: 20px 0;
}
.textBox {
  width: 100%;
  height: 40px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.text {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 2s linear;
}
.slide-enter {
  transform: translateX(-800px) scale(1);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(800px) scale(0.8);
  opacity: 0;
}
.scroll-text {
  height: 100px;
  width: 400px;
  overflow: hidden;
  border: 1px solid red;
}
.scroll-text-content {
  min-height: 100px;
}
.rowContent:hover {
  cursor: pointer;
  background: powderblue;
}
</style>
