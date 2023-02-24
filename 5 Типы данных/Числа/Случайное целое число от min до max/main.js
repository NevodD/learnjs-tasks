const randomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
}

console.log( randomInteger(1, 5) );
console.log( randomInteger(2, 5) );
console.log( randomInteger(3, 5) );