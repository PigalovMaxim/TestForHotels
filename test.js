//1 задание  (потрачено 1.5 минуты):
const inp1 = document.getElementById("first");
const btn1 = document.getElementById("firstSubmit");
const answerBox1 = document.getElementById("answer1");

btn1.addEventListener("click", () => {
  console.clear();
  const result = getStringOfCities(inp1.value.trim().split(" "));
  answerBox1.innerHTML = "Ответ: " + result;
  console.log(result);
});

function getStringOfCities(citiesArr) {
  return citiesArr.join(",") + ".";
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//2 задание (потрачено 5.5 минут)
const inp2 = document.getElementById("second");
const btn2 = document.getElementById("secondSubmit");
const answerBox2 = document.getElementById("answer2");

btn2.addEventListener("click", () => {
  console.clear();
  const result = parseFloat(inp2.value);
  answerBox2.innerHTML =
    "Округляем " + result + ", получем " + roundToFive(result);
  console.log(roundToFive(result));
});

function roundToFive(number) {
  const remaining = Math.floor(number / 10); // получаем всё число, кроме единиц (15.6 получили 1)
  const unit = number % 10; // получаем единицы (15.6 получили 5.6)
  if (unit < 5) return remaining * 10;
  else return (remaining + 1) * 10;
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//3 задание (потрачено 9 минут)
const inp3 = document.getElementById("third");
const btn3 = document.getElementById("thirdSubmit");
const answerBox3 = document.getElementById("answer3");

btn3.addEventListener("click", () => {
  console.clear();
  const num = parseInt(inp3.value);
  answerBox3.innerHTML = "Результат: <br/>";
  for (let i = 0; i < num; i++) {
    const count = Math.round(Math.random() * 10000);
    answerBox3.innerHTML += count + " " + getRightCase(count) + "<br/>";
    console.log(count + " " + getRightCase(count));
  }
});

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
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//4 задание (потрачено 12 минут)
const inp4 = document.getElementById("fourth");
const btn4 = document.getElementById("fourthSubmit");
const answerBox4 = document.getElementById("answer4");

btn4.addEventListener("click", () => {
  console.clear();
  const num = parseInt(inp4.value);
  answerBox4.innerHTML = "Результат: <br/>";
  for (let i = 0; i < num; i++) {
    const number2 = Math.round(Math.random() * 10000);
    let answer = "";
    if (isNumberSimple(number2)) answer = "Число " + number2 + " простое";
    else answer = "Число " + number2 + " составное";
    answerBox4.innerHTML += answer + "<br/>";
    if (isNumberSimple(number2)) console.log("Число " + number2 + " простое");
    else console.log("Число " + number2 + " составное");
  }
});

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
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//5 задание (потрачено 12 минут)
const inp5 = document.getElementById("fifth");
const secondInp5 = document.getElementById("fifth2");
const btn5 = document.getElementById("fifthSubmit");
const answerBox5 = document.getElementById("answer5");

btn5.addEventListener("click", () => {
  console.clear();
  let numberArr1 = inp5.value.trim().split(" ");
  numberArr1 = numberArr1.map(num => Number(num));
  let numberArr2 = secondInp5.value.trim().split(" ");
  numberArr2 = numberArr2.map(num => Number(num));
  answerBox5.innerHTML = "Результат: [";
  answerBox5.innerHTML += getCoincidences(numberArr1, numberArr2).join(', ') + ']';
  console.log(getCoincidences(numberArr1, numberArr2));
});

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
