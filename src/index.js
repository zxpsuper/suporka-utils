var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
var department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
// 完整函数类型
var myAdd = function (x, y) {
    return x + y;
};
//
// 泛型，使返回值的类型与传入参数的类型是相同的
function identity(arg) {
    return arg;
}
var output = identity("myString"); // type of output will be 'string'
// <string>可以省略，编译器会自动识别
var output2 = identity("myString");
// 泛型类型
var myIdentity = identity;
