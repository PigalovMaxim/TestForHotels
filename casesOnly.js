//1 задание
function getStringOfCities(citiesArr) {
    return citiesArr.join(",") + ".";
}
//2 задание
function roundToFive(number) {
    const remaining = Math.floor(number / 10);
    const unit = number % 10;
    if (unit < 5) return remaining * 10;
    else return (remaining + 1) * 10;
}
//3 задание
function getRightCase(count) {
    const word = "Компьютер";
    const secondVariandNums = [2, 3, 4];
    //проверка на слово Компьютер
    if (count >= 100) {
      if (count % 10 === 1 && count % 100 !== 11) return word;
    } else {
      if (count % 10 === 1 && count !== 11) return word;
    }
    //проверка на слово Компьютера
    if (secondVariandNums.includes(count % 10)) return word + "а";
    return word + "ов";
}
//4 задание
function isNumberSimple(number) {
    if (number === 0) return;
    const simpleNums = [2, 3, 5, 7, 11];
    const numbers = [4, 6, 8, 9];
    let isSimple = true;
    for (let i = 0; i < simpleNums.length; i++) {
      if (number === simpleNums[i]) break;
      if (number % simpleNums[i] === 0) isSimple = false;
    }
    numbers.forEach((num) => {
      if (number % num === 0) isSimple = false;
    });
    return isSimple;
}
//5 задание
function getCoincidences(arr1, arr2) {
    const сoincidencesOfArr1 = [];
    const tmpArr1 = [];
    arr1.forEach((element) => {
      if (!tmpArr1.includes(element)) tmpArr1.push(element);
      else if (!сoincidencesOfArr1.includes(element))
        сoincidencesOfArr1.push(element);
    });
    const сoincidencesOfArr2 = [];
    const tmpArr2 = [];
    arr2.forEach((element) => {
      if (!tmpArr2.includes(element)) tmpArr2.push(element);
      else if (!сoincidencesOfArr2.includes(element))
        сoincidencesOfArr2.push(element);
    });
    const answer = [];
    сoincidencesOfArr1.forEach((element) => {
      if (сoincidencesOfArr2.includes(element)) answer.push(element);
    });
    return answer;
}