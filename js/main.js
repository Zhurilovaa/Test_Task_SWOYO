// alert("Hello again again!");

function ArrangeBox() {
  // 1) Создание внешнего контейнера для двух полей и блока кнопок
  this.arrange_box = document.createElement("main-control");
  // this.arrange_box.classList.add("arrange-box__control");
  // this.arrange_box.classList.add("main-control");
  // 2) Добавление 2х блоков полей и 3х блоков кнопок
  this.field = document.createElement("div");
  addClassForField(this.field);
  this.arrange_box.append(this.field);

  this.select_field = document.createElement("div");
  addClassForField(this.select_field);
  this.arrange_box.append(this.select_field);

  this.list_buttons_left = document.createElement("div");
  addClassForListButtons(this.list_buttons_left);
  this.arrange_box.append(this.list_buttons_left);

  this.list_buttons_right = document.createElement("div");
  addClassForListButtons(this.list_buttons_right);
  this.arrange_box.append(this.list_buttons_right);

  this.list_buttons_between = document.createElement("div");
  addClassForListButtons(this.list_buttons_between);
  this.arrange_box.append(this.list_buttons_between);

  // 3) Добавление списка в левое поле
  this.size_list = Math.floor(Math.random() * (21 - 5) + 5);
  this.list_elements = [];
  for (i = 0; i < this.size_list; i++) {
    let element = document.createElement("div");
    element.innerHTML = `<p>${i}</p>`;
    this.list_elements.push(element);
    this.field.append(this.list_elements[i]);
  }

  // n) Добавление на страницу ArrangeBox
  this.addToPage = function () {
    // Поиск места вставки
    let node_push = document.getElementsByClassName("arrange-box")[0];
    // Добавить его на страницу
    node_push.append(this.arrange_box);
  };

  function addClassForField(element) {
    element.classList.add("main-control__field");
    element.classList.add("list-field");
  }

  function addClassForListButtons(element) {
    element.classList.add("main-control__list-buttons");
    element.classList.add("list-buttons");
  }
}

const arrange_box_tests = [];
// for (let i = 0; i < 5; i++) {
//   let element = new ArrangeBox();
//   arrange_box_tests.push(element);
//   console.log(arrange_box_tests);
//   arrange_box_tests[i].addToPage();
// }
// const arrange_box_test = new ArrangeBox();
// arrange_box_test.addToPage();
// const arrange_box_test_2 = new ArrangeBox();
// arrange_box_test_2.addToPage();

function handleAddArrangeBoxOnPage() {
  let element = new ArrangeBox();
  arrange_box_tests.push(element);
  arrange_box_tests[arrange_box_tests.length - 1].addToPage();
}
