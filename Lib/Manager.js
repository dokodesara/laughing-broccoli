const Employee = require("./Employee")

class Menager extends Employee {
    constructor(name,id,email,officeNum){
        super(name,id,email);
        this.officeNum = officeNum;
    }
    getofficeNum() {
        return this.officeNum
    }
    getRole() {
        return 'Menager';
    }
}
module.export = Menager;