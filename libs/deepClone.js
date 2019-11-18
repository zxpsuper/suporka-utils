"use strict";
exports.__esModule = true;
/**
 * 深拷贝
 * @export
 * @param {*} data
 * @returns {*}
 */
function deepClone(data) {
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
exports["default"] = deepClone;
