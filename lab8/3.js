// 3. Байшин 9 давхар, 3 орцтой, давхартаа 4 айлтай бол гараас өгсөн тоот нь хэддүгээр орцны хэддүгээр давхарын хэд дэх хаалга вэ


class Apartment {
    constructor() {
        this.entrances = 3;
        this.floors = 9;
        this.doorsPerFloor = 4;
    }

    doorChecker(number) {
        const apartmentsPerEntrance = this.floors * this.doorsPerFloor;

        if (number < 1 || number > this.entrances * apartmentsPerEntrance) {
            return "Буруу дугаар байна.";
        }

        const entrance = Math.ceil(number / apartmentsPerEntrance);
        const positionInEntrance = number - (entrance - 1) * apartmentsPerEntrance;
        const floor = Math.ceil(positionInEntrance / this.doorsPerFloor);
        const door = ((positionInEntrance - 1) % this.doorsPerFloor) + 1;

        return `${number}-р тоот нь ${entrance}-р орцны, ${floor}-р давхрын, ${door}-р хаалга байна.`;
    }
}
