import Employee from "./Employee.js";

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

export default Manager;
