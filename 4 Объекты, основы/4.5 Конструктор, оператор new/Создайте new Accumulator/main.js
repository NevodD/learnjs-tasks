function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += +prompt('Введите число', '')
  };
}

let accumulator = new Accumulator(1);

accumulator.read(); 
accumulator.read();

alert(accumulator.value); 