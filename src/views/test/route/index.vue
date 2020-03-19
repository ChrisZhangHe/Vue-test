<template>
  <div>
    route:{{newsletterPopup}}
    <el-input
      v-model="newsletterPopupVal"
      type="text"
    ></el-input>
  </div>
</template>
<script>
export default {
  name: "routeCom",
  props: ["newsletterPopup"],
  data() {
    return {
      newsletterPopupVal: ""
    };
  },
  created() {
    console.log(`route${this.newsletterPopup}-created---------`);
    this.newsletterPopupVal = this.newsletterPopup;
  },
  activated() {
    console.log("activated------");
  },
  deactivated() {
    console.log("deactivated----");
  },
  beforeRouteEnter(to, from, next) {
    to.meta.isKeepAlive = false;
    next();
  },
  beforeRouteUpdate(to, from, next) {
    to.meta.isKeepAlive = false;
    next();
  },
  beforeRouteLeave(to, from, next) {
    to.meta.isKeepAlive = false;
    next();
  }
};
</script>