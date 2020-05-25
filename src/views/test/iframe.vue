<template>
  <div>
    <h3>iframe 界面</h3>
    <iframe src="/test.html" frameborder="0"></iframe>
  </div>
</template>
<script>
export default {
  name: "IframeIndex",
  created() {
    sessionStorage.setItem("vueIndex", 11111);
  }
};
</script>
