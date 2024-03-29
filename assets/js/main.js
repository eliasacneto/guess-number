const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (
    Number(inputNumber.value) > 10 ||
    Number(inputNumber.value < 0) ||
    Number(inputNumber.value == "")
  ) {
    alert("Insira um número maior que 0 ou menor que 10!");
  } else {
    xAttempts++;
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    screen2.querySelector(
      "h2"
    ).innerText = `Acertou em ${xAttempts} tentativas!`;
  }

  inputNumber.value = "";
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
