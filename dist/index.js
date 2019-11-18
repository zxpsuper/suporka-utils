"use strict";
// @ts-nocheck
/**
 * @desc webpack打包入口文件
 * @example 自动引入子目录下所有js文件
 */
exports.__esModule = true;
function requireAll(r) {
    return r.keys().map(r);
}
// @ts-ignore
var functions = requireAll(require.context("./", true, /\.ts$/));
console.log(functions);
// @ts-ignore
var allFunctions = Object.create(null);
functions.forEach(function (element) {
    if (element["default"] && element["default"]._functionName)
        allFunctions[element["default"]._functionName] = element["default"];
});
allFunctions.all = functions;
exports["default"] = allFunctions;
