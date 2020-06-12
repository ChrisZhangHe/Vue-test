<template>
  <div></div>
</template>
<script>
import Vue from "vue";

export default {
  name: "vue-extend",
  created() {
    const Extend = Vue.extend({
      template: "<h3>vue-extend-div</h3>"
    });

    // 第一种
    const div = document.createElement("div");
    document.body.appendChild(div);
    new Extend().$mount(div);
    // 第二种
    document.body.appendChild(new Extend().$mount().$el);
  }
};
</script>
