<template>
  <div>
    <!-- 图片、视频 -->
    <ul>
      <li v-for="item in mediaList" :key="item.src" class="mediaLi">
        <!-- 图片 -->
        <template v-if="item.type == 'img'">
          <img :src="item.src" alt="" class="media" />
          <span class="hoverSpan">
            <span>
              <i @click="zoomImg(item.src)" class="el-icon-zoom-in"></i>
            </span>
            <span>
              <i @click="dowonloadImg(item.src)" class="el-icon-download"></i>
            </span>
            <!-- <span>
              <i class="el-icon-delete"></i>
            </span> -->
          </span>
        </template>
        <!-- 视频 -->
        <template v-else-if="item.type == 'video'">
          <video :src="item.src" controls="controls" class="media"></video>
        </template>
        <!-- 其他 -->
        <template v-else-if="item.type == 'other'">
          <svg
            t="1585531244375"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2272"
            width="100"
            height="100"
          >
            <path
              d="M561.6 64.4H185.8c-6.6 0-13 2.6-17.7 7.3-4.7 4.7-7.3 11.1-7.3 17.7v851.8c0 13.6 11.2 25.1 25 25.1h651.6c6.6 0 13-2.6 17.7-7.3 4.7-4.7 7.3-11.1 7.3-17.7v-714 137.8L812.2 315v601.2H210.9V114.5h400.8l-50.1-50.1z m0 0"
              p-id="2273"
              fill="#26aaf0"
            ></path>
            <path
              d="M561.6 64.4L862.2 365h-251c-27.3-0.2-49.4-22.3-49.6-49.6v-251z m0 0M311.1 315h150.3v50.1H311.1zM311.1 515.4h400.8v50.1H311.1zM311.1 715.8h400.8v50.1H311.1z"
              p-id="2274"
              fill="#26aaf0"
            ></path>
          </svg>
          <span class="hoverSpan">
            <span>
              <i @click="dowonloadImg(item.src)" class="el-icon-download"></i>
            </span>
          </span>
        </template>
      </li>
    </ul>
    <!-- 语音 -->
    <ul>
      <li v-for="src in audioList" :key="src">
        <audio :src="src" controls="controls"></audio>
      </li>
    </ul>
    <!-- 弹窗展示图片放大效果 -->
    <el-dialog :visible.sync="dialogVisible">
      <img :src="zommImgSrc" alt="" style="width:100%;" />
    </el-dialog>
  </div>
</template>
<script>
// 支持图片、视频、音频列表缩略图展示、下载、预览功能
export default {
  name: "Preview",
  props: {
    // 包含视频、图片、其他，格式为{src:'',type:''},type值为img、video、other
    mediaList: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    },
    // 音频文件列表，格式为src地址数组
    audioList: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      dialogVisible: false, // 控制图片放大弹窗是否显示
      zommImgSrc: null // 图片放大展示src
    };
  },
  methods: {
    // 放大图片
    zoomImg(src) {
      this.dialogVisible = true;
      this.zommImgSrc = src;
    },
    // 下载图片、附件
    dowonloadImg(src) {
      const a = document.createElement("a");
      const event = new MouseEvent("click");
      a.download = "图片名字";
      a.href = src;
      a.dispatchEvent(event);
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  text-align: left;
}
li {
  list-style: none;
}
audio {
  height: 42px;
}
.mediaLi {
  position: relative;
  display: inline-block;
  width: 140px;
  height: 140px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  > .media {
    width: 100%;
  }
  > svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.hoverSpan {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: default;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s;
  font-size: 24px;
  > span {
    display: inline-block;
    cursor: pointer;
  }
  > span:nth-of-type(n + 2) {
    margin-left: 10px;
  }
}
.hoverSpan:hover {
  opacity: 1;
}
.hoverSpan:after {
  display: inline-block;
  content: "";
  height: 100%;
  vertical-align: middle;
}
.mediaLi:nth-of-type(n + 2) {
  margin-left: 6px;
}
</style>
