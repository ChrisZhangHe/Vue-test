import RenderComponentTest from "./component.vue";

export default {
  name: "CreateElementTest",
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
  render(createElement) {
    const data = {
      props: {
        propAge: this.propAge,
        value: "1"
      },
      on: {
        comClick: this.handleClick,
        input(val) {
          alert(val);
        }
      }
    };
    return createElement(RenderComponentTest, data, [
      this.$slots
      //   this.$slots.default.flat(1),
      //   this.$slots.body.flat(1)
    ]);
    // const scopedSlots = {
    //   default: () => <div>default-info</div>,
    //   body: props => <div>body-info:{{ props }}</div>
    // };
  }
};
