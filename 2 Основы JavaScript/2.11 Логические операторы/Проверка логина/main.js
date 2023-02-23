const login = prompt("Кто там?", "");

if (login == "Админ") {
  const password = prompt("Пароль?", "");

  if (password == "Я Главный") {
    alert("Здравствуйте!");
  } else if (password !== "Я Главный" && password !== null) {
    alert("Неверный пароль");
  } else {
    alert("Отменено");
  }
} else if (login !== "" && login !== null) {
  alert("Я вас не знаю");
} else {
  alert("Отменено");
}
