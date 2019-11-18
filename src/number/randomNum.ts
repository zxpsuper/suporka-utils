/**
 *
 * @desc 生成指定范围随机数
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
export default function randomNum(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max - min));
}
