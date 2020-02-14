class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius
    }

    set radius(newRadius) {
        this._radius = newRadius
    }

    get diameter() {
        return this._radius * 2;
    }

    square() {
        return Math.PI * this._radius * this._radius
    }

    perimeter() {
        return Math.PI * 2 * this._radius
    }
}

let circle = new Circle(8);

console.log(`Радиус: ${circle._radius}`)
console.log(`Диаметр: ${circle.diameter}`)
console.log(`Площадь: ${circle.square().toFixed(2)}`)
console.log(`Периметр: ${circle.perimeter().toFixed(2)}`)

/* Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

поле, хранящее радиус окружности;
get-свойство, возвращающее радиус окружности;
set-свойство, устанавливающее радиус окружности;
get-свойство, возвращающее диаметр окружности;
метод, вычисляющий площадь окружности;
метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов. */