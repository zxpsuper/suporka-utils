/**
 * 判断是否为邮箱
 * @export
 * @param {string} emailStr
 * @returns {boolean}
 */
export default function isEmail(emailStr: string): boolean {
  return /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]*)*@[a-zA-Z0-9]+.[a-zA-Z0-9{2,5}$]/.test(
    emailStr
  );
}
