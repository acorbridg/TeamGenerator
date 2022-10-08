import Employee from "./Employee.js";

class Engineer extends Employee {
    constructor(id,name,email,github) {
        super(id,name,email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

export default Engineer;
