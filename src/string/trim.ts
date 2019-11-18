/**
 * 去除多余空格,并返回处理过的str
 * @export
 * @param {string} str
 * @returns {string}
 */
export default function trim(str: string): string {
  return str.replace(/^\s+|\s+$/g, "");
}
