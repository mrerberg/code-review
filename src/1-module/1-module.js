const btn = document.querySelector(".start-game");


function getMonthByNumber() {
  const userInput = prompt("Введите число от 1-12");

  if (userInput == 1) {
    return "Январь";
  } else if (userInput == 2) {
    return "Февраль";
  } else if (userInput == 3) {
    return "Март";
  } else if (userInput == 4) {
    return "Апрель";
  } else if (userInput == 5) {
    return "Май";
  } else if (userInput == 6) {
    return "Июнь";
  } else if (userInput == 7) {
    return "Июль";
  } else if (userInput == 8) {
    return "Август";
  } else if (userInput == 9) {
    return "Сентябрь";
  } else if (userInput == 10) {
    return "Октябрь";
  } else if (userInput == 11) {
    return "Ноябрь";
  } else if (userInput == 12) {
    return "Декабрь";
  }

  console.log('Месяц не найден');
}
