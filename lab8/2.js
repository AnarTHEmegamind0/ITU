// 2. Чоно 25 км/ц хурдтай, туулай 18 км/ц хурдтай. Гараас өгсөн зайтай байхад хэдэн минут хэдэн секундын дараа гэхэд гүйцэх вэ

class Speed {
    constructor() {
        this.wolfSpeed = 25; // Чонын хурд (км/ц)
        this.rabbitSpeed = 18; // Туулайн хурд (км/ц)
    }

    timeToCatch(distance) {
        const timeInMinutes = (distance / (this.wolfSpeed - this.rabbitSpeed)) * 60;
        return timeInMinutes;
    }
}
