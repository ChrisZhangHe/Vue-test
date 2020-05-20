<template>
  <dir>
    <h3>VueExtend demo</h3>
    <div id="mount-point"></div>
  </dir>
</template>
<script>
import Vue from "vue";
import testCom from "./test.vue";
export default {
  name: "VueExtend",
  mounted() {
    // 创建构造器
    // var Profile = Vue.extend(testCom);
    // // 创建 Profile 实例，并挂载到一个元素上。
    // new Profile().$mount("#mount-point");
    let testComponent = Vue.extend({
      template: "<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
      data: function() {
        return {
          firstName: "Walter",
          lastName: "White",
          alias: "Heisenberg"
        };
      }
        // render: function(createElement) {
        //   return createElement(
        //     "h1", // 标签名称
        //     1231312 // 子节点数组
        //   );
        // }
    });
    let extendContent = new testComponent().$mount("#mount-point");
    // document.body.appendChild(extendContent.$el);
  }
};
</script>
