<script>
export default {
  name: "MyTags",
  functional: true,
  props: {
    dd: {
      type: String,
      default: "123"
    }
  },
  render(createElement, context) {
    // console.log("context.data----", context.props);
    return createElement(
      "div",
      {
        props: {
          dd: {
            type: String,
            default: "123"
          }
        }
      },
      //   Object.values(context.slots())
      context.children
    );
  }
};
</script>
