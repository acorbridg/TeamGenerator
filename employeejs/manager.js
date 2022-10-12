const Employee = require ("./Employee.js");

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
                <li>Office: ${this.getOffice ()}</li>
            </ul>
        </div>
    </div>`
    }
}

module.exports = Manager;
// export default Manager;
