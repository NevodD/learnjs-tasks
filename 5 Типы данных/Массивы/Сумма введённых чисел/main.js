const sumInput = () => {
  let numbers = [];

  while (true) {
    let value = prompt("Введите число", "");
    if (value.trim() === "" || value === null || !isFinite(value)) {
      if (numbers.length == 0) {
        return "";
      } else {
        break;
      }
    }

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

alert(sumInput());
