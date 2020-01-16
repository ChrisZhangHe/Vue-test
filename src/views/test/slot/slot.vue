<template>
  <div>
    <h3>a</h3>
    <slot v-bind:default="red"></slot>
    <h3>b</h3>
    <slot
      name="yellow"
      v-bind:value="yellow"
    ></slot>
  </div>
</template>
<script>
export default {
  name: "Slot",
  data() {
    return {
      yellow: 'yellowVal',
      red:'redVal'
    };
  }
};
</script>
