/* eslint-disable no-unused-vars */
import PositionLeft from "./PositionLeft.vue";
import PositionTop from "./PositionTop.vue";

export default {
  functional: true,
  props: ["tab-position"],
  components: {
    PositionLeft,
    PositionTop
  },
  render(h, context) {
    if (context.props.tabPosition === "left") {
      return <PositionLeft>{context.children}</PositionLeft>;
    }
    return <PositionTop>{context.children}</PositionTop>;
  }
};
