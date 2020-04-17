<template>
  <div>
  

    <div style="text-align:left;">
      <el-steps
        :active="1"
        finish-status="success"
      >
        <el-step description="这是一段很长很长很长的描述性文字">
          <template slot="title">
            <div>
              2020/03/10 12:2:10
              <br />
              张三 审核通过
            </div>
          </template>
        </el-step>
        <el-step
          title="步骤 2"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="步骤 3"
          description="这段就没那么长了"
        ></el-step>
      </el-steps>
    </div>
  </div>
</template>
<script>
export default {
  name: "CheckModel"
};
</script>
