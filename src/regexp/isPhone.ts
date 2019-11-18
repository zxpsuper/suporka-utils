/**
 * 判断是否为中国大陆手机
 * @param phone
 * @returns {boolean}
 */
export default function isPhone(phone: string): boolean {
  return /^1[3|4|5|7|8][0-9]{9}$/.test(phone);
}
