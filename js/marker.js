class Marker {
    constructor(color, amount) {
        this.color = color;
        this.amount = amount;
    }

    print(line) {
        let content = document.getElementById('content');
        let message = document.getElementById('message')
        for (let i = 0; i < line.length; i++) {
            if (this.amount != 0) {
                content.innerHTML += line[i]
                content.style.color = this.color
                this.amount -= 0.5;

                if (line[i] == ' ') {
                    this.amount += 0.5;
                }

            } else {
                message.innerHTML += "...необходимо пополнить чернила."
                break
            }

        }
    }
}

class FilledMarker extends Marker {
    fill(amount) {
        if (amount >= 100) {
            amount = 100;
        } else {
            this.amount += amount;
        }
    }

}

let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`

let marker = new FilledMarker('green', 5);

marker.fill(2)

marker.print(text)


/* Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

поле, которое хранит цвет маркера;
поле, которое хранит количество чернил в маркере (в процентах);
метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

Продемонстрировать работу написанных методов.  */