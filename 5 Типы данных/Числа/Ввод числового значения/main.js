const readNumber = () => {
  let a;
  do {
    a = prompt("Введите лицо","");
  } while(!isFinite(a) )

    if (a === null || a.trim()=== '') return null;

  return +a;
  
};

alert(readNumber());