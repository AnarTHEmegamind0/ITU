// 1. Гараас өгсөн тооны цифрүүдийн нийлбэр нь палимдром мөн эсэхийг шалга
function isPalindrome(num) {
    const str = num.toString();
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

function checkPalindromeFromSum(number) {
    const sum = sumOfDigits(number);
    console.log("Цифрүүдийн нийлбэр:", sum);

    if (sum < 10) {
        alert("Нийлбэр нь нэг оронтой тоо тул палиндром биш байна.");
    } else if (isPalindrome(sum)) {
        alert("Нийлбэр нь палиндром мөн байна.");
    } else {
        alert("Нийлбэр нь палиндром биш байна.");
    }
}

