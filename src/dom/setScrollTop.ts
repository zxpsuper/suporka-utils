/**
 * @param {number} value 距顶部的距离
 * @desc 设置滚动条距顶部的距离
 */
export default function setScrollTop(value: number): number {
  window.scrollTo(0, value);
  return value;
}
