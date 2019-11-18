/**
 * 获取地址栏参数
 * @param name 参数名
 */
export default function getQueryString(name: string): string {
  let t = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let a = window.location.search.substr(1).match(t);
  if (a != null) return a[2].toString();
  return "";
}
