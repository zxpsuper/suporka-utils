// @ts-nocheck
/**
 * @desc webpack打包入口文件
 * @example 自动引入子目录下所有js文件
 */

function requireAll(r: any) {
  return r.keys().map(r);
}
// @ts-ignore
const functions = requireAll(require.context("./", true, /\.ts$/));

// @ts-ignore
let allFunctions = Object.create(null);
functions.forEach((element: any) => {
  if (element.default && element.default.name)
    allFunctions[element.default.name] = element.default;
});

export default allFunctions;
