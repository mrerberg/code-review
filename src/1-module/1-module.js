const btn = document.querySelector(".start-game");

const months = {
  1: "Январь",
  2: "Февраль",
  3: "Март",
};

function month() {
  const userInput = Number(prompt("Введите число от 1-12"))

  const month = months[userInput];

  if (!month) {
    console.log("Месяц не найден");
    return;
  } 
  
  return month;
}
