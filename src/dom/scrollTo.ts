import setScrollTop from "./setScrollTop";
import getScrollTop from "./getScrollTop";
var requestAnimationFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    (<any>window).mozRequestAnimationFrame ||
    function(callback: Function) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
/**
 *
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to 指定位置
 * @param {Number} duration 滚动时间
 */
export default function scrollTo(to: number, duration: number = 1000) {
  if (duration < 0) {
    setScrollTop(to);
    return;
  }
  var diff = to - getScrollTop();
  if (diff === 0) return;
  var step = (diff / duration) * 10;
  requestAnimationFrame(function() {
    if (Math.abs(step) > Math.abs(diff)) {
      setScrollTop(getScrollTop() + diff);
      return;
    }
    setScrollTop(getScrollTop() + step);
    if (
      (diff > 0 && getScrollTop() >= to) ||
      (diff < 0 && getScrollTop() <= to)
    ) {
      return;
    }
    scrollTo(to, duration - 16);
  });
}
