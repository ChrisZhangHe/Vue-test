<template>
  <div>
    <my-slot v-bind:dynamicSlot="dynamicSlot">
      default-slot-content
      <h3>parent-data:{{parentData}}</h3>
      <!-- <template v-slot="value2">
        <div>
          default:{{value2.default}}
        </div>
      </template> -->
      <template v-slot:yellowName="slotProps">
        <div style="color:red">
          yellow：{{slotProps.yellowVal}}
        </div>
      </template>
      <h3>动态插槽名</h3>
      <template v-slot:[slotName]="slotProps">
        <div>
          插槽名为:{{slotName}}
          <br />
          插槽值为:{{slotProps}}
        </div>
      </template>
      <template #pithy="{propValue}">
        <div>
          具名插槽的缩写:<br />
          propValue:{{propValue}}
        </div>
      </template>
      <template #dynamicSlotName1="{propValue}">
        <div>
          动态创建插槽：<br />
          propValue:{{propValue}}
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
  },
  data() {
    return {
      parentData: "default-slot-parentData",
      slotName: "footer", //header
      dynamicSlot: {
        isCreate: true,
        name: "dynamicSlotName1",
        value: "dynamicSlotValue1"
      }
    };
  }
};
</script>
