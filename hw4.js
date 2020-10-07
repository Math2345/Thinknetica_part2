function averageSalaryEmp(employees) {

    const listSalaries = employ => employ.salary;
    const averageSalary = (acc, salary) => acc + salary;

    // проверка входных данных
    if (employees && typeof employees === "object") {
        const sumSalaries = employees.map(listSalaries).reduce(averageSalary, 0);

        return Math.round(sumSalaries/employees.length);
    }
    else {
        return false;
    }
}

function sortSalaries(employees) {

    // сортировка по возрастанию
    const sortSalaries = (employ1, employ2) => employ1.salary - employ2.salary;

    // проверка входных данных
    if (employees && typeof employees === "object") {
       return employees.sort(sortSalaries)
    }
    else {
        return false;
    }
}

function getListEmployees(employees) {
    const filterEmployees = employ => employ.salary > 4500 && employ.age > 25;

    // проверка входных данных
    if (employees && typeof employees === "object") {
        return employees.filter(filterEmployees);
    }
    else {
        return false;
    }
}


const employees = [
    {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 54,
        salary: 10000,
        position: 'Architect'
    },
    {
        firstName: 'Gustav',
        lastName: 'Andersen',
        age: 31,
        salary: 5000,
        position: 'Software engineer'
    },
    {
        firstName: 'Liz',
        lastName: 'Taylor',
        age: 20,
        salary: 7000,
        position: 'Manager'
    }
]

console.log(averageSalaryEmp(employees));
console.log(sortSalaries(employees));
console.log(getListEmployees(employees))