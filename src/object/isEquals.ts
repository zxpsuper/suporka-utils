/**
 * 判断两个变量值是否完全相同
 * @param a 任何类型变量
 * @param b 任何类型变量
 */
export default function isEquals(a: any, b: any): boolean {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== "object" && typeof b !== "object"))
    return a === b;
  if (a.prototype !== b.prototype) return false;
  if (Array.isArray(a) && Array.isArray(b)) a.sort(), b.sort();

  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => isEquals(a[k], b[k]));
}
