<template>
  <div>
    function-component content
    <view-fun></view-fun>
    <!-- <br />
    blogVal:{{blogVal}}
    <blog-post
      :blogVal="blogVal"
      @input="input"
    >
      <template v-slot:header="value">
        <div slot='dddd'>
          blog-post header:{{value}}
        </div>
      </template>
    </blog-post> -->
  </div>
</template>
<script>
export default {
  name: "FunComTest",
  components: {
    ViewFun: () => import("./view.vue")
  },
  data() {
    return {
      //   blogVal: "1"
    };
  },
  methods: {
    // input(val) {
    //   this.blogVal = val;
    // }
  }
};
</script>