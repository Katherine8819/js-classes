class Employee {
    constructor(name, age, position, yearsOfWork) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.yearsOfWork = yearsOfWork;
    }
}

let employeeArray = [
    new Employee('Bob', 25, 'IT Analyst', 2),
    new Employee('Olivia', 22, 'Designer', 1),
    new Employee('William', 26, 'Java Developer', 3),
    new Employee('James', 28, 'Network Engineer', 1),
    new Employee('Sophia', 21, 'Front-end Developer', 4),
    new Employee('Emma', 32, 'Project Manager', 6),
    new Employee('Benjamin', 28, 'Systems Administrator', 5),
    new Employee('Mason', 35, 'Back-end Developer', 8)
]

class EmpTable {
    constructor(array) {
        this.array = array;
    }

    getHtml() {
        let table = document.getElementById('table'),
            tbody = table.querySelector('tbody'),
            tr = ``;
        table.removeAttribute("hidden");

        for (let i = 0; i < this.array.length; i++) {
            tr = `
                <tr>
                    <td>${this.array[i].name}</td>
                    <td>${this.array[i].age}</td>
                    <td>${this.array[i].position}</td>
                    <td>${this.array[i].yearsOfWork}</td>
                </tr>`

            tbody.innerHTML = tbody.innerHTML + tr;
        }
    }
}

let employee = new EmpTable(employeeArray)
employee.getHtml()

/*  Реализовать класс Employee, описывающий работника, и создать массив работников банка.

Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

Создать объект класса EmpTable и вывести на экран результат работы метода getHtml(). */