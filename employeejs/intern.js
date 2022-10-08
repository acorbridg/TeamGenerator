import Employee from "./Employee.js";

class Intern extends Employee{
    constructor(id,name,email,school) {
        super(id,name,email)
        this.school = school; 
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

export default Intern;
