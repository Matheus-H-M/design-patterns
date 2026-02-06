// Employee class represents an element that can be visited
class Employee {
    // Constructor initializes the employee's name and role
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    // accept() receives a visitor and lets it operate on this object
    accept(visitor) {
        visitor.visitEmployee(this);
    }
}

// ReportVisitor class represents a visitor
// It defines operations that can be performed on Employee objects
class ReportVisitor {
    // visitEmployee() is called when an Employee accepts this visitor
    visitEmployee(e) {
        // Logs the employee's name and role to the console
        console.log(`${e.name} - ${e.role}`);
    }
}

// Create a list of Employee objects
[
    new Employee("Maria", "Gerente"),
    new Employee("João", "Analista")
]
// For each employee, create a ReportVisitor and apply it
.forEach(emp => emp.accept(new ReportVisitor()));
