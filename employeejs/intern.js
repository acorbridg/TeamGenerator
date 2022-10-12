const Employee = require ("./Employee.js");

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
    render() {
        return `<div class="card employee">
        <div class="card-header">
            <h1 class="title">${this.getName()}</h1>
            <h2 class="title"><i class="fas fa-mug-hot"></i>${this.getRole()}</h2>
        </div>
        <div class="card-body">
            <ul class="information">
                <li>ID: ${this.getId()}</li>
                <li>Email: <a href="mailto:email address">${this.getEmail()}</a></li>
                <li>School: ${this.getSchool()}</li>
            </ul>
        </div>
    </div>`
    }
}

module.exports = Intern;
// export default Intern;
