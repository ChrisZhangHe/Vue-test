/* eslint-disable prettier/prettier */
export default {
  functional: true,
  props: ["authId"],
  // eslint-disable-next-line no-unused-vars
  render(h, context) {
    // 获取用户权限数据，判断是否有访问权限
    if (context.props.authId === "save") return <div>{context.children}</div>;
    return undefined;
  }
};
