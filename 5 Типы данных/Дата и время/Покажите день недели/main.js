const getWeekDay = (date) => {
  let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return days[date.getDay()];
}

let date = new Date();

console.log(getWeekDay(date));
