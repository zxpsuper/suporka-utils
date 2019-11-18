/**
 * 获取最大公约数
 * @export
 * @param num1 数字1
 * @param num2 数字2
 * @return {number}
 */
export default function maxDivisor(num1: number, num2: number): number {
  let max = num1 > num2 ? num1 : num2,
    min = num1 > num2 ? num2 : num1;
  for (var i = min; i >= 1; i--) {
    if (max % i == 0 && min % i == 0) {
      return i;
    }
  }
}
