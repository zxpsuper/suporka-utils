/**
 * 获取最小公倍数
 * @export
 * @param num1 数字1
 * @param num2 数字2
 * @return {number}
 */
export default function minDivisor(num1: number, num2: number): number {
  let max = num1 > num2 ? num1 : num2,
    min = num1 > num2 ? num2 : num1;
  for (var i = max; i >= max; i++) {
    if (i % max == 0 && i % min == 0) {
      return i;
    }
  }
}
