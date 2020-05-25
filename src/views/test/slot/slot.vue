<template>
  <div>
    <h3>default：</h3>
    <slot v-bind:default="red">默认插槽内容</slot>
    <!-- 具名插槽，名称为yellow -->
    <h3>具名插槽，名称为yellow</h3>
    <slot name="yellowName" v-bind:yellowVal="yellow"></slot>
    <slot name="header" v-bind:value="yellow"></slot>
    <slot name="footer" v-bind:value="yellow"></slot>
    <slot name="pithy" v-bind:propValue="yellow"></slot>
    <!-- 动态创建slot -->
    <template v-if="dynamicSlot.isCreate">
      <slot :name="dynamicSlot.name" v-bind:propValue="dynamicSlot.value"></slot>
    </template>
  </div>
</template>
<script>
export default {
  name: "Slot",
  data() {
    return {
      yellow: "yellowVal",
      red: "redVal"
    };
  },
  props: ["dynamicSlot"]
};
</script>
