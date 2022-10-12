const Employee = require ("./Employee.js");

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
                <li>Github: ${this.getGithub ()}</li>
            </ul>
        </div>
    </div>`
    }
}

module.exports = Engineer;
// export default Engineer;
