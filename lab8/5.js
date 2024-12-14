// 5. Вэб сайтруу өглөө ороход гараас өгсөн тооны 2 зэрэгийг, орой ороход гараас өгсөн тооны язгуурыг ол.
function calculateBasedOnTime(number) {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
        const squared = Math.pow(number, 2);
        alert(`Өглөөний тооцоолол: ${number}-ын 2 зэрэг = ${squared}`);
    } else {
        const squareRoot = Math.sqrt(number);
        alert(`Оройн тооцоолол: ${number}-ын язгуур = ${squareRoot}`);
    }
}
