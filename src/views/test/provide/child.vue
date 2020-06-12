<template>
  <div>child: {{ num }}</div>
</template>
<script>
export default {
  name: "child",
  inject: ["num"]
};
</script>
