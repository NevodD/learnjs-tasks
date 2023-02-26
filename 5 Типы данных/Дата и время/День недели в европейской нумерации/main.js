let date = new Date();

const getLocalDay = (date) => 
{

  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

console.log(getLocalDay(date));
