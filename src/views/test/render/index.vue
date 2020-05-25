<template>
  <div>
    <h3>render contend</h3>
    <!-- jsxTest-component -->
    <div>
      <h4>jsxTest-component</h4>
      <jsx-test :propAge="propAge" :moreProp="'多余的参数'" @comClick="comClick">
        来自引用组件处body-default信息；
        <template v-slot:body>
          <h2>来自引用组件处body-slot信息-h2；</h2>
          <div>
            来自引用组件处body-slot信息-div；
          </div>
        </template>
      </jsx-test>
    </div>
    <!-- createElementTest-component -->
    <div>
      <h4>createElementTest-component</h4>
      <create-element-test :propAge="propAge" :moreProp="'多余的参数'" @comClick="comClick">
        来自引用组件处body-default信息；
        <template v-slot:body>
          <h2>来自引用组件处body-slot信息-h2；</h2>
          <div>
            来自引用组件处body-slot信息-div；
          </div>
        </template>
      </create-element-test>
    </div>
  </div>
</template>
<script>
// import('./index.js')
export default {
  name: "Render",
  components: {
    jsxTest: () => import("./jsx.js"),
    createElementTest: () => import("./createElement")
  },
  data() {
    return {
      propAge: "12岁"
    };
  },
  methods: {
    comClick(val) {
      this.$message(val);
    }
  }
};
</script>
<style lang="scss" scoped>
h4 {
  color: red;
}
</style>
