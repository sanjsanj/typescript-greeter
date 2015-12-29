class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greeter(person: Person) {
    return "Hello, " + user.fullName;
}

var user = new Student("Bob", "R", "Bobson");

document.body.innerHTML = greeter(user);