// Хоёр тооны LCM олох функц
function lcm(a, b) {
    const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y)); // Хамгийн их ерөнхий хуваагч (GCD) функц
    return (a * b) / gcd(a, b); // LCM = (a * b) / GCD
}

// Массив дахь бүх тооны LCM олох функц
function arrayLCM(arr) {
    return arr.reduce((acc, num) => lcm(acc, num)); // Массивын бүх элементүүдийг дараалан LCM-ээр тооцоолох
}

// Хэрэглэгчээс 5 тоо авах
function getNumbersFromInput() {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
        const input = prompt(`Тоо ${i + 1}-г оруулна уу:`);
        const number = Number(input);
        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert("Зөвхөн тоо оруулна уу.");
            i--; // Буруу оруулга байвал дахин асуух
        }
    }
    return numbers;
}

// Функцийг ажиллуулах
function calculateArrayLCM() {
    const numbers = getNumbersFromInput();
    const result = arrayLCM(numbers);
    alert(`Хамгийн бага ерөнхий хуваагдагч (LCM): ${result}`);
}


