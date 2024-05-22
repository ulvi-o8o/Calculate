const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const result = document.querySelector(".result");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");
const btnMult = document.querySelector(".btn-mult");
const btnDevide = document.querySelector(".btn-devide");

btnPlus.addEventListener("click", Sum);

function Sum() {
  if (input1.value === "" || input2.value === "") {
    alert("Please enter a number...");
    return; // Eğer bir değer eksikse işlemi durdur
  }
  result.textContent = Number(input1.value) + Number(input2.value);
}

btnMinus.addEventListener("click", Minus);

function Minus() {
  if (input1.value === "" || input2.value === "") {
    alert("Please enter a number...");
    return;
  }
  result.textContent = Number(input1.value) - Number(input2.value);
}

btnMult.addEventListener("click", Mult);

function Mult() {
  if (input1.value === "" || input2.value === "") {
    alert("Please enter a number...");
    return;
  }
  result.textContent = Number(input1.value) * Number(input2.value);
}

btnDevide.addEventListener("click", Devide);

function Devide() {
  if (input1.value === "" || input2.value === "") {
    alert("Please enter a number...");
    return;
  }
  result.textContent = Number(input1.value) / Number(input2.value);
}
