// Task 1
// Напишіть функцію fn1, яка при натисканні кнопки виводить в .out-1 змінну a1.

let a1 = 8;

function fn1() {
  const out1 = document.querySelector(".out-1");
  out1.textContent = a1;
}

document.querySelector(".b-1").onclick = fn1;

// Task 2.

// Змінимо задачу 1. Зараз вона тільки виводить змінну в заздалегідь заданий блок.
// Давайте зробимо так, щоб функція була більш гнучкою.
// Нехай тепер функція fn2 повертає (return) змінну a2.
// Оскільки функція повертає змінну, то ім'я функції з дужками (виклик функції) можна вбудовувати у вирази.
// Зверніть увагу, як змінюється виклик функції тепер.

let a2 = 8;

function fn2() {
  return a2;
}

document.querySelector(".b-2").onclick = function () {
  document.querySelector(".out-2").textContent = fn2();
  console.log(5 + fn2()); // 13
  console.log(6 * fn2()); // 48
  console.log(fn2() * fn2() * fn2()); // 512
};

// Task 3.
// Наша попередня функція все ще сильно залежить від зовнішніх змінних.
// Давайте зробимо її більш універсальною.
// Нехай функція fn3 приймає 2 аргументи і повертає (return) їх добуток.
// Допишіть код функції так, щоб вона повертала добуток двох чисел, переданих їй як аргументи a, b.
// Протестуємо функцію на двох прикладах за допомогою кнопок .b-3-1 та .b-3-2.

function fn3(a, b) {
  return a * b;
}

document.querySelector(".b-3-1").onclick = function () {
  document.querySelector(".out-3-1").textContent = fn3(3, 4);
};

document.querySelector(".b-3-2").onclick = function () {
  document.querySelector(".out-3-2").textContent = fn3(5, 6);
};

// Task 4
// Напишіть функцію fn4, яка приймає ваш рік народження та обчислює (повертає) ваш вік.

function fn4(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

document.querySelector(".b-4").onclick = function () {
  const out4 = document.querySelector(".out-4");
  out4.textContent = fn4(2003);
};

// Task 5
// Напишіть функцію fn5, яка приймає ваше ім'я як параметр і повертає (return) кількість символів у ньому,
// де name — прийняте як параметр ім'я. Довжину (кількість символів) можна порахувати, використовуючи властивість length.

function fn5(name) {
  return name.length;
}

document.querySelector(".b-5").onclick = function () {
  const out5 = document.querySelector(".out-5");
  out5.textContent = fn5("Polina");
};

// Task 6
// Напишіть функцію fn6, яка приймає 2 числа і повертає випадкове ціле число від першого до другого прийнятого параметра.
// Увага, це перша задача, рішення якої потрібно знайти в Google!

function fn6(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector(".b-6").onclick = function () {
  const out6 = document.querySelector(".out-6");
  out6.textContent = fn6(1, 10);
};

// Task 7
// Напишіть функцію fn7, яка повертає випадковий колір у форматі rgb(x,y,z) (рядок).
// Де x, y, z — випадкові числа в діапазоні [0, 255].
// отже, одна зі складних задач. Нам потрібно
// зробити такий рядок
// rgb(33,123,255) - числа можуть бути будь-які від 0 до 255
// без пробілів, через коми 33,123,255
// у вас є функція fn6, яка може генерувати випадкові цілі числа в потрібному діапазоні.
// давайте скористаємося нею. Просто запустимо її тричі всередині рядка нижче
// return `rgb(${t6(0,255)}....допишіть самі

function fn7() {
  return `rgb(${fn6(0, 255)},${fn6(0, 255)},${fn6(0, 255)})`;
}

document.querySelector(".b-7").onclick = function () {
  const out7 = document.querySelector(".out-7");
  const color = fn7();
  out7.textContent = color;
  out7.style.backgroundColor = color;
};

//Task 8
// Напишіть функцію fn8, яка приймає рядок як параметр і повертає
// результат з очищеними пробілами на початку і в кінці рядка. Тобто
// приймає _hello_ (де знак _ символізує пробіл), а повертає hello. Для
// видалення пробілів використовуйте trim().

function fn8(str) {
  return str.trim();
}

document.querySelector(".b-8").onclick = function () {
  const testString = "   hello   ";
  console.log(fn8(testString));
};

//Task 9
// Напишіть функцію fn9, яка приймає число і повертає true, якщо число
// парне, і false, якщо непарне.

function fn9(num) {
  return num % 2 === 0;
}

document.querySelector(".b-9").onclick = function () {
  const out9 = document.querySelector(".out-9");
  const testNumber = 7;
  out9.textContent = fn9(testNumber);
  console.log(fn9(testNumber));
};

//Task 10
// Створіть функцію fn10, яка приймає 2 числа і повертає більше з них. У
// разі рівності — перше.

function fn10(a, b) {
  return a >= b ? a : b;
}

document.querySelector(".b-10").onclick = function () {
  const out10 = document.querySelector(".out-10");
  out10.textContent = fn10(5, 8);
  console.log(fn10(5, 8));
};
