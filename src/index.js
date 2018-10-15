// 1. 类型
var isDone = false;
var list = [1, 2, 3];
// 数组泛型
var list2 = [1, 2, 3];
// 元组 Tuple,元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
var x = ["12", 22];
/* 枚举, 常数不可变
enum类型是对JavaScript标准数据类型的一个补充。 */
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Blue"] = 12] = "Blue";
})(Color || (Color = {}));
var super2 = Color.Red;
// super2 = 888
console.log(super2); // 10
// 无返回
function warnUser() {
    alert("This is my warning message");
}
//never类型表示的是那些永不存在的值的类型。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 类型断言，指的是你知道此变量类型，并给它断言，两种写法
// 1
var someValue = "this is a string";
var strLength = someValue.length;
// 2
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object", x: 11 };
printLabel(myObj);
var a = [1, 2, 3, 4];
var ro = a; // 只读数组ReadonlyArray<number>
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    return Clock;
}());
// 3.类
// private 当成员被标记成private时，它就不能在声明它的类的外部访问。
// public 默认是 public
// protected 成员在派生类中仍然可以访问
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
        console.log(this.name);
    }
    return Animal;
}());
// new Animal("Cat").name; // 错误: 'name' 是私有的.
// 存取器 set get
var passcode = "secret passcode";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
// 静态属性 static
// 抽象类  abstract class Animal
// 抽象方法必须在子类中实现
