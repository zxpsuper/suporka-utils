/**
 * 深拷贝
 * @export
 * @param {*} data
 * @returns {*}
 */
export default function deepClone(data: any): any {
  if (!data || !(data instanceof Object) || typeof data === "function") {
    return data;
  }
  var constructor = data.constructor;
  var result = new constructor();
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      result[key] = deepClone(data[key]);
    }
  }
  return result;
}
