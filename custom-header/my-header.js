function addHeader() {
  console.log("Add Heder function!");
  // Создать новый тег my-header
  let new_header = document.createElement("my-header");
  new_header.innerHTML =
    "<strong>Всем приветик!</strong> Я тут новенький если что))).";
  // ради прикола генерим цвет текста
  //let color = getRandomColor();
  //new_header.style.color = color;

  // Поиск места вставки
  let node_push = document.getElementsByClassName("main-content")[0];
  // Добавить его на страницу
  node_push.append(new_header);
  console.log("Add Heder function end!");
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// addHeader();
