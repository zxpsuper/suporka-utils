/**
 *
 * @desc  设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
export default function setCookie(
  name: string,
  value: string,
  days: string
): void {
  var date = new Date();
  date.setDate(date.getDate() + Number(days));
  document.cookie = name + "=" + value + ";expires=" + date;
}
