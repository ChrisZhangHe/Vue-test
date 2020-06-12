<template>
  <div>
    <div>parent: {{ num }}</div>
    <child></child>
  </div>
</template>
<script>
export default {
  provide() {
    return {
      num: this.num
    };
  },
  data() {
    return {
      num: 1
    };
  },
  components: {
    child: () => import("./child.vue")
  },
  created() {
    setTimeout(() => {
      this.num = 2;
    }, 2000);
  }
};
</script>
