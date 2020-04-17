<template>
  <div>
    <el-upload
      ref="upload"
      action="http://202.61.88.250:8902/data/file/upload"
      :before-upload="handleBeforeUpload"
      :file-list="fileList"
      :auto-upload="false"
      :data="param"
    >
      <el-button
        slot="trigger"
        size="small"
        type="primary"
      >选取文件</el-button>
      <el-button
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitUpload"
      >上传到服务器</el-button>
    </el-upload>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [],
      param: {
        ext: "xlsx",
        __debug__: 1
      }
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleBeforeUpload(file) {
      this.param.ext = file.name.slice(file.name.lastIndexOf(".") + 1);
    }
  }
};
</script>