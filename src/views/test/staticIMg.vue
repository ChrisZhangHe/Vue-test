<template>
  <div>
    <img
      v-for="imgSrc in imgList"
      :key="imgSrc"
      :src="imgSrc"
      alt=""
    >
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
        const componentConfig = componentContext(fileName);
        fileName = fileName
          .split("/")
          .pop()
          .replace(/\.\w+$/, "");
        imgList.push(require(`../../assets/${fileName}.png`));
      });
      this.imgList = imgList;
    }
  },
  created() {
    this.initImgList();
  }
};
</script>