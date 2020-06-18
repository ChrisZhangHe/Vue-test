/* eslint-disable no-plusplus */
<template>
  <div>
    <!-- 原生transition过渡 -->
    <!-- <div class="nativeTransition animated fadeInDownBig">
      原生transition过渡
    </div> -->
    <el-button @click="isShowTransitionDiv = !isShowTransitionDiv">transiton</el-button>
    <!-- <transition name="t">
      <div class="transitionDiv" v-show="isShowTransitionDiv"></div>
    </transition> -->
    <!-- <transition name="slide-fade">
      <p v-show="isShowTransitionDiv">hello</p>
    </transition> -->
    <!-- <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutDown"
    >
      <div class="customClass animated bounceInDown" v-if="isShowTransitionDiv">hello</div>
    </transition> -->
    <!-- vue transition -->
    <el-button @click="customDiv">toggle-div</el-button>
    <!-- <transition name="customDiv" mode="out-in">
      <div :key="customDivVal" class="cusDiv">
        {{ customDivVal }}
      </div>
    </transition> -->
    <el-radio v-model="radio" label="v-a" @change="change">v-a</el-radio>
    <el-radio v-model="radio" label="v-b" @change="change">v-b</el-radio>
    <transition name="component-fade" mode="out-in">
      <component v-bind:is="view"></component>
    </transition>

    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span v-for="item in items" v-bind:key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>

    <div>
      <el-button @click="addItem">add</el-button>
      <el-button @click="del">delete</el-button>
      <transition-group name="customList" tag="ul">
        <li class="customListLi" v-for="li in customList" :key="li">{{ li }}</li>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  name: "TransitionDD",
  data() {
    return {
      isShowTransitionDiv: true,
      isShowCustomDiv: true,
      customDivVal: "vue transition",
      view: "v-a",
      radio: "v-a",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
      customList: ["a", "b", "c", "d"]
    };
  },
  components: {
    "v-a": {
      template: "<div>Component A</div>"
    },
    "v-b": {
      template: "<div>Component B</div>"
    }
  },
  methods: {
    customDiv() {
      this.customDivVal += 1;
    },
    change(value) {
      this.view = value;
    },
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      // eslint-disable-next-line no-plusplus
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
    addItem() {
      this.customList.splice(0, 0, Math.random());
    },
    del() {
      this.customList.splice(0, 1);
    }
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
.nativeTransition {
  width: 300px;
  height: 300px;
  background: brown;
  transition: all 4s 1s;
}
.nativeTransition:hover {
  /* background: #fff; */
  cursor: pointer;
  /* transform: translateX(100px); */
  transform: scaleY(0);
  transition: all 2s 1s;
}
/* .customDiv-enter {
  width: 600px;
}
.customDiv-enter-active {
  transition: all 5s;
}
.customDiv-enter-to {
  height: 1200px;
} */

/* .customDiv-enter-active {
  transition: all 0.3s ease;
} */
.cusDiv {
  width: 300px;
  height: 300px;
  border: 1px solid red;
}
.customDiv-enter,
.customDiv-leave-to {
  opacity: 0;
}
.customDiv-enter-active,
.customDiv-leave-active {
  transition: opacity 3s ease;
}

.component-fade-enter-active {
  transition: opacity 1s ease;
}
.component-fade-leave-active {
  transition: opacity 3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {
  transition: all 1s;
}
.list-leave-active {
  /* position: absolute; */
}

.customClass {
  width: 300px;
  height: 300px;
  background: cadetblue;
  margin: 0 auto;
}
.customList-enter,
.customList-leave-to {
  opacity: 0;
}
.customList-enter-active,
.customList-leave-active {
  transition: all 3s;
}
.customList-move {
  transition: all 3s;
}
.customList-leave-active {
  position: absolute;
}
</style>
