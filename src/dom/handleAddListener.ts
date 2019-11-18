/**
 * 兼容IE添加事件监听
 * @export
 * @param {string} type 事件名
 * @param {function} fn 处理函数
 */
export default function handleAddListener(type: string, fn: any): void {
  if (window.addEventListener) {
    window.addEventListener(type, fn);
  } else {
    (<any>window).attachEvent("on" + type, fn);
  }
}
