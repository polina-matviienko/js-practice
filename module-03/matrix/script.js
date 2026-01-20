// Task 1

document.querySelector(".b-1").onclick = function () {
  const out1 = document.querySelector(".out-1");
  let result = "";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      result += "*";
    }
    result += "_";
  }

  out1.textContent = result;
};

// Task 2

document.querySelector(".b-2").onclick = function () {
  const out2 = document.querySelector(".out-2");
  let result = "";

  for (let i = 1; i <= 3; i++) {
    result += i + "<br>";
    for (let j = 0; j < 3; j++) {
      result += "*_";
    }
    result += "<br>";
  }

  out2.innerHTML = result;
};

// Task 3

document.querySelector(".b-3").onclick = function () {
  const out3 = document.querySelector(".out-3");
  let result = "";

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      result += "*_";
    }
    result += "<br>";
  }

  out3.innerHTML = result;
};

// Task 4

document.querySelector(".b-4").onclick = function () {
  const out4 = document.querySelector(".out-4");
  let result = "";

  for (let i = 1; i <= 3; i++) {
    result += i + "_ ";
    for (let j = 1; j <= 5; j++) {
      result += j + "*";
    }
    result += " ";
  }

  out4.textContent = result;
};

// Task 5

document.querySelector(".b-5").onclick = function () {
  const out5 = document.querySelector(".out-5");
  let result = "";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++) {
      result += j % 2 === 0 ? "1" : "0";
    }
    result += "<br>";
  }

  out5.innerHTML = result;
};

// Task 6

document.querySelector(".b-6").onclick = function () {
  const out6 = document.querySelector(".out-6");
  let result = "";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 6; j++) {
      if (j === 0 || j === 3) {
        result += "1";
      } else if (j === 1 || j === 4) {
        result += "0";
      } else if (j === 2 || j === 5) {
        result += "x";
      }
    }
    result += "<br>";
  }

  out6.innerHTML = result;
};

// Task 7

document.querySelector(".b-7").onclick = function () {
  const out7 = document.querySelector(".out-7");
  let result = "";

  for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    result += "<br>";
  }

  out7.innerHTML = result;
};

// Task 8

document.querySelector(".b-8").onclick = function () {
  const out8 = document.querySelector(".out-8");
  let result = "";

  for (let i = 5; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    result += "<br>";
  }

  out8.innerHTML = result;
};

// Task 9

document.querySelector(".b-9").onclick = function () {
  const out9 = document.querySelector(".out-9");
  let result = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      result += j + "_";
    }
    result += "<br>";
  }

  out9.innerHTML = result;
};

// Task 10

document.querySelector(".b-10").onclick = function () {
  const out10 = document.querySelector(".out-10");
  let result = "";
  let counter = 1;

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 10; j++) {
      result += (counter < 10 ? "0" : "") + counter + "_";
      counter++;
    }
    result += "<br>";
  }

  out10.innerHTML = result;
};
