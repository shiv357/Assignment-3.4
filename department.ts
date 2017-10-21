/**
 * @class Department: Abstract
 */
abstract class Department {

    name: string;

    /**
     * [constructor: This function sets the name of the department ]
     * @param {string} name [This is the name of the department] 
     */
    constructor ( name: string ){
        this.name = name;
    }

    /**
     * [printName: This function prints the name of the department on cosole]
     * no parameters
     * no return value
     */
    printName(): void{
        console.log ( `The department name is ${this.name}` );
    }

    /**
     * [printMessage: This is an Abstract Class to implement meeting details]
     * no parameters
     * no return value
     */
    abstract printMeeting():void;

}

/**
 * @class AccountDepartment
 * @extends Department
 */
class AccountDepartment extends Department {

    /**
     * [constructor: This function sets the name of the department by calling super() function ]
     * @param {string} name: [This is the name of the department]
     */
    constructor ( name: string ) {
        super(name);
    }

    /**
     * [getName: This function returns the name of the department]
     * no parameters
     * @return {string} [The name of the department is returned]
     */
    getName(): string {
        return this.name;
    }

    /**
     * [printMessage: This function prints the meeting details]
     * no parameters
     * no return value
     */
    printMeeting(): void {
        console.log('The meeting is on coming monday at 9 am.');
    }

    /**
     * [scheduleMeeting: This function schedules the meeting]
     * no parameters
     * no return value
     */
    scheduleMeeting(): void {
        console.log('The meeting is successfully scheduled.');
    }

}

/**
 * @class MarketingDepartment
 * @extends Department
 */
class MarketingDepartment extends Department {

    /**
     * [constructor: This function sets the name of the department by calling super() function ]
     * @param {string} name: [This is the name of the department]
     */
    constructor ( name: string ) {
        super(name);
    }

     /**
     * [getName: This function returns the name of the department]
     * no parameters
     * @return {string} [The name of the department is returned]
     */
    getName(): string {
        return this.name;
    }

    /**
     * [printMessage: This function prints the meeting details]
     * no parameters
     * no return value
     */
    printMeeting(): void {
        console.log('The meeting is on every wednesday at 4 pm.');
    }

    /**
     * [getNumberOfEmployees: This function returns the number of people working in the department]
     * no parameters
     * @return {number} [The number of people working in the department is returned]
     */
    getNumberOfEmployees(): number {
        return 27;
    }

}

console.log();

// Creating an instance of AccountDepartment class
let dept1 = new AccountDepartment('Accounts Department');

// Calling different methods in AccountDepartment class
dept1.printName();
dept1.scheduleMeeting();
dept1.printMeeting();

console.log();

// Creating an instance of MarketingDepartment class
let dept2 = new MarketingDepartment('Marketing Department');

// Calling different methods in MarketingDepartment class
dept2.printName();
console.log(`The number of people working in this department is ${dept2.getNumberOfEmployees()}.`);
dept2.printMeeting();
