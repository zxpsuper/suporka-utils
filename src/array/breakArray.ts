/**
 * 打乱数组
 * @param a 数组
 */
export default function breakArray(a: Array<any>): Array<any> {
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    // es6语法
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}
breakArray.prototype._functionName = "breakArray";
