<template>
  <div>
    <my-slot>
      slot-content
      <template v-slot="value2">
        <div>
          default:{{value2.default}}
        </div>
      </template>
      <template v-slot:yellow="value1">
        <div style="color:red">
          yellow:{{value1.value}}
        </div>
      </template>
    </my-slot>
  </div>
</template>
<script>
export default {
  name: "SlotIndex",
  components: {
    mySlot: () => import("./slot")
  }
};
</script>
