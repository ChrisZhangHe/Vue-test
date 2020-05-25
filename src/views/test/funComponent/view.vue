<template>
  <div>
    <fun-com>
      <template v-slot:default="{ test }">
        <div>test:{{ test }}</div>
      </template>
    </fun-com>
  </div>
</template>
<script>
export default {
  name: "ViewFun",
  components: {
    funCom: () => import("./function.vue")
  }
};
</script>
