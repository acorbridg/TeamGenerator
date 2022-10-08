import Employee from "./Employee";

class Manager extends Employee {
    constructor(id,name,email,office) {
        super(id,name,email); 
        this.office = office;
    }

    getOffice() {
        return this.office
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
