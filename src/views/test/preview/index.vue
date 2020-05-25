<template>
  <div>
    <preview :mediaList="mediaList" :audioList="audioList"></preview>
  </div>
</template>
<script>
const img001 = require("./files/img001.jpg");
const img002 = require("./files/img002.jpg");
const img003 = require("./files/img003.jpg");

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
          src: img001
        },
        {
          type: "img",
          src: img002
        },
        {
          type: "video",
          src: "/movie.ogv"
        },
        {
          type: "other",
          src: img003
        }
      ],
      audioList: ["/audio.ogv"]
    };
  }
};
</script>
