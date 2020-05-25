<template>
  <div>
    <img v-for="imgSrc in imgList" :key="imgSrc" :src="imgSrc" alt="" />
  </div>
</template>
<script>
export default {
  name: "StaticImg",
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    initImgList() {
      const componentContext = require.context("../../assets", false, /.png$/);
      const imgList = [];
      componentContext.keys().forEach(fileName => {
        // const componentConfig = componentContext(fileName);
        const newFileName = fileName
          .split("/")
          .pop()
          .replace(/\.\w+$/, "");
        const path = `../../assets/${newFileName}.png`;
        // eslint-disable-next-line import/no-dynamic-require,global-require
        imgList.push(require(path));
      });
      this.imgList = imgList;
    }
  },
  created() {
    this.initImgList();
  }
};
</script>
