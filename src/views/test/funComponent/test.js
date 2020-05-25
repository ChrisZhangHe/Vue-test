import Vue from "vue";

Vue.component("blog-post", {
  props: ["blogVal"],
  render(h) {
    const self = this;
    //   var header = this.$scopedSlots.header('12345');
    // //   var header1 = this.$slots.header;
    //   return createElement('div', [
    //     createElement('header', header),
    //   ])
    return h(
      "el-input",
      {
        attrs: {
          value: self.blogVal
        },
        on: {
          input(event) {
            self.$emit("input", event);
          }
        }
      },
      [<template slot="prepend">Http://</template>]
    );
  }
});
Vue.component("hhh", {
  name: "hhh",
  template:
    "<h5>h5content{{hhhVal}}<div style='color:red;'><slot name='h5Content'></slot></div></h5>",
  props: {
    hhhVal: String
  },
  created() {
    this.$emit("hhhClick", "hhhClick-value");
  }
});
