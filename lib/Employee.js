class Employee {
    //name, id, email
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //returns employee's name
    getName() {
        return this.name;
    }

    //returns employee's id
    getId() {
        return this.id;
    }

    //returns employee's email
    getEmail(){
        return this.email;
    }

    //returns employee's default role
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;