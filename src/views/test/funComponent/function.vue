<script>
export default {
  name: "FunctionComponent",
  render() {
    return this.$scopedSlots.default({
      test: 1212
    });
  }
};
</script>
