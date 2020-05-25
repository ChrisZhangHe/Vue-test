<template>
  <div>
    inputVal:{{ inputVal }}
    <my-input v-model="inputVal"></my-input>
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
      inputVal: "3"
    };
  }
};
</script>
