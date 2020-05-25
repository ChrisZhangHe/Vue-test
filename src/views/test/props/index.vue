<template>
  <div>
    <!-- <index-props v-bind="propObj"></index-props> -->
    <h3>index-num:{{ propObj.num }}</h3>
    <h3>index-array:{{ propObj.array }}</h3>
    <!-- <index-props
      v-bind:num="propObj.num"
      v-bind:array="propObj.array"
      v-on:update:num="propObj.num=$event"
      v-on:update:array="propObj.array=$event"
    ></index-props> -->
    <index-props v-bind.sync="propObj"></index-props>
  </div>
</template>
<script>
export default {
  name: "PropsIndex",
  components: {
    indexProps: () => import("./props.vue")
  },
  data() {
    return {
      propObj: {
        num: 123,
        array: [1, 2, 3]
      }
    };
  }
};
</script>
