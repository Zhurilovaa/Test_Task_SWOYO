// alert("Hello again again!");

function ArrangeBox() {
  this.elements_for_move = [];
  // 1) Создание внешнего контейнера для двух полей и блока кнопок
  this.arrange_box = document.createElement("main-control");
  // 2) Добавление 2х блоков полей и 3х блоков кнопок
  this.field = document.createElement("field");
  this.arrange_box.append(this.field);

  this.input_search_field = document.createElement("input");
  this.input_search_field.type = "search";
  this.input_search_field.placeholder = "search...";
  this.input_search_field.classList.add("input-search");
  this.input_search_field.oninput = function () {
    const filter_search =
      this.parentNode.childNodes[2].querySelectorAll("list-element");
    // 1) Значение input не пусто
    if (this.value) {
      for (let i = 0; i < filter_search.length; i++) {
        if (filter_search[i].firstChild.firstChild.data !== this.value) {
          filter_search[i].classList.add("not-search");
        } else {
          filter_search[i].classList.remove("not-search");
        }
      }
    } else {
      // Возвращаем все значения на место
      for (let i = 0; i < filter_search.length; i++) {
        if (filter_search[i].firstChild.firstChild.data !== this.value) {
          filter_search[i].classList.remove("not-search");
        }
      }
    }
  };

  this.select_input_search_field = document.createElement("input");
  this.select_input_search_field.type = "search";
  this.select_input_search_field.placeholder = "search...";
  this.select_input_search_field.classList.add("input-search");

  this.select_input_search_field.oninput = function () {
    const filter_search =
      this.parentNode.childNodes[2].querySelectorAll("list-element");
    console.log(filter_search);
    // 1) Значение input не пусто
    if (this.value) {
      for (let i = 0; i < filter_search.length; i++) {
        if (filter_search[i].firstChild.firstChild.data !== this.value) {
          filter_search[i].classList.add("not-search");
        } else {
          filter_search[i].classList.remove("not-search");
        }
      }
    } else {
      // Возвращаем все значения на место
      for (let i = 0; i < filter_search.length; i++) {
        if (filter_search[i].firstChild.firstChild.data !== this.value) {
          filter_search[i].classList.remove("not-search");
        }
      }
    }
  };

  this.select_field = document.createElement("field");
  this.select_field.classList.add("selected");
  this.arrange_box.append(this.select_field);

  this.list_buttons_between = document.createElement("btn-for-field");
  this.list_buttons_between.classList.add("btn-between");
  this.arrange_box.append(this.list_buttons_between);

  this.list_buttons_left = document.createElement("btn-for-field");
  this.field.append(this.list_buttons_left);

  this.list_buttons_right = document.createElement("btn-for-field");
  this.select_field.append(this.list_buttons_right);

  // 3) Добавим кнопки
  const titleBtn = [
    [`/images/up-arrow-one.svg`, "Переместить элемент вверх на одну позицию"],
    [`/images/up-arrow-double.svg`, "Переместить элементы в начало списка"],
    [`/images/down-arrow-double.svg`, "Переместить элементы в конец списка"],
    [`/images/down-arrow-one.svg`, "Переместить элемент вниз на одну позицию"],
  ];
  for (let title of titleBtn) {
    this.list_buttons_left.append(createButton(title));
    this.list_buttons_right.append(createButton(title));
  }

  const titleBetweenBtn = [
    [`/images/right-arrow-one.svg`, "Переместить элементы вправо"],
    [`/images/right-arrow-double.svg`, "Переместить все элементы вправо"],
    [`/images/left-arrow-double.svg`, "Переместить все элементы влево"],
    [`/images/left-arrow-one.svg`, "Переместить элементы влево"],
  ];
  for (let title of titleBetweenBtn) {
    this.list_buttons_between.append(createButton(title));
  }

  // 4) Добавим непосредственно поле со списком
  this.field_list = document.createElement("list");
  this.field.append(this.field_list);
  this.field_list.innerHTML = `<div class="list__header">Available</div>`;

  this.field_list.append(this.input_search_field);

  this.select_field_list = document.createElement("list");
  this.select_field.append(this.select_field_list);
  this.select_field_list.innerHTML = `<div class="list__header">Selected</div>`;

  this.select_field_list.append(this.select_input_search_field);

  this.list_of_elements = document.createElement("list-of-elements");
  this.field_list.append(this.list_of_elements);

  this.select_list_of_elements = document.createElement("list-of-elements");
  this.select_field_list.append(this.select_list_of_elements);

  // 5) Добавление списка в левое поле
  this.size_list = Math.floor(Math.random() * (51 - 5) + 5);
  for (i = 0; i < this.size_list; i++) {
    let element = document.createElement("list-element");
    element.innerHTML = `<p>${i}</p>`;
    element.tabIndex = i;
    element.onclick = function () {
      element.classList.contains("focused")
        ? element.classList.remove("focused")
        : element.classList.add("focused");
    };
    this.list_of_elements.append(element);
  }

  // 6) Обработчики кнопок
  this.list_buttons_left.children[0].onclick = function () {
    const select =
      this.parentNode.parentNode.childNodes[1].childNodes[2].querySelectorAll(
        "list-element.focused"
      );
    if (select.length === 1) {
      if (select[0].previousSibling) {
        select[0].parentNode.insertBefore(select[0], select[0].previousSibling);
      }
    }
  };

  this.list_buttons_right.children[0].onclick = function () {
    const select =
      this.parentNode.parentNode.childNodes[1].childNodes[2].querySelectorAll(
        "list-element.focused"
      );
    if (select.length === 1) {
      if (select[0].previousSibling) {
        select[0].parentNode.insertBefore(select[0], select[0].previousSibling);
      }
    }
  };

  this.list_buttons_between.children[0].onclick = function () {
    const select =
      this.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[2].querySelectorAll(
        "list-element.focused"
      );
    if (select.length !== 0) {
      for (elem of select) {
        elem.classList.remove("focused");
        this.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[2].append(
          elem
        );
      }
    }
  };

  this.list_buttons_left.children[3].onclick = function () {
    const select =
      this.parentNode.parentNode.childNodes[1].childNodes[2].querySelectorAll(
        "list-element.focused"
      );
    if (select.length === 1) {
      if (select[0].nextSibling) {
        select[0].parentNode.insertBefore(select[0].nextSibling, select[0]);
      }
    }
  };

  this.list_buttons_right.children[3].onclick = function () {
    const select =
      this.parentNode.parentNode.childNodes[1].childNodes[2].querySelectorAll(
        "list-element.focused"
      );
    if (select.length === 1) {
      if (select[0].nextSibling) {
        select[0].parentNode.insertBefore(select[0].nextSibling, select[0]);
      }
    }
  };

  this.list_buttons_between.children[3].onclick = function () {
    const select =
      this.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[2].querySelectorAll(
        "list-element.focused"
      );
    if (select.length !== 0) {
      for (elem of select) {
        elem.classList.remove("focused");
        this.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[2].append(
          elem
        );
      }
    }
  };

  this.list_buttons_left.children[1].onclick = function () {
    const select =
      this.parentNode.parentNode.childNodes[1].childNodes[2].querySelectorAll(
        "list-element.focused"
      );
    for (let i = 0; i < select.length; i++) {
      select[0].parentNode.insertBefore(
        select[i],
        select[0].parentNode.children[i]
      );
    }
  };

  this.list_buttons_right.children[1].onclick = function () {
    const select =
      this.parentNode.parentNode.childNodes[1].childNodes[2].querySelectorAll(
        "list-element.focused"
      );
    for (let i = 0; i < select.length; i++) {
      select[0].parentNode.insertBefore(
        select[i],
        select[0].parentNode.children[i]
      );
    }
  };

  this.list_buttons_between.children[1].onclick = function () {
    const select =
      this.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[2].querySelectorAll(
        "list-element"
      );
    if (select.length !== 0) {
      for (elem of select) {
        elem.classList.remove("focused");
        this.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[2].append(
          elem
        );
      }
    }
  };

  this.list_buttons_left.children[2].onclick = function () {
    let select =
      this.parentNode.parentNode.childNodes[1].childNodes[2].querySelectorAll(
        "list-element.focused"
      );
    for (let i = 1; i < select.length + 1; i++) {
      select[0].parentNode.insertBefore(
        select[i - 1],
        select[0].parentNode.children[-i]
      );
    }
  };

  this.list_buttons_right.children[2].onclick = function () {
    const select =
      this.parentNode.parentNode.childNodes[1].childNodes[2].querySelectorAll(
        "list-element.focused"
      );
    for (let i = 1; i < select.length + 1; i++) {
      select[0].parentNode.insertBefore(
        select[i - 1],
        select[0].parentNode.children[-i]
      );
    }
  };

  this.list_buttons_between.children[2].onclick = function () {
    const select =
      this.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[2].querySelectorAll(
        "list-element"
      );
    if (select.length !== 0) {
      for (elem of select) {
        elem.classList.remove("focused");
        this.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[2].append(
          elem
        );
      }
    }
  };

  // n) Добавление на страницу ArrangeBox
  this.addToPage = function () {
    // Поиск места вставки
    let node_push = document.getElementsByClassName("arrange-box")[0];
    // Добавить его на страницу
    node_push.append(this.arrange_box);
  };

  function createButton(titleBtn) {
    let new_button = document.createElement("button");
    new_button.classList.add("btn-list");
    new_button.innerHTML = `<img src="${titleBtn[0]}" alt="${titleBtn[1]}"></img>`;
    return new_button;
  }
}

const arrange_box_tests = [];
function handleAddArrangeBoxOnPage() {
  let element = new ArrangeBox();
  arrange_box_tests.push(element);
  arrange_box_tests[arrange_box_tests.length - 1].addToPage();
}
