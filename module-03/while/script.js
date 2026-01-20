// Task 1

document.querySelector(".b-1").onclick = function () {
  const out1 = document.querySelector(".out-1");
  let result = "";
  let i = 1;

  while (i <= 50) {
    result += i + "_";
    i++;
  }

  out1.textContent = result;
};

// Task 2

document.querySelector(".b-2").onclick = function () {
  const out2 = document.querySelector(".out-2");
  let result = "";
  let i = 2;

  while (i <= 46) {
    result += i + "_";
    i += 2;
  }

  out2.textContent = result;
};

// Task 3

document.querySelector(".b-3").onclick = function () {
  const out3 = document.querySelector(".out-3");
  let result = "";
  let i = 25;

  while (i >= 7) {
    result += i + "_";
    i--;
  }

  out3.textContent = result;
};

// Task 4

document.querySelector(".b-4").onclick = function () {
  const out4 = document.querySelector(".out-4");
  let result = "";
  let i = 77;

  while (i >= 35) {
    result += i + "_";
    i -= 3;
  }

  out4.textContent = result;
};

// Task 5

document.querySelector(".b-5").onclick = function () {
  const out5 = document.querySelector(".out-5");
  let result = "";
  let i = 1;

  while (i <= 17) {
    if (i % 2 === 0) {
      result += i + "_**";
    } else {
      result += i + "_*";
    }
    i++;
  }

  out5.textContent = result;
};

// Task 6

function fn6() {
  const out = document.querySelector(".out-6");
  let res = "";
  let i = 0;

  while (i < 3) {
    res += "******<br>";
    i++;
  }

  out.innerHTML = res;
}

document.querySelector(".b-6").onclick = fn6;

// Task 7

function f7() {
  const out = document.querySelector(".out-7");
  let num = +document.querySelector(".i-7").value;
  let result = "";

  while (num >= 0) {
    result += num + "_";
    num--;
  }

  out.textContent = result;
}

document.querySelector(".b-7").addEventListener("click", f7);

// Task 8

function f8() {
  const out = document.querySelector(".out-8");
  let start = +document.querySelector(".i-81").value;
  const end = +document.querySelector(".i-82").value;
  let result = "";

  while (start <= end) {
    result += start + "_";
    start++;
  }

  out.textContent = result;
}

document.querySelector(".b-8").addEventListener("click", f8);

// Task 9

function f9() {
  const out = document.querySelector(".out-9");
  let a = +document.querySelector(".i-91").value;
  let b = +document.querySelector(".i-92").value;
  let result = "";

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  let i = a;
  while (i <= b) {
    result += i + "_";
    i++;
  }

  out.textContent = result;
}

document.querySelector(".b-9").addEventListener("click", f9);

// Task 10

function fn10() {
  const out = document.querySelector(".out-10");
  let result = "";
  let year = 1950;

  while (year <= 1966) {
    result += year + "_";
    year += 2;
  }

  out.textContent = result;
}

document.querySelector(".b-10").addEventListener("click", fn10);

// Task 11

function fn11() {
  const out = document.querySelector(".out-11");
  const divs = document.querySelectorAll(".div-11");
  let i = 0;
  let result = "";

  while (i < divs.length) {
    result += divs[i].textContent + "_";
    i++;
  }

  out.textContent = result;
}

document.querySelector(".b-11").addEventListener("click", fn11);

// Task 12

function fn12() {
  const divs = document.querySelectorAll(".div-12");
  let i = 0;

  while (i < divs.length) {
    divs[i].style.background = "orange";
    i++;
  }
}

document.querySelector(".b-12").addEventListener("click", fn12);

// Task 13

function fn13() {
  const inputs = document.querySelectorAll(".i-13");
  let i = 0;

  while (i < inputs.length) {
    inputs[i].value = i + 1;
    i++;
  }
}

document.querySelector(".b-13").addEventListener("click", fn13);

// Task 14

function fn14() {
  const out = document.querySelector(".out-14");
  const radios = document.querySelectorAll(".i-14");
  let i = 0;

  while (i < radios.length) {
    if (radios[i].checked) {
      out.textContent = radios[i].value;
      break;
    }
    i++;
  }
}

document.querySelector(".b-14").addEventListener("click", fn14);

// Task 15

function fn15() {
  const out = document.querySelector(".out-15");
  let result = "";
  const sequence = [77, 88, 99];
  let i = 0;

  while (i < 3) {
    let j = 0;
    while (j < sequence.length) {
      result += sequence[j] + "_";
      j++;
    }
    i++;
  }

  out.textContent = result;
}

document.querySelector(".b-15").addEventListener("click", fn15);
