var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + user.fullName;
}
var user = new Student("Bob", "R", "Bobson");
document.body.innerHTML = greeter(user);
//# sourceMappingURL=app.js.map