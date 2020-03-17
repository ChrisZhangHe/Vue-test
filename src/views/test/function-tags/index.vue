<!-- 函数式组件 标签输入控件-->
<template>
  <div>
    <h3>函数式组件</h3>
    <my-tags>
      <!-- <h3 style="color:red;">tags</h3> -->
      <!-- <template v-slot:foo='{{dd}}'>
        <p>
          first:{{dd}}
        </p>
      </template> -->
      <!-- <template> -->
      <template v-slot:default="{dd}">
        <p>second:{{dd}}</p>
        <h3>h3</h3>
      </template>
      <!-- <h2 >2</h2> -->

    </my-tags>
  </div>
</template>
<script>
export default {
  name: "FunctionTags",
  components: {
    myTags: () => import("./tags.vue")
  }
};
</script>
