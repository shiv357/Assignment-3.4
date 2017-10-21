var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @class Department: Abstract
 */
var Department = /** @class */ (function () {
    /**
     * [constructor: This function sets the name of the department ]
     * @param {string} name [This is the name of the department]
     */
    function Department(name) {
        this.name = name;
    }
    /**
     * [printName: This function prints the name of the department on cosole]
     * no parameters
     * no return value
     */
    Department.prototype.printName = function () {
        console.log("The department name is " + this.name);
    };
    return Department;
}());
/**
 * @class AccountDepartment
 * @extends Department
 */
var AccountDepartment = /** @class */ (function (_super) {
    __extends(AccountDepartment, _super);
    /**
     * [constructor: This function sets the name of the department by calling super() function ]
     * @param {string} name: [This is the name of the department]
     */
    function AccountDepartment(name) {
        return _super.call(this, name) || this;
    }
    /**
     * [getName: This function returns the name of the department]
     * no parameters
     * @return {string} [The name of the department is returned]
     */
    AccountDepartment.prototype.getName = function () {
        return this.name;
    };
    /**
     * [printMessage: This function prints the meeting details]
     * no parameters
     * no return value
     */
    AccountDepartment.prototype.printMeeting = function () {
        console.log('The meeting is on coming monday at 9 am.');
    };
    /**
     * [scheduleMeeting: This function schedules the meeting]
     * no parameters
     * no return value
     */
    AccountDepartment.prototype.scheduleMeeting = function () {
        console.log('The meeting is successfully scheduled.');
    };
    return AccountDepartment;
}(Department));
/**
 * @class MarketingDepartment
 * @extends Department
 */
var MarketingDepartment = /** @class */ (function (_super) {
    __extends(MarketingDepartment, _super);
    /**
     * [constructor: This function sets the name of the department by calling super() function ]
     * @param {string} name: [This is the name of the department]
     */
    function MarketingDepartment(name) {
        return _super.call(this, name) || this;
    }
    /**
    * [getName: This function returns the name of the department]
    * no parameters
    * @return {string} [The name of the department is returned]
    */
    MarketingDepartment.prototype.getName = function () {
        return this.name;
    };
    /**
     * [printMessage: This function prints the meeting details]
     * no parameters
     * no return value
     */
    MarketingDepartment.prototype.printMeeting = function () {
        console.log('The meeting is on every wednesday at 4 pm.');
    };
    /**
     * [getNumberOfEmployees: This function returns the number of people working in the department]
     * no parameters
     * @return {number} [The number of people working in the department is returned]
     */
    MarketingDepartment.prototype.getNumberOfEmployees = function () {
        return 27;
    };
    return MarketingDepartment;
}(Department));
console.log();
// Creating an instance of AccountDepartment class
var dept1 = new AccountDepartment('Accounts Department');
// Calling different methods in AccountDepartment class
dept1.printName();
dept1.scheduleMeeting();
dept1.printMeeting();
console.log();
// Creating an instance of MarketingDepartment class
var dept2 = new MarketingDepartment('Marketing Department');
// Calling different methods in MarketingDepartment class
dept2.printName();
console.log("The number of people working in this department is " + dept2.getNumberOfEmployees() + ".");
dept2.printMeeting();
