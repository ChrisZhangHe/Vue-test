<template>
  <div>
    index:{{myInputVal}}
    <my-input v-model="myInputVal"></my-input>
  </div>
</template>
<script>
export default {
  name: "",
  components: {
    MyInput: () => import("./input.vue")
  },
  data() {
    return {
      myInputVal: ""
    };
  }
};
</script>
