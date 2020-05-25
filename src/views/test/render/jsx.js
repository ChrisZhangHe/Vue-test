import RenderComponentTest from "./component.vue";

export default {
  name: "JSXTest",
  props: {
    propAge: {
      type: String
    }
  },
  methods: {
    handleClick() {
      this.$emit("comClick", "RenderComponentTest-click");
    }
  },
  render() {
    const scopedSlots = {
      default: () => <div>default-info</div>,
      body: props => <div>body-info:{{ props }}</div>
    };
    const data = {
      props: {
        propAge: this.propAge,
        value: "1"
      },
      on: {
        comClick: this.handleClick,
        input() {
          // alert(val);
        }
      }
    };
    return (
      <RenderComponentTest {...data}>
        {
          scopedSlots
          // this.$slots
          //   this.$scopedSlots
          /* <template slot="default">{this.$slots.default}</template>
        <template slot="body">{this.$slots.body}</template> */
        }
      </RenderComponentTest>
    );
  }
};
