class Employee {
    constructor(id,name,email) {
        this.id = id;
        this.name = name;
        this.email = email; 
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
        //grab the name information
    }

    getEmail() {
        return this.email;
        //grab the email information
    }

    getRole() {
        return "Employee";
    }
}

// module.exports = Employee;
export default Employee