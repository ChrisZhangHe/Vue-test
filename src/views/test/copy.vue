<template>
  <div>
    <!-- Target -->
    <input id="foo" value="https://github.com/zenorocha/clipboard.js.git" />

    <!-- Trigger -->
    <button class="btn" data-clipboard-target="#foo">
      复制
    </button>
  </div>
</template>
<script>
import Clipboard from "clipboard";

export default {
  name: "Copy",
  mounted() {
    // eslint-disable-next-line no-new
    new Clipboard(".btn");
  }
};
</script>
