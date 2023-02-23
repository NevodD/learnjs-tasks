let toNumber = 10;

toNumber = Math.round(toNumber);

if (toNumber >= 0 && toNumber <= 2) {
  console.log(toNumber);
} else if (toNumber < 0) {
  console.log("Число должно быть больше нуля");
} else {
  outer: for (let i = 2; i <= toNumber; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        continue outer;
      }
    }
    console.log(i);
  }
}
