function setRemInit() {
  // postcss-px2rem的内容
  // 基准大小
  const baseSize = 20;
  // 设置 rem 函数
  function setRem() {
    // 当前页面宽度相对于 1920 px(设计稿尺寸)的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / 1920;
    // 设置页面根节点字体大小
    const fontSize = `${baseSize * scale}px`;
    // if (fontSize < 16) {
    //   fontSize = "16px";
    // } else {
    //   fontSize += "px";
    // }
    document.documentElement.style.fontSize = fontSize;

    // 这个if语句代码，是用来控制屏幕的最小宽度，不需要可以可以不写
    // if (Number(document.documentElement.style.fontSize.slice(0, -2)) <= 130) {
    //   document.documentElement.style.fontSize = "14px";
    // }
  }
  // 初始化
  setRem();
  // 改变窗口大小时重新设置 rem
  window.addEventListener("resize", setRem);
}
setRemInit();
