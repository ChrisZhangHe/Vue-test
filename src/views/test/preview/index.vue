<template>
  <div>
    <preview
      :mediaList="mediaList"
      :audioList="audioList"
    ></preview>
  </div>
</template>
<script>
export default {
  name: "PreviewIndex",
  components: {
    preview: () => import("./preview.vue")
  },
  data() {
    return {
      mediaList: [
        {
          type: "img",
          src: require("./files/img001.jpg")
        },
        {
          type: "img",
          src: require("./files/img002.jpg")
        },
        {
          type: "video",
          src: "/movie.ogv"
        },
        {
          type: "other",
          src: require("./files/img003.jpg")
        }
      ],
      audioList: ["/audio.ogv"]
    };
  }
};
</script>