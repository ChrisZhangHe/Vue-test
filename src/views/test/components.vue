<template>
  <div>
    <!-- <component-id></component-id> -->
    <h3>component content</h3>
    <component v-for="(item,index) in components" :key="item.type+index" :is="item.type"></component>
  </div>
</template>
<script>
export default {
  name: "Components",
  data() {
    return {
      components: [
        {
          type: "upload"
        },
        {
          type: "vueExtend"
        }
      ]
    };
  },
  components: {
    //
  },
  created() {
      this.components.forEach(({type})=>{
          this.$options.components[type]=()=>import(`./${type}`);
      })
  }
};
</script>