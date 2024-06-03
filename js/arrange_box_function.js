// Функция конструктор для ArrangeBox
export function ArrangeBox() {
	this.elements_for_move = [];
	// Создание внешнего контейнера для двух полей и блока кнопок
	this.arrange_box = document.createElement('main-control');

	// Блок списка Available
	this.field = document.createElement('field');
	this.arrange_box.append(this.field);

	// Поле поиска для списка Available
	this.input_search_field = document.createElement('input');
	this.input_search_field.type = 'search';
	this.input_search_field.placeholder = 'search...';
	this.input_search_field.classList.add('input-search');
	this.input_search_field.oninput = function () {
		const filter_search =
		this.parentNode.childNodes[2].querySelectorAll('list-element');
		if (this.value) {
			for (let i = 0; i < filter_search.length; i++) {
				if (!filter_search[i].firstChild.firstChild.data.includes(this.value)) {
					filter_search[i].classList.add('not-search');
				} else {
					filter_search[i].classList.remove('not-search');
				}
			}
		} else {
		// Возвращаем все значения на место
			for (let i = 0; i < filter_search.length; i++) {
				if (filter_search[i].firstChild.firstChild.data !== this.value) {
					filter_search[i].classList.remove('not-search');
				}
			}
		}
	};

	// Блок списка Selected
	this.select_field = document.createElement('field');
	this.select_field.classList.add('selected');
	this.arrange_box.append(this.select_field);

	// Поле поиска для списка Selected
	this.select_input_search_field = document.createElement('input');
	this.select_input_search_field.type = 'search';
	this.select_input_search_field.placeholder = 'search...';
	this.select_input_search_field.classList.add('input-search');
	this.select_input_search_field.oninput = function () {
		const filter_search =
		this.parentNode.childNodes[2].querySelectorAll('list-element');
		if (this.value) {
			for (let i = 0; i < filter_search.length; i++) {
				if (filter_search[i].firstChild.firstChild.data !== this.value) {
					filter_search[i].classList.add('not-search');
				} else {
					filter_search[i].classList.remove('not-search');
				}
			}
		} else {
			for (let i = 0; i < filter_search.length; i++) {
				if (filter_search[i].firstChild.firstChild.data !== this.value) {
					filter_search[i].classList.remove('not-search');
				}
			}
		}
	};

	// Блок кнопок между полями
	this.list_buttons_between = document.createElement('btn-for-field');
	this.list_buttons_between.classList.add('btn-between');
	this.arrange_box.append(this.list_buttons_between);

	// Блок кнопок для поля Available
	this.list_buttons_left = document.createElement('btn-for-field');
	this.field.append(this.list_buttons_left);

	// Блок кнопок для поля Selected
	this.list_buttons_right = document.createElement('btn-for-field');
	this.select_field.append(this.list_buttons_right);

	// Добавим кнопки в соответсвующие блоки
	const titleBtn = [
		['/images/up-arrow-one.svg', 'Переместить элемент вверх на одну позицию'],
		['/images/up-arrow-double.svg', 'Переместить элементы в начало списка'],
		['/images/down-arrow-double.svg', 'Переместить элементы в конец списка'],
		['/images/down-arrow-one.svg', 'Переместить элемент вниз на одну позицию']
	];
	for (const title of titleBtn) {
		this.list_buttons_left.append(createButton(title));
		this.list_buttons_right.append(createButton(title));
	}
	const titleBetweenBtn = [
		['/images/right-arrow-one.svg', 'Переместить элементы вправо'],
		['/images/right-arrow-double.svg', 'Переместить все элементы вправо'],
		['/images/left-arrow-double.svg', 'Переместить все элементы влево'],
		['/images/left-arrow-one.svg', 'Переместить элементы влево']
	];
	for (const title of titleBetweenBtn) {
		this.list_buttons_between.append(createButton(title));
	}

	// Добавим непосредственно блок с полем для списка Available
	this.field_list = document.createElement('list');
	this.field_list.innerHTML = '<div class=list__header>Available</div>';
	this.field.append(this.field_list);
	this.field_list.append(this.input_search_field);
	// Добавим непосредственно блок с полем для списка Selected
	this.select_field_list = document.createElement('list');
	this.select_field_list.innerHTML = '<div class=list__header>Selected</div>';
	this.select_field.append(this.select_field_list);
	this.select_field_list.append(this.select_input_search_field);

	// Блок для расположения элементов Available
	this.list_of_elements = document.createElement('list-of-elements');
	this.field_list.append(this.list_of_elements);
	// Блок для расположения элементов Selected
	this.select_list_of_elements = document.createElement('list-of-elements');
	this.select_field_list.append(this.select_list_of_elements);

	// Генерирование списка Available
	this.size_list = Math.floor(Math.random() * (51 - 5) + 5);

	for (let i = 0; i < this.size_list; i++) {
		const element = document.createElement('list-element');
		element.innerHTML = `<p>${i}</p>`;
		element.onclick = function () {
		element.classList.contains('focused')
			? element.classList.remove('focused')
			: element.classList.add('focused');
		};
		this.list_of_elements.append(element);
	}

	// Обработчики нажатия на кнопки
	// Кнопка = Переместить элемент вверх на одну позицию в Available
	this.list_buttons_left.children[0].onclick = function () {
		const select = getListOfElements(this, true, true, false);
		if (select.length === 1) {
			if (select[0].previousSibling) {
				select[0].parentNode.insertBefore(select[0], select[0].previousSibling);
			}
		}
	};

	// Кнопка = Переместить элемент вверх на одну позицию в Selected
	this.list_buttons_right.children[0].onclick = function () {
		const select = getListOfElements(this, true, true, false);
		if (select.length === 1) {
			if (select[0].previousSibling) {
				select[0].parentNode.insertBefore(select[0], select[0].previousSibling);
			}
		}
	};

	// Кнопка = Переместить элементы вправо
	this.list_buttons_between.children[0].onclick = function () {
		const select = getListOfElements(this, true, false, true);
		const node_push = getNodePush(this, true);
		if (select.length !== 0) {
			for (const elem of select) {
				elem.classList.remove('focused');
				node_push.append(elem);
			}
		}
	};

	// Кнопка = Переместить элемент вниз на одну позицию в Available
	this.list_buttons_left.children[3].onclick = function () {
		const select = getListOfElements(this, true, true, false);
		if (select.length === 1) {
			if (select[0].nextSibling) {
				select[0].parentNode.insertBefore(select[0].nextSibling, select[0]);
			}
		}
	};

	// Кнопка = Переместить элемент вниз на одну позицию в Selected
	this.list_buttons_right.children[3].onclick = function () {
		const select = getListOfElements(this, true, true, false);
		if (select.length === 1) {
			if (select[0].nextSibling) {
				select[0].parentNode.insertBefore(select[0].nextSibling, select[0]);
			}
		}
	};

	// Кнопка = Переместить элементы влево
	this.list_buttons_between.children[3].onclick = function () {
		const select = getListOfElements(this, true, false, false);
		const node_push = getNodePush(this, false);
		if (select.length !== 0) {
			for (const elem of select) {
				elem.classList.remove('focused');
				node_push.append(elem);
			}
		}
	};

	// Кнопка = Переместить элементы в начало списка в Available
	this.list_buttons_left.children[1].onclick = function () {
		const select = getListOfElements(this, true, true, false);
		for (let i = 0; i < select.length; i++) {
			select[0].parentNode.insertBefore(
				select[i],
				select[0].parentNode.children[i]
			);
		}
	};

	// Кнопка = Переместить элементы в начало списка в Selected
	this.list_buttons_right.children[1].onclick = function () {
		const select = getListOfElements(this, true, true, false);
		for (let i = 0; i < select.length; i++) {
			select[0].parentNode.insertBefore(
				select[i],
				select[0].parentNode.children[i]
			);
		}
	};

	// Кнопка = Переместить все элементы из Available в Selected
	this.list_buttons_between.children[1].onclick = function () {
		const select = getListOfElements(this, false, false, true);
		const node_push = getNodePush(this, true);
		if (select.length !== 0) {
			for (const elem of select) {
				elem.classList.remove('focused');
				node_push.append(elem);
			}
		}
	};

	// Кнопка = Переместить элементы в конец списка в Available
	this.list_buttons_left.children[2].onclick = function () {
		const select = getListOfElements(this, true, true, false);
		for (let i = 1; i < select.length + 1; i++) {
			select[0].parentNode.insertBefore(
				select[i - 1],
				select[0].parentNode.children[-i]
			);
		}
	};

	// Кнопка = Переместить элементы в конец списка в Selected
	this.list_buttons_right.children[2].onclick = function () {
		const select = getListOfElements(this, true, true, false);
		for (let i = 1; i < select.length + 1; i++) {
			select[0].parentNode.insertBefore(
				select[i - 1],
				select[0].parentNode.children[-i]
			);
		}
	};

	// Кнопка = Переместить все элементы из Selected в Available
	this.list_buttons_between.children[2].onclick = function () {
		const select = getListOfElements(this, false, false, false);
		const node_push = getNodePush(this, false);
		if (select.length !== 0) {
			for (const elem of select) {
				elem.classList.remove('focused');
				node_push.append(elem);
			}
		}
	};

	// Добавление на страницу ArrangeBox
	this.addToPage = function () {
		// Поиск места вставки
		const node_push = document.getElementsByClassName('arrange-box')[0];
		// Добавить на страницу
		node_push.append(this.arrange_box);
	};

	function createButton(titleBtn) {
		const new_button = document.createElement('button');
		new_button.classList.add('btn-list');
		new_button.innerHTML = `<img src='${titleBtn[0]}' alt='${titleBtn[1]}'></img>`;
		return new_button;
	}

	// Получение списка list-element для обработки
	function getListOfElements(elem, focused, in_list, in_select) {
		let result = [];
		const search = 'list-element' + (focused ? '.focused' : '');
		if (in_list) {
			result =
				elem.parentNode.parentNode.childNodes[1].childNodes[2].querySelectorAll(
					search
				);
		} else {
			result = in_select
				? elem.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[2].querySelectorAll(
					search
				)
				: elem.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[2].querySelectorAll(
					search
				);
		}
		return result;
	}

	// Получение узла вставки list-element
	function getNodePush(elem, in_select) {
		return in_select
		? elem.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[2]
		: elem.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[2];
	}
}